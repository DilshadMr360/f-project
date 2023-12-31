import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Home = () => {



    return (
        <div>

<div className="relative h-screen">
      <section className="flex flex-col items-center justify-center h-full relative z-10 ">
        <img
          className="absolute left-0 right-0 w-full h-full object-cover z-[-1] "
          src="/assets/prediction_2.jpg"
          alt=""
        />
         
         <div className=' mt-5'>
          <h1 className='font-bold text-3xl text-teal-950'>Predicting the 'Time' to Design your Own Jewellery Idea</h1>
          <h1 className='text-center font-bold mt-2'>Select the Following Details</h1>
         </div>

        <div className='bg-white w-10/12  md:w-4/12 h-auto py-2 rounded mt-2'>
            <form action=" ">
<div className='md:w-6/12 w-8/12  mx-auto'>
<label
                htmlFor="email"
                className="block mb-2 text-md  text-black font-bold "
              >
               Product Category
              </label>
             
                       <select className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black">
                                <option value="">Rings</option>
                                <option value="AL">Chain</option>
                                <option value="AK">Neckless</option>
                                <option value="AK">Banlge</option>
                                <option value="AK">Earing</option>
                                <option value="AK">Bracelest</option>
                                <option value="AK">Pendant</option>



                            </select>
<label
                htmlFor="email"
                className="block mb-2 text-md  text-black font-bold "
              >
               Material Choices
              </label>
             
                       <select className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black">
                                <option value="">Gold</option>
                                <option value="">White Gold</option>
                                <option value="AL">Try Color</option>
                                <option value="AK">Diamonds</option>
                                <option value="AK">Platinum</option>
                                <option value="AK">Silver</option>



                            </select>
                      
<label
                htmlFor="email"
                className="block mb-2 text-md  text-black font-bold "
              >
              Method of Crafting
              </label>
             
                       <select className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black">
                                <option value="">Hand Made </option>
                                <option value="">Machine Made</option>
                          



                            </select>

                            <label
                htmlFor="email"
                className="block mb-2 text-md  text-black font-bold "
              >
              Designer Types
              </label>
             
                       <select className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black">
                                <option value="">Plane Band Design </option>
                                <option value="">Designer  Rings</option>
                          



                            </select>

                            <label
                htmlFor="email"
                className="block mb-2 text-md  text-black font-bold "
              >
           Net Weight
              </label>
             
                       <select className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black">
                                <option value="">2.59g</option>
                                <option value="">1.813g</option>
                                <option value="">2.551g</option>
                                
                          

                            </select>

                            
                            <label
                htmlFor="email"
                className="block mb-2 text-md  text-black font-bold "
              >
Select Finish
              </label>
             
                       <select className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black">
                                <option value="">Polished </option>
                                <option value="">Matte </option>
                                <option value="">Textured </option>
                          



                            </select>


                            <label
                htmlFor="email"
                className="block mb-2 text-md  text-black font-bold "
              >
           Select Texture
              </label>
             
                       <select className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black">
                                <option value="">Smooth </option>
                                <option value="">Rough </option>
                                <option value="">Engraved  Rings</option>
                          



                            </select>

</div>
            
  <div className='flex justify-center mt-5'>
  <button  className="w-40 font-kanit bg-teal-700 hover:bg-teal-900 text-white text-xl py-2 px-2 mt-2 rounded-2xl font-light  ">
           Predict Time
          </button>
  </div>


            </form>
        </div>

      </section>
    </div>


        </div>
    )
}

export default Home
