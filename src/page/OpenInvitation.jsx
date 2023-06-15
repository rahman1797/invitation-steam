import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from "react-router-dom";

import cover1 from '../assets/images/cover_bg_white.png'
import cover2 from '../assets/images/cover_bg_blue.png'
import curve from '../assets/images/curve_line.png'

import logoSteam from '../assets/images/logo_steam_day.png'
import logoKalananti from '../assets/images/logo_kalananti.png'

// import './style/OpenInvitation.css';

function OpenInvitation() {

    const { name } = useParams();

    let slug_url = useParams();

    let invitation_name = slug_url.name.replace('-', ' ');
  
    let navigate = useNavigate();

    useEffect(() => {
        if(typeof invitation_name === 'undefined'){
            return navigate(`/url-invalid`);
        }
    },[]);

    const Dispatch = useDispatch();

    const OpenInvitation = () => {
        Dispatch({
            type: 'OPEN_INVITATION'  
        });
    };

    return (
        <section id='invitation' className='grid md:grid-cols-2 h-full'>
            {/* <div className="py-10 sm:py-16 px-3 sm:pl-24 sm:w-1/2">
                <img className='mx-auto sm:ml-0 h-14 sm:h-20 mb-16' src='https://2828691.fs1.hubspotusercontent-na1.net/hubfs/2828691/kalananti%202022/Kalananti%20by%20Ruangguru.png' />
                <div className='block' data-aos="flip-left" data-aos-duration="1500">
                    <h3 className='text-center sm:text-left text-2xl sm:text-3xl font-semibold mb-3'>You're invited to</h3>
                    <h1 className='text-center sm:text-left text-4xl sm:text-5xl font-extrabold mb-3'>"STEAM Day"</h1>
                    <h3 className='text-center sm:text-left text-2xl sm:text-3xl font-semibold mb-3'>at Kalananti Offline Center</h3>
                    <hr className='my-5 ring-2 w-3/4 mx-auto sm:ml-0 ring-black'/>
                    <h3 className='bg-white/20 text-center sm:text-left mb-12 text-2xl sm:text-3xl font-bold'>10 June 2023</h3>
                    <div className='flex'>
                        <Link to={"/invitation/" + name + "/opened"} className="mx-auto sm:ml-0 text-white font-bold text-lg btn-slide-pink px-10 py-3 rounded-full bg-orange-500" onClick={ OpenInvitation }>Open Invitation</Link>
                    </div>
                </div>
            </div> */}
            <div className='section-padding w-full h-[60vh] md:h-screen bg-[length:100%_100%]' style={{ backgroundImage: `url(${cover1})` }}>
                <img className='h-16 mb-14' src={logoKalananti} alt="" />
                <div className='lg:text-2xl bg-[#E0E8F8] p-3-cus rounded-xl w-max font-semibold text-blue-kalananti mb-8'>10 June 2023</div>
                <p className='text-2xl md:text-3xl lg:text-4xl text-blue-kalananti font-medium md:leading-relaxed'>
                    You’re invited to <br />
                    <span className='font-semibold text-[#E99249] mr-1-cus inline-block my-2-cus md:my-3-cus lg:my-5-cus'>
                        "STEAM Day"    
                        <img className='' src={curve} alt="" />
                    </span> 
                     <br />
                     at Kalananti Center</p>

                    <div className='flex'>
                        <Link to={"/invitation/" + name + "/opened"} className="sm:ml-0 text-white font-bold text-lg btn-slide-pink px-10 py-3 rounded-2xl bg-gradient-to-tr from-[#FF9B4B] to-[#FFB850]" onClick={ OpenInvitation }>Open Invitation</Link>
                    </div>
            </div>
            <div className='section-padding w-full h-[40vh] md:h-screen bg-[length:100%_100%] flex' style={{ backgroundImage: `url(${cover2})` }}>
                <img className='m-auto lg:w-full' src={logoSteam} alt="" />
            </div>
        </section>
    );
}

export default OpenInvitation;