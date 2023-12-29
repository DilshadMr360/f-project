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
                    <h1 className='text-green-600 font-bold text-3xl md:text-start text-center'>Home</h1>
                </div>

                <div className='md:w-6/12  flex justify-center bg-slate-200 gap-2 px-4 py-4 rounded-lg'>
                    <button className='rounded-2xl text-white font-bold bg-green-600 border text-sm px-4 py-2'>Predicted History</button>
                    <button className='rounded-2xl text-white font-bold bg-green-600 border text-sm  px-4 py-2'>My Wishlist</button>
                </div>
            </div>


            <div className=''>
                <div className='flex  items-end text-end'>

                </div>
                <div className='flex mt-2 '>

                <div className='md:flex mx-auto'>

             
                </div>

                </div>

            </div>


            {/* separate filtering part */}

            <div className='bg-slate-200 border-4 w-full md:flex  mt-5 py-2'>

                <div className='md:w-4/12  my-auto mx-5 text-center justify-center '>
                    <h1 className='text-3xl'><span className='text-green-500 font-medium'>Predict</span> Your Dream House <span className='text-green-500 font-medium'>Price</span>  </h1>
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
            <option value="">Location</option>
            <option value="AL">Negombo, Gampaha</option>
            <option value="AK">Kollupitiya, Gampaha</option>
            <option value="AZ">Kadawatha,Gampaha</option>
            <option value="AR"></option>
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

    {/* Location dropdown
    <div className='mx-5 mt-4 overflow-y-auto border'>
        <select className="ui search dropdown w-full">
            <option value="">Location</option>
            <option value="AL">1</option>
            <option value="AK">2</option>
            <option value="AZ">3</option>
            <option value="AR">4</option>
        </select>
    </div> */}

</div>
</div>

                    <div className='flex items-center mt-5'>

                        <div className=' bg-green-600 flex w-40 h-12 rounded-md item-center justify-center  mt-2 mx-5'>
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
                                        <h1 className=' text-2xl flex justify-center font-bold'>Monthly Expense Estimate Elecricity Bill </h1>
                                    </div>

                                       {/* dropdown */}
                            <div className='mx-5  overflow-y-auto border mt-10'>
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

                                

                                    <div className='flex item-center justify-center mx-auto  gap-2 mt-10'>
                                        <div className=' bg-green-600 flex w-60 h-12 rounded-md justify-center '>
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
  <div className='w-8/12 md:mx-2'>
  <h1 className='text-gray-800 font-medium text-3xl md:text-left text-center'>Rs 12,000,00</h1>
    <h1 className='text-black w-full md:w-60  md:text-left text-center '>Seller Name <span className='font-bold'>John</span>  </h1>
    <h1 className='text-black w-full md:w-60 md:text-left text-center '> Contact  <span className='font-bold'>077-3456011</span> </h1>

    {/* <h1 className='text-gray-800 font-medium text-3xl md:order-2 mt-2'>Rs 12,000,00</h1>
    <h1 className='text-black w-full md:w-60 text-center  md:order-1'>Contact <span className='font-bold'>John</span> For more details </h1>
    <h1 className='text-black w-full md:w-60 text-center  md:order-1'>Contact Number <span className='font-bold'>077-3456011</span> </h1> */}
  </div>

  <div className='my-auto flex flex-col  justify-center items-center w-4/12 mx-auto' onClick={handleToggle} >
      {isSelected ? (
        <FontAwesomeIcon icon={solidHeart} className='w-10 h-10 text-green-900' />
      ) : (
        <FontAwesomeIcon icon={regularHeart} className='w-10 h-10 text-gray-300' />
      )}

    

    

    </div>
    
{/* 
    <div className=' bg-green-600 w-40 h-12 rounded-md item-center justify-center  md:mx-5 '>
                        </div> */}
 

  </div>
<div className='bg-green-600 w-full h-12 rounded-md item-center  flex text-center justify-center mt-5 items-center'>
<button onClick={openModal} className=' text-white font-bold'>  Predict Monthly Expenses</button>
    
</div>

 
</div>
          
                    
                    
                    
                 
                    {/* image 1 end */}

            
                {/* </div> */}


            {/* </div> */}



        </div>
    )
}

export default Home
