import React from 'react';
import { useParams } from "react-router-dom";
import Event from './Event';	

import curve from '../assets/images/curve_line_1.png'
import background from '../assets/images/BG_Hero.png'

function Hero() {

	let slug_url = useParams();
	let invitation_name = slug_url.name.split('-');
	// invitation_name = invitation_name.filter(value => {
	// 	return value !== 'inf';
	// });
	invitation_name = invitation_name.join(' ');
		
	return (
		<section className="section-padding text-slate-100 pt-9 pb-10 bg-cover md:bg-[length:100%_100%]" style={{ backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat' }}>
			<div className="mx-auto text-center">
				<div data-aos="fade-up">
					<div className='text-3xl md:text-5xl font-bold mt-20'>Halo Ayah & Bunda Hebat!</div>
					<div className='my-8 text-xl md:text-2xl'>Kalananti Mengundang</div>
					<div className='text-2xl'>
						<span className='bg-[#E99249] px-4 py-2 rounded-md'>{ invitation_name !== 'public' ? invitation_name : 'Ayah/Bunda & Ananda' }</span>
					</div>
					<div className='mt-10 text-lg'>
						Untuk menghadiri 
						<span className='text-[#F5EAAE] text-xl font-bold inline-block ml-2-cus'>
							<em>"STEAM DAY: Create Your Eco-Smart Car!"</em>
							<img className='w-80' src={curve} alt="" />
						</span> 
					</div>
				</div>
			</div>
			<Event/>
		</section>
		);
};

export default Hero