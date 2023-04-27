import React from 'react';

const SignUp = () => {
    return (
        <section class="h-screen bg-slate-950">
            <div class="container h-full px-6 m-auto lg:px-60 py-24 items-center justify-items-center">
                <div
                    class="g-6 flex h-full flex-wrap items-center justify-center -mt-20">

                    {/* Left Side Text */}
                    <div class="items-center justify-center text-center -ml-4  mb-12 md:mb-0 md:w-8/12 lg:w-3/12 hidden lg:block xl:block">

                        <h1 class="text-4xl mb-4 text-center font-bold leading-tight tracking-normal  md:text-5xl text-white">Sign Up to KullaGang</h1>
                        <h5 class="text-md text-center leading-tight tracking-tight  md:text-3xl text-white">Already have an account?</h5>
                        <a href="/login" class="text-lg font-bold hover:underline text-blue-500">Login</a>

                    </div>
                    {/* <!-- Left column container with background--> */}
                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-4/12 hidden lg:block xl:block">
                        {/* <div>
                            <h1 class="text-4xl font-bold leading-tight tracking-tight  md:text-5xl text-white">Sign Up here</h1>
                        </div> */}
                        <img
                            src="../../src/images/SignUp.png"
                            class="w-full "
                            alt="Sign Up Image" />
                    </div>

                    {/*<!-- Right column container with form -->*/}
                    <div class="w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                                Create your account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium  text-white">Enter email</label>
                                    <input type="email" name="email" id="email" class=" border sm:text-sm rounded-lg  block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>

                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium  text-white">Create username</label>
                                    <input type="text" name="username" id="username" class=" border sm:text-sm rounded-lg  block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="user_123" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" class=" border sm:text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-white">Confirm Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class=" border sm:text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>
                                <br></br>
                                {/* <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border rounded  focus:ring-3 bg-white border-gray-600 focus:ring-blue-600 ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class=" text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium hover:underline text-blue-500">Forgot password?</a>
                                </div> */}
                                <button type="submit" class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700 hover:bg-blue-600 focus:ring-blue-800">Sign Up</button>
                                {/* <p class="text-sm font-light  text-gray-400">
                                    Dont have an account yet? <a href="#" class="font-medium hover:underline text-blue-500">Sign up</a>
                                </p> */}
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SignUp;