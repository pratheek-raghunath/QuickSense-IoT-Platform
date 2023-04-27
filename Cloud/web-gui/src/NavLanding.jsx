import React from "react";
import { Link } from "react-router-dom";
import Login from "./components/Login";

function NavLanding() {
  return (
    <nav class="border-b border-gray-200 bg-gray-900">
            <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="http://orensaldanha.live" class="flex items-center">
                    {/* https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_960_720.png */}
                    {/* https://cdn.pixabay.com/photo/2016/12/17/15/50/logo-1913689_960_720.png */}
                    {/* https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-icons-folders-cloud-box-with-sitting-people-vector-illustration_1284-65949.jpg?w=740&t=st=1681834536~exp=1681835136~hmac=3d4ba0cdab81c7dbf618117631975b296f4fdaca938c21f96d5ff53b014936ae */}
                    <img src="../src/images/logo.png" class="h-8 mr-3" alt="Our Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Kulla Gang</span>
                </a>
                <div class="flex items-center md:order-2">
                <a type="button" href="/login" class="text-white font-semibold border-white border-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</a>
                    {/* <!-- Dropdown menu --> */}
                    <div class="z-50 hidden my-4 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600" id="user-dropdown">
                        <div class="px-4 py-3">
                            <span class="block text-sm  text-white">Kulla Gang</span>
                            <span class="block text-sm  truncate text-gray-400">kullagang@kullagang.com</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                        <li>
                            <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 rounded  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Sensors</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 rounded  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default NavLanding;
