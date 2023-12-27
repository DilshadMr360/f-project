import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';


const Home = () => {
    const label = { label: 'Your Label' };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [waterBillModalOpen, setWaterBillModalOpen] = useState(false);



    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal2 = () => {
        setWaterBillModalOpen(true);
    }

    const closeModal2 = () => {
        setWaterBillModalOpen(false);
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };



    // wishlist toggle function
        const [isSelected, setIsSelected] = useState(false);
      
        const handleToggle = () => {
          setIsSelected(!isSelected);
        };

    // end wishlist toggle parent

    // const CustomCheckbox = ({ label, ...props }) => (
    //     <div>
    //       <Checkbox {...props} />
    //       <label>{label}</label>
    //     </div>
    //   );




    return (
        <div className='mx-10'>
            <div className='w-full py-5  md:flex '>
                <div className='md:w-3/12'>
                    <h1 className='text-black font-bold text-3xl md:text-start text-center'>Home</h1>
                </div>

                <div className='md:w-6/12  flex justify-center bg-slate-200 gap-2 px-4 py-4 rounded-lg'>
                    <button className='rounded-2xl text-white font-bold bg-green-600 border text-sm px-4 py-2'>Predicted History</button>
                    <button className='rounded-2xl text-white font-bold bg-green-600 border text-sm  px-4 py-2'>My Wishlist</button>
                </div>
            </div>


            <div className=''>
                <div className='flex  items-end text-end'>
                <h1 className='text-black font-bold mx-auto '>Predict Monthly Expenses </h1>

                </div>
                <div className='flex mt-2 '>

                <div className='md:flex mx-auto'>

                <div className=' bg-green-500 flex w-40 h-12 rounded-md item-center justify-center  md:mx-5 '>
                            <button onClick={openModal} className=' text-white font-bold text-center'> Electricity Expenses</button>
                        </div>

                        {/* <div className=' bg-green-500 flex w-40 h-12 rounded-md item-center justify-center md:mt-0 mt-2'>
                            <button onClick={openModal2} className=' text-white font-bold text-center'>  Waterbill Expenses </button>
                        </div> */}
                </div>

                </div>

            </div>


            {/* separate filtering part */}

            <div className='bg-slate-200 border-4 w-full md:flex  mt-5 py-2'>

                <div className='md:w-4/12  my-auto mx-5 text-center justify-center '>
                    <h1 className='text-3xl'><span className='text-green-700 font-medium'>Predict</span> Your Dream House <span className='text-green-700 font-medium'>Price</span>  </h1>
                </div>


                <div className=' md:w-8/12 md:mx-0 mx-10'>
                <div className='flex flex-col'>

{/* Filter part */}
<div className='flex gap-2 px-4 py-4 rounded-lg items-center'>
    <img
        className="w-5 h-5"
        src="/assets/filter.png"
        alt=""
    />
    <h1 className="text-lg">Filters</h1>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  items-center '>

    {/* Bed Rooms dropdown */}
    <div className='mx-5 mt-4 overflow-y-auto '>
        <select className="ui search dropdown w-full ">
            <option value="">Bed Rooms</option>
            <option value="AL">1</option>
            <option value="AK">2</option>
            <option value="AZ">3</option>
            <option value="AR">4</option>
        </select>
    </div>

    {/* Baths dropdown */}
    <div className='mx-5 mt-4 overflow-y-auto border'>
        <select className="ui search dropdown w-full">
            <option value="">Baths</option>
            <option value="AL">1</option>
            <option value="AK">2</option>
            <option value="AZ">3</option>
            <option value="AR">4</option>
        </select>
    </div>

    {/* Land Size dropdown */}
    <div className='mx-5 mt-4 overflow-y-auto border'>
        <select className="ui search dropdown w-full">
            <option value="">Land Size</option>
            <option value="AL">1</option>
            <option value="AK">2</option>
            <option value="AZ">3</option>
            <option value="AR">4</option>
        </select>
    </div>

    {/* District dropdown */}
    <div className='mx-5 mt-4 overflow-y-auto border'>
        <select className="ui search dropdown w-full">
            <option value="">District</option>
            <option value="AL">1</option>
            <option value="AK">2</option>
            <option value="AZ">3</option>
            <option value="AR">4</option>
        </select>
    </div>

    {/* Town dropdown */}
    <div className='mx-5 mt-4 overflow-y-auto border'>
        <select className="ui search dropdown w-full">
            <option value="">Town</option>
            <option value="AL">1</option>
            <option value="AK">2</option>
            <option value="AZ">3</option>
            <option value="AR">4</option>
        </select>
    </div>

    {/* House Size dropdown */}
    <div className='mx-5 mt-4 overflow-y-auto border'>
        <select className="ui search dropdown w-full">
            <option value="">House Size</option>
            <option value="AL">1</option>
            <option value="AK">2</option>
            <option value="AZ">3</option>
            <option value="AR">4</option>
        </select>
    </div>

    {/* Location dropdown */}
    <div className='mx-5 mt-4 overflow-y-auto border'>
        <select className="ui search dropdown w-full">
            <option value="">Location</option>
            <option value="AL">1</option>
            <option value="AK">2</option>
            <option value="AZ">3</option>
            <option value="AR">4</option>
        </select>
    </div>

</div>
</div>

                    <div className='flex items-center mt-5'>

                        <div className=' bg-green-500 flex w-40 h-12 rounded-md item-center justify-center  mt-2 mx-5'>
                            <button className=' text-white font-bold text-center'>Predict the Price</button>
                        </div>
                        <label htmlFor="" className='bg-white w-40 h-11 text-center justify-center flex items-center'>
                            Rs ?
                        </label>
                  
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
                            <div className='absolute bg-white p-5 rounded-md border-4 w-9/12'>
                                {/* <CustomCheckbox label="Checkbox 1" defaultChecked /> */}
                                {/* <CustomCheckbox label="Checkbox 2" /> */}
                                {/* <CustomCheckbox label="Checkbox 3 (Disabled)" disabled /> */}
                                {/* <CustomCheckbox label="Checkbox 4 (Disabled Checked)" disabled checked /> */}
                                <div className=''>
                                    <div className='flex justify-end '>
                                        <button c onClick={closeModal}>Close</button>

                                    </div>

                                    <div>
                                        <h1 className=' text-xl'>Select Appliances for Monthly Expense Estimate Elecricity Bill </h1>
                                    </div>

                                       {/* dropdown */}
                            <div className='mx-5 mt-4 overflow-y-auto border'>
                                <select class="ui search dropdown w-40">
                                    <option value="">How many Person</option>
                                    <option value="AL">1</option>
                                    <option value="AK">2</option>
                                    <option value="AZ">3</option>
                                    <option value="AR">4</option>
                                    <option value="AR">5</option>
                                    <option value="AR">6</option>
                                    <option value="AR">7</option>                                    <option value="AR">8</option>
                                    <option value="AR">9</option>
                                    <option value="AR">10</option>



                                </select>
                            </div>

                            {/* dropdown */}

                                    <div className='flex justify-between mt-5'>
                                        <FormControlLabel control={<Checkbox {...label} />} label="Air Conditioner" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Fan" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Refrigarator" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Television" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Iron" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="CCTV" className=' w-48' />
                                    </div>
                                    <div className='flex justify-between'>


                                        <FormControlLabel control={<Checkbox {...label} />} label="Micorawan" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="LED Lights" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Water Heater" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Rice Cooker" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Laptop" className=' w-48' />
                                        <FormControlLabel control={<Checkbox {...label} />} label="Vacum Claner" className=' w-48' />
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


{/* waterbill pop up */}
  {/* Modal */}
  {waterBillModalOpen && (
                        <div className='fixed inset-0 flex items-center justify-center'>
                            {/* Semi-transparent black background */}
                            <div className='absolute inset-0 bg-black opacity-50'></div>

                            {/* Modal content */}
                            <div className='absolute bg-white p-5 rounded-md border-4 w-8/12'>
       
                                <div className=''>
                                    <div className='flex justify-end '>
                                        <button c onClick={closeModal2}>Close</button>

                                    </div>

                                    <div>
                                        <h1 className=' text-xl'>Select Appliances for Monthly Expense Estimate Water Bill </h1>
                                    </div>

                                       {/* dropdown */}
                            <div className='mx-5 mt-4 overflow-y-auto border'>
                                <select class="ui search dropdown w-40">
                                    <option value="">How many Person</option>
                                    <option value="AL">1</option>
                                    <option value="AK">2</option>
                                    <option value="AZ">3</option>
                                    <option value="AR">4</option>
                                    <option value="AR">5</option>
                                    <option value="AR">6</option>
                                    <option value="AR">7</option>                                    <option value="AR">8</option>
                                    <option value="AR">9</option>
                                    <option value="AR">10</option>



                                </select>
                            </div>

                            {/* dropdown */}

                                    <div className=' justify-start mt-5'>
                                        <h1> Water Bill = Number of Units * Rate per Unit</h1>                            
                                        <h1> Rate per Unit = Total Amount / (1 + VAT) / Number of Units</h1>                            
                                        <h1>Daily Water Bill = Total Bill / Number of Days</h1>                            
                                        <h1>Momnthly Water Bill = roughlt 3000</h1>                            
                                        <h1>Daily Water Bill = 2909 / 30</h1>                            
                                        <h1>Daily Water Bill ≈ 96.9667</h1>                            

                                 
                                        <h1>Cubim Meter * Unit = Rs</h1>                            
                                        <h1>200 * 1 = 200</h1>                            
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

                            </div>
                        </div>
                    )}

                </div>


            </div>

            {/* separate filtering part */}

            {/* <div className='w-full  md:flex flex-row mt-5 border-4'> */}


                {/* <div className='flex flex-row  w-full justify-between'> */}

                    {/* image 1  */}

                    <div className='w-full md:w-4/12 mt-5 bg-gray-300 my-5 px-4 py-4'>
  <div className='bg-gray-100 py-2 px-2 rounded-2xl'>

    <img
      className="w-full md:w-[450px] h-60 object-cover md:object-fill md:rounded-tl-3xl md:rounded-tr-3xl md:rounded-bl-md md:rounded-br-md"
      src="/assets/login.jpg"
      alt=""
    />
  </div>

  <div className='flex flex-col md:flex-row justify-around mt-2 md:gap-2'>
    <h1 className='bg-white rounded-md w-full md:w-4/12 text-center mt-2 md:mt-0'>3 Beds</h1>
    <h1 className='bg-white rounded-md w-full md:w-4/12 text-center mt-2 md:mt-0'>2 Baths</h1>
    <h1 className='bg-white rounded-md w-full md:w-4/12 text-center mt-2 md:mt-0'>1520 ft</h1>
  </div>


  <div className='flex flex-col md:flex-row md:items-start  items-center justify-around bg-white rounded-tl-md rounded-tr-md rounded-bl-3xl rounded-br-3xl mt-2 py-4 '>
  <div className='w-9/12 md:mx-2'>
  <h1 className='text-gray-800 font-medium text-3xl md:text-left text-center'>Rs 12,000,00</h1>
    <h1 className='text-black w-full md:w-60  md:text-left text-center '>Seller Name <span className='font-bold'>John</span>  </h1>
    <h1 className='text-black w-full md:w-60 md:text-left text-center '>For Further Contact <span className='font-bold'>077-3456011</span> </h1>

    {/* <h1 className='text-gray-800 font-medium text-3xl md:order-2 mt-2'>Rs 12,000,00</h1>
    <h1 className='text-black w-full md:w-60 text-center  md:order-1'>Contact <span className='font-bold'>John</span> For more details </h1>
    <h1 className='text-black w-full md:w-60 text-center  md:order-1'>Contact Number <span className='font-bold'>077-3456011</span> </h1> */}
  </div>

  <div className='my-auto flex flex-col' onClick={handleToggle}>
      {isSelected ? (
        <FontAwesomeIcon icon={solidHeart} className='w-10 h-10 text-green-900' />
      ) : (
        <FontAwesomeIcon icon={regularHeart} className='w-10 h-10 text-gray-300' />
      )}
    </div>


 

  </div>

 
</div>
          
                    
                    
                    
                 
                    {/* image 1 end */}

            
                {/* </div> */}


            {/* </div> */}



        </div>
    )
}

export default Home
