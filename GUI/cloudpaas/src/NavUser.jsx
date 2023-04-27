import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import logo from "../src/images/logo.png"



function NavUser() {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("user");
    return navigate("/");
  }

  return (
    <nav class="border-b border-gray-200 bg-gray-900">
      <div class=" mx-auto flex flex-wrap items-center justify-between p-4">
        <a href="http://www.quicksense.live" class="flex items-center">
          {/* https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_960_720.png */}
          {/* https://cdn.pixabay.com/photo/2016/12/17/15/50/logo-1913689_960_720.png */}
          {/* https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-icons-folders-cloud-box-with-sitting-people-vector-illustration_1284-65949.jpg?w=740&t=st=1681834536~exp=1681835136~hmac=3d4ba0cdab81c7dbf618117631975b296f4fdaca938c21f96d5ff53b014936ae */}
          <img src={logo} class="h-8 w-10 mr-3 object-cover" alt="Quick Sense Logo" />
          <span class="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Quick Sense
          </span>
        </a>
        <div class="flex items-center md:order-2">
          {/* <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> */}
          <button class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" type="button" onClick={onLogout}>Log Out</button>
          {/* <!-- Dropdown menu --> */}
          <div id="dropdownInformation" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Bonnie Green</div>
              <div class="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
            </ul>
            <div class="py-2">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
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
