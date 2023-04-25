import React from 'react';
import {
    Input,
    Ripple,
    initTE,
} from "tw-elements";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

initTE({ Input, Ripple });
function Login2() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.username.value)
        console.log(event.target.password.value)

        let username = event.target.username.value
        let password = event.target.password.value

        axios.post('http://api.orensaldanha.live/auth/login', {
            username: username,
            password: password
        })
        .then(res => {
            console.log(res.data)
            localStorage.setItem("user", JSON.stringify(res.data));
            return navigate("/dashboard/visualisation");
        })
        .catch(err => {
            alert("Invalid username/password")
            console.log(err)
        })
    }

    return (
        <section class="h-screen bg-slate-950">
            <div class="container h-full px-6 m-auto lg:px-60 py-24 items-center justify-items-center">
                <div
                    class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* <!-- Left column container with background--> */}
                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 hidden lg:block xl:block">
                        <img
                            src="../../src/images/Saly1.png"
                            class="w-full"
                            alt="Phone image" />
                    </div>

                    {/*<!-- Right column container with form -->*/}
                    <div class="w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                                Sign in to your account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label for="username" class="block mb-2 text-sm font-medium  text-white">Your username</label>
                                    <input type="username" name="username" id="username" class=" border sm:text-sm rounded-lg  block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class=" border sm:text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border rounded  focus:ring-3 bg-white border-gray-600 focus:ring-blue-600 ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class=" text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium hover:underline text-blue-500">Forgot password?</a>
                                </div>
                                <button type="submit" class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700 hover:bg-blue-600 focus:ring-blue-800">Sign in</button>
                                <p class="text-sm font-light  text-gray-400">
                                    Dont have an account yet? <a href="/signUp" class="font-medium hover:underline text-blue-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>

                    

                </div>
            </div>
        </section>
    );
}

export default Login2;