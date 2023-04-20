import React from "react";

function Footer() {
  return (
    // <footer
    //   class="border-grey-100 mt-auto border-t bg-neutral-900
    // dark:bg-gray-900 "
    // >
    //   <div class=" max-w-screen-xl md:py-1">
    //     {/* p-4 md:py-8 */}
    //     <div class="sm:flex sm:items-center sm:justify-between">
    //       <a
    //         href="https://wavesense.com/"
    //         class="mb-4 flex items-center sm:mb-0"
    //       >
    //         {/* <img
    //           src="https://flowbite.com/docs/images/logo.svg"
    //           class="mr-3 h-8"
    //           alt="Flowbite Logo"
    //         /> */}
    //         <span class="self-center whitespace-nowrap  px-4 text-2xl font-semibold text-neutral-200">
    //           WAVESENSE
    //         </span>
    //       </a>
    //       <ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-white dark:text-white sm:mb-0">
    //         <li>
    //           <a href="#" class="mr-4 hover:underline md:mr-6 ">
    //             Documentation
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" class="mr-4 hover:underline md:mr-6">
    //             Usecases
    //           </a>
    //         </li>

    //         <li>
    //           <a href="#" class="hover:underline">
    //             Contact Us
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     <span class="block px-4 text-sm text-neutral-400 dark:text-neutral-400 sm:text-justify">
    //       © 2023{" "}
    //       <a href="https://wavesense.com/" class="hover:underline">
    //         WAVESENSE™
    //       </a>
    //     </span>
    //   </div>
    // </footer>

    // <footer class="bg-white shadow m-4 dark:bg-gray-800">
    //   <div class="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    //     <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    //     </span>
    //     <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
    //       <li>
    //         <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
    //       </li>
    //       <li>
    //         <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
    //       </li>
    //       <li>
    //         <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
    //       </li>
    //       <li>
    //         <a href="#" class="hover:underline">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    // </footer>

    // bg-gray-800 border-gray-600
    <footer class=" bottom-0 left-0 z-20  mt-auto w-full border-t border-gray-200 bg-gray-900 p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <span class="text-sm text-white sm:text-center">
        © 2023{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          Kulla Gang™
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
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
