import React from 'react'

//Facility
import coLearning from '../assets/images/co_learning_space.png'
import parentLounge from '../assets/images/parent_lounge.png'
import playingArea from '../assets/images/playing_area.png'
import makerspace from '../assets/images/makerspace.png'

export default function Facility() {
  return (
    <section className='section-padding relative z-10'>
        <h3 className='text-2xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-14 font-bold text-blue-kalananti'>Fasilitas Yang Ada Di Kalananti Center</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10 text-white'>
            <div class="bg-gradient-to-b from-[#59ACF2] via-[#59ACF2] to-[#467baa] p-3-cus md:p-4-cus rounded-3xl">
                <img class="rounded-2xl lg:rounded-3xl h-28 md:h-32 lg:h-40 w-full" src={coLearning} alt="" />
                <h3 class="text-xl lg:text-2xl font-semibold mt-3-cus mb-3-cus">Co-Learning Space</h3>
                <p class="text-sm md:text-base mb-3-cus">Ruang kelas kolaboratif</p>
            </div>
            <div class="bg-gradient-to-b from-[#59ACF2] via-[#59ACF2] to-[#467baa] p-3-cus md:p-4-cus rounded-3xl">
                <img class="rounded-2xl lg:rounded-3xl h-28 md:h-32 lg:h-40 w-full" src={parentLounge} alt="" />
                <h3 class="text-xl lg:text-2xl font-semibold mt-3-cus mb-3-cus">Parent Lounge Area</h3>
                <p class="text-sm md:text-base mb-3-cus">Ruang tunggu orang tua</p>
            </div>
            <div class="bg-gradient-to-b from-[#59ACF2] via-[#59ACF2] to-[#467baa] p-3-cus md:p-4-cus rounded-3xl">
                <img class="rounded-2xl lg:rounded-3xl h-28 md:h-32 lg:h-40 w-full" src={playingArea} alt="" />
                <h3 class="text-xl lg:text-2xl font-semibold mt-3-cus mb-3-cus">Playing Area</h3>
                <p class="text-sm md:text-base mb-3-cus">Area terbuka untuk bermain</p>
            </div>
            <div class="bg-gradient-to-b from-[#59ACF2] via-[#59ACF2] to-[#467baa] p-3-cus md:p-4-cus rounded-3xl">
                <img class="rounded-2xl lg:rounded-3xl h-28 md:h-32 lg:h-40 w-full" src={makerspace} alt="" />
                <h3 class="text-xl lg:text-2xl font-semibold mt-3-cus mb-3-cus">Makerspace Area</h3>
                <p class="text-sm md:text-base mb-3-cus">Ruang Berkreasi</p>
            </div>
        </div>
    </section>
  )
}
