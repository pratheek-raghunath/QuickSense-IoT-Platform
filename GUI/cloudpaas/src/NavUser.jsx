import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function NavUser() {
  return (
    <nav class=" border-gray-200 bg-gray-900">
      <div class=" mx-auto flex flex-wrap items-center justify-between p-4">
        <a href="http://orensaldanha.live" class="flex items-center">
          {/* https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_960_720.png */}
          {/* https://cdn.pixabay.com/photo/2016/12/17/15/50/logo-1913689_960_720.png */}
          {/* https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-icons-folders-cloud-box-with-sitting-people-vector-illustration_1284-65949.jpg?w=740&t=st=1681834536~exp=1681835136~hmac=3d4ba0cdab81c7dbf618117631975b296f4fdaca938c21f96d5ff53b014936ae */}
          <img src="../src/images/logo.png" class="mr-3 h-8" alt="Our Logo" />
          <span class="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Kulla Gang
          </span>
        </a>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-600 md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="h-8 w-8 rounded-full border-2 border-white"
              src="../src/images/avatar.png"
              alt="user photo"
            />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            class="z-50 my-4 hidden list-none divide-y divide-gray-600 rounded-lg bg-gray-700 text-base shadow"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm  text-white">Kulla Gang</span>
              <span class="block truncate  text-sm text-gray-400">
                kullagang@kullagang.com
              </span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
            aria-controls="mobile-menu-2"
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
        </div>
        <div
          class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-2"
        >
          <ul class="mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900 md:p-0">
            <li>
              <NavLink
                class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-500"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-700 " : "font-bold text-white"
                }
                to="/dashboard/visualisation"
              >
                Visualisation
              </NavLink>
            </li>
            <li>
              <NavLink
                class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-500"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-700 " : "font-bold text-white"
                }
                to="/dashboard/alert"
              >
                Alerts
              </NavLink>
            </li>
            <li>
              <NavLink
                class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-500"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-700 " : "font-bold text-white"
                }
                to="/dashboard/sensor"
              >
                Sensors
              </NavLink>
            </li>
            <li>
              <NavLink
                class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-500"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-700 " : "font-bold text-white"
                }
                to="/dashboard/microprocessor"
              >
                Microprocessor
              </NavLink>
            </li>
            <li>
              <NavLink
                class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-500"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-700 " : "font-bold text-white"
                }
                to="/dashboard/actions"
              >
                Actions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavUser;
