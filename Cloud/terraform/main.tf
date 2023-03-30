terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  project = "cloud-iot-368611"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_compute_firewall" "default" {
  name    = "broker-firewall"
  network = google_compute_network.default.name

  allow {
    protocol = "tcp"
    ports    = ["22", "1883"]
  }
}

resource "google_compute_network" "default" {
  name = "cloud-iot-paas-network"
}

resource "google_compute_instance" "default" {
  name         = "broker"
  machine_type = "e2-medium"

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2004-lts"
    }
  }

  network_interface {
    network = google_compute_network.default.name

    access_config {
      // Ephemeral public IP
    }
  }

    metadata_startup_script = "${file("${path.module}/broker/startup.sh")}"
}