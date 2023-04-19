import React from "react";

function NavLanding() {
  return (
    <nav
      class="border-grey-100 border-b bg-neutral-900
    dark:bg-gray-900 "
    >
      <div class=" mx-auto flex w-full flex-wrap items-center justify-between p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-8"
            alt="Flowbite Logo"
          /> */}
          <span class="self-center whitespace-nowrap  text-2xl font-semibold text-neutral-200">
            WAVESENSE
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="mt-4 flex flex-col  font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0">
            <li>
              <a
                href="#"
                class="md:text-grey-100 md:dark:text-grey-100 block   py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0"
                aria-current="page"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="md:text-grey-100 md:dark:text-grey-100 block   py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0"
              >
                sensor
              </a>
            </li>
            <li>
              <a
                href="#"
                class="md:text-grey-100 md:dark:text-grey-100 block   py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0"
              >
                login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavLanding;
