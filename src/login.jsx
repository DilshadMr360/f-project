import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='relative h-screen'>
    <section className="flex flex-col items-center justify-center h-full relative z-10 ">
        <img className='absolute left-0 right-0 w-full h-full object-cover z-[-1]' src="/assets/login.jpg" alt="" />
    

        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  md:w-4/12 bg-gray-500 bg-opacity-60 rounded-r-lg">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 font-bold md:text-3xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 font-bold ">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900 font-bold ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-900 font-bold ">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 font-bold">Forgot password?</a>
              </div>
              <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center font-bold">Sign in</button>

              <Link to="/register">
              <a href="">
              <p className="text-xl font-light text-black font-bold">
                Don’t have an account yet? <a href="#" className="font-medium text-black font-bold hover:underline text-xl">Sign up</a>
              </p>
              </a>
              </Link>
          
              
            </form>
          </div>
 
    </section>
</div>
  )
}

export default Login
