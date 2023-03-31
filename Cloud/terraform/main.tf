terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  project = "cloud-based-iot-deployment"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_compute_firewall" "default" {
  name    = "cloud-based-iot-deployment-firewall"
  network = google_compute_network.default.name

  allow {
    protocol = "tcp"
    ports    = ["22", "1883", "27017", "80", "443"]
  }
}

resource "google_compute_network" "default" {
  name = "cloud-based-iot-deployment-network"
}

resource "google_compute_instance" "default" {
  name         = "cloud-based-iot-deployment"
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
      nat_ip = "34.122.170.116"
    }
  }

    metadata_startup_script = "${file("${path.module}/startup.sh")}"
}