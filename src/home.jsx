import React from 'react'


import 'react-dropdown/style.css';


const Home = () => {
    return (
        <div className='mx-10'>
            <div className='w-full py-5  md:flex '>
                <div className='w-3/12'>
                    <h1 className='text-black font-bold text-3xl'>Home</h1>
                </div>

                <div className='w-6/12  flex justify-center bg-slate-200 gap-2 px-4 py-4 rounded-lg'>
                    <button className='rounded-2xl text-white font-bold bg-green-600 border text-sm px-4 py-2'>Top Cities</button>
                    <button className='rounded-2xl text-white font-bold bg-green-600 border text-sm  px-4 py-2'>Saved Posts</button>
                </div>
            </div>


            <div className=''>
                <h1 className='text-black font-bold'>2058 Results <span className='text-gray-400'>in Sri Lanka</span></h1>
                <div>
                    <input type="text"
                        placeholder='Search by location'
                        className=' border rounded-md placeholder-black  bg-slate-200 px-2 py-2'
                    />
                </div>
            </div>


            {/* separate filtering part */}

            <div className='bg-slate-200 border-4 w-full md:flex  mt-5 py-2'>

                <div className=' w-4/12'>
                    <h1 className='text-3xl'><span className='text-green-700 font-medium'>Predict</span> Your Dream House <span className='text-green-700 font-medium'>Price</span>  </h1>
                </div>


                <div className=' w-8/12'>
                    <div className='flex flex-col'>


{/* Filter part */}


                    <div className=' flex  gap-2 px-4 py-4 rounded-lg'>
                        <img
                            className="w-5 h-5 items-start"
                            src="/assets/filter.png"
                            alt=""
                        />
                        <h1>Filters</h1>
                    </div>
                        <div className='flex'>
                            {/* dropdown */}
                            <div className='mx-5 mt-4 overflow-y-auto border'>
                                <select class="ui search dropdown w-40">
                                    <option value="">Rooms</option>
                                    <option value="AL">1</option>
                                    <option value="AK">2</option>
                                    <option value="AZ">3</option>
                                    <option value="AR">4</option>



                                </select>
                            </div>

                            {/* dropdown */}

                            {/* dropdown */}
                            <div className='mx-5 mt-4 overflow-y-auto border'>
                                <select class="ui search dropdown w-40">
                                    <option value="">Rooms</option>
                                    <option value="AL">1</option>
                                    <option value="AK">2</option>
                                    <option value="AZ">3</option>
                                    <option value="AR">4</option>



                                </select>
                            </div>

                            {/* dropdown */}
                        </div>

                        <div className='flex'>
                            {/* dropdown */}
                            <div className='mx-5 mt-4 overflow-y-auto border'>
                                <select class="ui search dropdown w-40">
                                    <option value="">Rooms</option>
                                    <option value="AL">1</option>
                                    <option value="AK">2</option>
                                    <option value="AZ">3</option>
                                    <option value="AR">4</option>



                                </select>
                            </div>

                            {/* dropdown */}
                            {/* dropdown */}
                            <div className='mx-5 mt-4 overflow-y-auto border'>
                                <select class="ui search dropdown w-40">
                                    <option value="">Rooms</option>
                                    <option value="AL">1</option>
                                    <option value="AK">2</option>
                                    <option value="AZ">3</option>
                                    <option value="AR">4</option>



                                </select>
                            </div>

                            {/* dropdown */}
                            {/* dropdown */}
                            <div className='mx-5 mt-4 overflow-y-auto border'>
                                <select class="ui search dropdown w-40">
                                    <option value="">Rooms</option>
                                    <option value="AL">1</option>
                                    <option value="AK">2</option>
                                    <option value="AZ">3</option>
                                    <option value="AR">4</option>



                                </select>
                            </div>

                            {/* dropdown */}
                        </div>

                    </div>
                    <div className=' bg-green-500 flex w-40 h-12 rounded-md item-center justify-center  mt-2 mx-5'>
                        <button className=' text-white font-bold text-center'>Predict the Price</button>
                    </div>

                </div>


            </div>





            {/* separate filtering part */}

            <div className='w-full  md:flex flex-row mt-5 border-4'>


                {/* Filter part */}
                {/* <div className='w-3/12'>


                    <div className=' flex  gap-2 px-4 py-4 rounded-lg'>
                        <img
                            className="w-5 h-5 items-start"
                            src="/assets/filter.png"
                            alt=""
                        />
                        <h1>Filters</h1>
                    </div>

                    <div className=''> */}

                        {/* dropdown */}
                        {/* <div className='mx-5 mt-4 overflow-y-auto border'>
                            <select class="ui search dropdown w-40">
                                <option value="">District</option>
                                <option value="AL">Colombo</option>
                                <option value="AK">Gampaha</option>
                                <option value="AZ">Kaluthara</option>
                                <option value="AR">Mathara</option> */}
                                {/* <option value="CA">Kandy</option>
  <option value="CO">Puthalam</option>
  <option value="CT">Jaffna</option>
  <option value="DE">Polonnaruwa</option>
  <option value="DC">Kurunagala</option>
  <option value="DC">Batticaloa</option>
  <option value="FL">Anuradhapura</option>
  <option value="FL">Hambanthota</option>
  <option value="FL">Ampara</option>
  <option value="FL">Badulla</option>
  <option value="FL">Kagalle</option>
  <option value="FL">Kilinochi</option>
  <option value="FL">Mannar</option>
  <option value="FL">Nuwaraeliye</option>
  <option value="FL">Mathale</option>
  <option value="FL">Vavuniya</option>
  <option value="FL">Thrincomalee</option>
  <option value="FL">Rathnapura</option>
  <option value="FL">Mulathiv</option>
  <option value="FL">Monaragala</option> */}


                            {/* </select>
                        </div> */}

                        {/* dropdown */}


                        {/* dropdown */}
                        {/* <div className='mx-5 mt-4 overflow-y-auto border'>
                            <select class="ui search dropdown w-40">
                                <option value="">Rooms</option>
                                <option value="AL">1</option>
                                <option value="AK">2</option>
                                <option value="AZ">3</option>
                                <option value="AR">4</option>



                            </select>
                        </div> */}

                        {/* dropdown */}

                        {/* dropdown */}
                        {/* <div className='mx-5 mt-4 overflow-y-auto border'>
                            <select class="ui search dropdown w-40">
                                <option value="">Bathrooms</option>
                                <option value="AL">1</option>
                                <option value="AK">2</option>
                                <option value="AZ">3</option>



                            </select>
                        </div> */}

                        {/* dropdown */}

                        {/* dropdown */}
                        {/* <div className='mx-5 mt-4 overflow-y-auto border'>
                            <select class="ui search dropdown w-40">
                                <option value="">Land Size</option>
                                <option value="AL">1</option>
                                <option value="AK">2</option>
                                <option value="AZ">3</option>



                            </select>
                        </div> */}

                        {/* dropdown */}

                        {/* dropdown */}
                        {/* <div className='mx-5 mt-4 overflow-y-auto border'>
                            <select class="ui search dropdown w-40">
                                <option value="">House Size</option>
                                <option value="AL">1</option>
                                <option value="AK">2</option>
                                <option value="AZ">3</option>



                            </select>
                        </div> */}

                        {/* dropdown */}
                    {/* </div>

                    <div className='mx-auto bg-green-500 flex w-40 h-12 rounded-md item-center justify-center text-center mt-5'>
                        <button className=' text-white font-bold '>Predict the Price</button>
                    </div> */}




                {/* </div> */}
                {/* Filter part */}





                <div className='flex flex-row  w-full justify-between'>

                    {/* image 1  */}

                    <div className=' bg-gray-100 py-2 px-2 rounded-2xl'>
                        <img
                            className="md:w-[450px] h-60 items-start border rounded-tl-3xl rounded-tr-3xl rounded-bl-md rounded-br-md"
                            src="/assets/login.jpg"
                            alt=""
                        />

                        <div className='flex flex-row justify-around mt-2 gap-2'>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>3 Beds</h1>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>2 Baths</h1>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>1520 ft</h1>
                        </div>

                        <div className='flex flex-row items-center justify-around bg-white rounded-tl-md rounded-tr-md rounded-bl-3xl  rounded-br-3xl mt-2'>
                            <h1 className='text-gray-800 font-medium text-3xl'>Rs 12,000,00</h1>
                            <h1 className='text-black w-40 text-center'>140 Lewis Rd Kollpitya Colombo</h1>

                        </div>
                    </div>
                    {/* image 1 end */}

                    {/* image 2  */}

                    <div className=' bg-gray-100 py-2 px-2 rounded-2xl'>
                        <img
                            className="md:w-[450px] h-60 items-start border rounded-tl-3xl rounded-tr-3xl rounded-bl-md rounded-br-md"
                            src="/assets/login.jpg"
                            alt=""
                        />

                        <div className='flex flex-row justify-around mt-2 gap-2'>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>3 Beds</h1>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>2 Baths</h1>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>1520 ft</h1>
                        </div>

                        <div className='flex flex-row items-center justify-around bg-white rounded-tl-md rounded-tr-md rounded-bl-3xl  rounded-br-3xl mt-2'>
                            <h1 className='text-gray-800 font-medium text-3xl'>Rs 12,000,00</h1>
                            <h1 className='text-black w-40 text-center'>140 Lewis Rd Kollpitya Colombo</h1>

                        </div>
                    </div>


                    {/* image 2 end */}


  {/* image 1  */}

  <div className=' bg-gray-100 py-2 px-2 rounded-2xl'>
                        <img
                            className="md:w-[450px] h-60 items-start border rounded-tl-3xl rounded-tr-3xl rounded-bl-md rounded-br-md"
                            src="/assets/login.jpg"
                            alt=""
                        />

                        <div className='flex flex-row justify-around mt-2 gap-2'>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>3 Beds</h1>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>2 Baths</h1>
                            <h1 className='bg-white rounded-md w-4/12 text-center'>1520 ft</h1>
                        </div>

                        <div className='flex flex-row items-center justify-around bg-white rounded-tl-md rounded-tr-md rounded-bl-3xl  rounded-br-3xl mt-2'>
                            <h1 className='text-gray-800 font-medium text-3xl'>Rs 12,000,00</h1>
                            <h1 className='text-black w-40 text-center'>140 Lewis Rd Kollpitya Colombo</h1>

                        </div>
                    </div>
                    {/* image 1 end */}

                </div>


            </div>



        </div>
    )
}

export default Home
