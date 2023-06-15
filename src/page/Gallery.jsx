import React from 'react';

//Activity
import Act1 from '../assets/images/activity/activity 1.jpeg'
import Act2 from '../assets/images/activity/activity 2.jpeg'
import Act3 from '../assets/images/activity/activity 3.jpeg'
import Act4 from '../assets/images/activity/activity 4.jpeg'
import Act5 from '../assets/images/activity/activity 5.jpeg'
import Act8 from '../assets/images/activity/activity 8.jpeg'
import Act9 from '../assets/images/activity/activity 9.jpeg'
import Act10 from '../assets/images/activity/activity 10.jpeg'
import Act11 from '../assets/images/activity/activity 11.jpeg'

import footer from '../assets/images/BG_footer.png'
import gear from '../assets/images/gear_half.png'

import { SRLWrapper } from "simple-react-lightbox";
import { useState } from 'react';

function Gallery() {

    const [hidden, setHidden] = useState(true);

    const options = {
        settings: {
            autoplaySpeed: 1500,
            transitionSpeed: 900,
            slideAnimationType: 'both',
        },
        buttons: {
            showDownloadButton: false
        },
        caption: {
            showCaption: false
        }
    };

    const hide = () => {
        setHidden(!hidden)
    }

  return (
        <>
        {/* <Lightbox />  */}
        <section className="section-padding-x text-blue-kalananti pb-10 mt-14 bg-bottom bg-cover bg-no-repeat relative">

            <img className='absolute left-0 -translate-y-40 md:-translate-y-52 lg:-translate-y-60 h-40 md:h-52 lg:h-60' src={gear} alt="" />
            
            <div className='flex mb-8 md:mb-14 relative'>
                <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold my-auto'>Aktivitas di Kalananti Center</h3>
                <button className='bg-gradient-to-r from-[#FF9B4B] to-[#FFB850] py-4-cus px-5-cus md:px-10 rounded-3xl shadow-lg font-bold text-sm md:text-lg text-white h-max my-auto ml-auto' onClick={ () => hide() }>{ hidden ? 'Lebih Banyak' : 'Sembunyikan' }</button>
            </div>
            <SRLWrapper options={options}>  
                <div className='grid md:grid-cols-2 gap-3 md:gap-10 mb-3-cus md:mb-10'>
                    <div>
                        <a href={Act1} className="col-span-1">
                            <img className="rounded-3xl" src={Act1} alt="" loading="lazy"/>
                        </a>
                    </div>
                    <div className='grid grid-cols-2 gap-3 md:gap-10'>
                        <a href={Act2} className="col-span-1">
                            <img className="rounded-3xl" src={Act2} alt="" loading="lazy"/>
                        </a>
                        <a href={Act3} className="col-span-1">
                            <img className="rounded-3xl" src={Act3} alt="" loading="lazy"/>
                        </a>
                        <a href={Act4} className="col-span-1">
                            <img className="rounded-3xl" src={Act4} alt="" loading="lazy"/>
                        </a>
                        <a href={Act5} className="col-span-1">
                            <img className="rounded-3xl" src={Act5} alt="" loading="lazy"/>
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10'>
                    <a href={Act9} className="col-span-1">
                        <img className={`rounded-3xl ${ hidden ? 'hidden' : '' }`} src={Act9} alt="" loading="lazy"/>
                    </a>
                    <a href={Act10} className="col-span-1">
                        <img className={`rounded-3xl ${ hidden ? 'hidden' : '' }`} src={Act10} alt="" loading="lazy"/>
                    </a>
                    <a href={Act11} className="col-span-1">
                        <img className={`rounded-3xl ${ hidden ? 'hidden' : '' }`} src={Act11} alt="" loading="lazy"/>
                    </a>
                    <a href={Act8} className="col-span-1">
                        <img className={`rounded-3xl ${ hidden ? 'hidden' : '' }`} src={Act8} alt="" loading="lazy"/>
                    </a>
                </div>

            </SRLWrapper>	

        </section>
        <img className='w-full -mt-20 md:-mt-48 lg:-mt-80' src={footer} alt="" />
        </>
  );
}

export default Gallery;
