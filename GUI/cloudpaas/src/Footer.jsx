import React from "react";

function Footer() {
  return (
    <footer class=" bottom-0 left-0 z-20  mt-auto w-full border-t border-gray-200 bg-gray-900 p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <span class="text-sm text-white sm:text-center">
        © 2023{" "}
        <a href="/" class="hover:underline">
          Quick Sense™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="mt-3 flex flex-wrap items-center text-sm font-medium text-white sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="/developers" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
