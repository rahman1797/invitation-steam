import React, { useEffect } from 'react';
import iconSteam from '../assets/images/logo_steam_day.png'
import cek_ungu from '../assets/images/ceklis_ungu.png'
import cek_ijo from '../assets/images/ceklis_ijo.png'
import parabola from '../assets/images/icon_parabola.png'

function Activity() {
		
	return (
		<section className="section-padding text-blue-kalananti mt-20 md:mt-5 lg:mt-20">
			<div className='flex'>
				<h2 className='text-2xl md:text-4xl lg:text-5xl font-bold my-auto'>Aktifitas di </h2>
				<img className='h-24 md:h-36 lg:h-40' src={iconSteam} alt="" />
			</div>
			<div className="mx-auto">
				<div data-aos="fade-up">
					<div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-lg mt-3-cus lg:mt-8'>
						<div className='bg-gradient-to-b from-[#AE8EFF] to-[#4F51FF] pr-3-cus rounded-3xl'>
							<div className='bg-white shadow-lg rounded-3xl p-10 h-full relative overflow-clip'>
								<h3 className='text-2xl md:text-3xl font-semibold mb-8'>Acara</h3>
								<ul className='text-left relative z-10'>
									<li className='flex items-center mb-5-cus'> 
										<img className='h-9 lg:h-8 mr-3-cus' src={cek_ungu} alt="" />
										Merencanakan solusi dari permasalahan lingkungan
										
									</li>
									<li className='flex items-center mb-5-cus'> 
										<img className='h-9 lg:h-8 mr-3-cus' src={cek_ungu} alt="" />
										Membuat model Eco-Smart Car
									</li>
									<li className='flex items-center'> 
										<img className='h-9 lg:h-8 mr-3-cus' src={cek_ungu} alt="" />
										Mempresentasikan karya model Eco-Smart Car
									</li>
								</ul>
								<img className='absolute h-40 left-0 bottom-0 -translate-x-6 translate-y-12' src={parabola} alt="" />
							</div>
						</div>
						<div className='bg-gradient-to-b from-[#A6DB97] to-[#14BCBF] pr-3-cus rounded-3xl'>
							<div className='bg-white shadow-lg rounded-3xl p-10 relative overflow-clip'>
								<h3 className='text-2xl md:text-3xl font-semibold mb-8'>Benefit Kegiatan</h3>
								<ul className='text-left relative z-10'>
									<li className='flex items-center mb-5-cus'> 
										<img className='h-9 lg:h-8 mr-3-cus' src={cek_ijo} alt="" />
										Gratis Eco-Smart Car kit
									</li>
									<li className='flex items-center mb-5-cus'> 
										<img className='h-9 lg:h-8 mr-3-cus' src={cek_ijo} alt="" />
										Berkolaborasi dengan teman-teman baru
									</li>
									<li className='flex items-center'> 
										<img className='h-9 lg:h-8 mr-3-cus' src={cek_ijo} alt="" />
										Kelas live tatap muka 1.5 jam di Kalananti Center
									</li>

								</ul>
								<img className='absolute h-40 left-0 bottom-0 -translate-x-6 translate-y-12' src={parabola} alt="" />
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
		);
};

export default Activity