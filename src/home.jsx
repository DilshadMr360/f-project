import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'react-dropdown/style.css';


const Home = () => {
    const label = { label: 'Your Label' };
    const [isModalOpen, setIsModalOpen] = useState(false);



    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    // const CustomCheckbox = ({ label, ...props }) => (
    //     <div>
    //       <Checkbox {...props} />
    //       <label>{label}</label>
    //     </div>
    //   );




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
                    <div className='flex items-center mt-5'>

                        <div className=' bg-green-500 flex w-40 h-12 rounded-md item-center justify-center  mt-2 mx-5'>
                            <button className=' text-white font-bold text-center'>Predict the Price</button>
                        </div>
                        <label htmlFor="" className='bg-white w-40 h-11 text-center justify-center flex items-center'>
                            Rs ?
                        </label>
                        <div className=' bg-green-500 flex w-60 h-12 rounded-md item-center justify-center  mt-2 mx-5'>
                            <button onClick={openModal} className=' text-white font-bold text-center'>Predict Monthly Expenses</button>
                        </div>


                    </div>

                    {/* Modal */}
                    {/* {isModalOpen && (
    <div className='fixed inset-0 flex items-center justify-center' onClick={handleOverlayClick}>
        <div className='absolute bg-white p-5 rounded-md'>
            <p>Hello</p>
            <button onClick={closeModal}>Close</button>
        </div>
    </div>
)} */}

                    {/* Modal */}
                    {isModalOpen && (
                        <div className='fixed inset-0 flex items-center justify-center'>
                            {/* Semi-transparent black background */}
                            <div className='absolute inset-0 bg-black opacity-50'></div>

                            {/* Modal content */}
                            <div className='absolute bg-white p-5 rounded-md border-4 w-8/12'>
                                {/* <CustomCheckbox label="Checkbox 1" defaultChecked /> */}
                                {/* <CustomCheckbox label="Checkbox 2" /> */}
                                {/* <CustomCheckbox label="Checkbox 3 (Disabled)" disabled /> */}
                                {/* <CustomCheckbox label="Checkbox 4 (Disabled Checked)" disabled checked /> */}
                                <div className=''>
                                    <div className='flex justify-end '>
                                        <button c onClick={closeModal}>Close</button>

                                    </div>

                                    <div>
                                        <h1 className=' text-xl'>Select Appliances for Monthly Expense Estimate </h1>
                                    </div>

                                    <div className='flex justify-between mt-5'>
                                        <FormControlLabel control={<Checkbox {...label} />} label="Air Conditioner" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Fan" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Refrigarator" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Television" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="CCTV" className=' w-48' />
                                    </div>
                                    <div className='flex justify-between'>


                                        <FormControlLabel control={<Checkbox {...label} />} label="Micorawan" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="LED Lights" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Water Heater" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Rice Cooker" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Laptop" className=' w-48' />
                                    </div>

                                    <div className='flex item-center justify-center mx-auto  gap-2 mt-5'>
                                        <div className=' bg-green-500 flex w-60 h-12 rounded-md justify-center '>
                                            <button onClick={openModal} className=' text-white font-bold text-center'>Predict Monthly Expenses</button>

                                        </div>
                                        <label htmlFor="" className=' w-40 h-12 text-center justify-center flex items-center bg-gray-200'>
                                            Rs ?
                                        </label>
                                    </div>


                                </div>

                                {/* <FormControlLabel control={<Checkbox {...label} />} label="Unchecked" /> */}
                                {/* <FormControlLabel control={<Checkbox {...label} disabled />} label="Disabled" /> */}
                                {/* <FormControlLabel control={<Checkbox {...label} disabled checked />} label="Disabled Checked" /> */}
                            </div>
                        </div>
                    )}

                </div>


            </div>





            {/* separate filtering part */}

            <div className='w-full  md:flex flex-row mt-5 border-4'>







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
