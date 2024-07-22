import React from 'react'
import Meeting from '../Meeting'
import Rooms from '../Rooms'
import { Mic } from 'lucide-react'

const Home = () => {
    return (
        <div className='overflow-y-auto flex w-full flex-col gap-4 min-h-screen container'>
            <div className='w-full bg-black rounded-lg flex flex-col w-full items-center justify-center p-6 md:p-10'>
                <div className='my-4 w-full items-center flex justify-center flex-col gap-2'>
                    <h1 className='md:text-4xl lg:text-5xl text-2xl font-bold tracking-tight leading-tight text-white Capitalize'>Bingu</h1>
                    <div className='my-4'>
                        <Mic className='w-20 h-20 rounded-md text-white' />
                    </div>


                </div>
                <div className='hidden md:flex flex-row w-full justify-evenly'>
                    <h2 className='text-white uppercase text-xl font-semibold leading-tight tracking-tight'>Discover your financial potential</h2>
                    <div className='flex flex-col gap-2 -mt-4'>
                        <p className='text-xl font-semibold leading-tight tracking-wide text-[#FFFFFF] capitalize'>Setup audio meetings.</p>
                        <p className='text-xl font-semibold leading-tight tracking-wide text-[#FFFFFF] capitalize'>Both Public and Private</p>
                    </div>

                </div>
            </div>
            <div class="mb-6 mt-8 ">
                <label for="large-input" classNmae="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Join Meeting</label>
                <div className="flex flex-nowrap">
                <input type="text" id="large-input" className="block w-96 p-4 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Enter meeting link"></input>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
                </div>
            </div>

        </div>
    )
}

export default Home
