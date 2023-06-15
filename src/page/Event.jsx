import React from 'react';

import tanggal from '../assets/images/icon_tanggal.png'
import jam from '../assets/images/icon_jam.png'
import map from '../assets/images/icon_map.png'

function Event() {

    let jadwal = "Sabtu, 24 Juni 2023";
    let waktu = "13:00 - 15:00 WIB";

    return (
        <section className='px-2-cus lg:px-1-cus mt-10 -mb-20 md:-mb-40'>

            <p className='text-center text-lg'>yang akan dilaksanakan pada:</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10'>
                <div className='bg-white shadow-lg p-5-cus lg:p-9 rounded-3xl h-max'>
                    <div className='text-blue-kalananti text-sm md:text-lg lg:text-xl flex items-center font-semibold mb-5-cus'>
                        Hari, Tanggal
                        <img className='h-6 lg:h-12 ml-auto' src={tanggal} alt="" />
                    </div>
                    <div className='text-sm lg:text-xl font-bold bg-[#F8EBE0] text-[#BC8150] p-1-cus md:p-5-cus rounded-xl md:rounded-2xl text-center'>
                        {jadwal}
                    </div>
                </div>

                <div className='bg-white shadow-lg p-5-cus lg:p-9 rounded-3xl h-max'>
                    <div className='text-blue-kalananti text-sm md:text-lg lg:text-xl flex items-center font-semibold mb-5-cus'>
                        Jam
                        <img className='h-6 lg:h-12 ml-auto' src={jam} alt="" />
                    </div>
                    <div className='text-sm lg:text-xl font-bold bg-[#F8EBE0] text-[#BC8150] p-1-cus md:p-5-cus rounded-xl md:rounded-2xl text-center'>
                        {waktu}
                    </div>
                </div>

                <div className='bg-white shadow-lg p-5-cus lg:p-9 rounded-3xl h-max col-span-2 md:col-span-1'>
                    <div className='text-blue-kalananti text-sm md:text-lg lg:text-xl flex items-center font-semibold mb-5-cus'>
                        Lokasi
                        <img className='h-6 lg:h-12 ml-auto' src={map} alt="" />
                    </div>
                    <div className='lg:text-base font-bold text-[#BC8150]'>
                        <p className='text-sm lg:text-base mb-5-cus md:mb-5-cus'>Ruko U Ville Avenue B Blok B-01 Bintaro Jaya, Sawah Baru, Kec. Ciputat, Tangerang Selatan, Indonesia</p>
                        <a target='_blank' href='https://g.page/kalananti?share' className="text-white font-bold text-lg btn-slide-pink px-10 py-3 rounded-2xl bg-gradient-to-tr from-[#FF9B4B] to-[#FFB850] inline-block">Maps</a>
                    </div>
                </div>
            </div>



        </section>
    );
}

export default Event;