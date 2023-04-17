import React from "react";

function Footer() {
  return (
    <footer
      class="border-grey-100 mt-auto border-t bg-neutral-900
    dark:bg-gray-900 "
    >
      <div class=" max-w-screen-xl md:py-1">
        {/* p-4 md:py-8 */}
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://wavesense.com/"
            class="mb-4 flex items-center sm:mb-0"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-8"
              alt="Flowbite Logo"
            /> */}
            <span class="self-center whitespace-nowrap  text-2xl font-semibold text-neutral-200">
              WAVESENSE
            </span>
          </a>
          <ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-white dark:text-white sm:mb-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Usecases
              </a>
            </li>

            <li>
              <a href="#" class="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <span class="block text-sm text-neutral-400 dark:text-neutral-400 sm:text-justify">
          © 2023{" "}
          <a href="https://wavesense.com/" class="hover:underline">
            WAVESENSE™
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
