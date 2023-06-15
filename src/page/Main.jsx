import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//Page
import Hero from './Hero';
// import Merch from './Merch2';
import Activity from './Activity';
// import Event from './Event';
import Gallery from './Gallery';
import Guestbook from './Guestbook';
import AOS from 'aos';

// import background from '../assets/images/back_1.png'
import wa from '../assets/images/logo-wa.png'
import Facility from './Facility';

// import { Helmet } from 'react-helmet';

function Main() {
    AOS.init();

    let Opened = useSelector((state) => state.openedInvitation);

    let slug_url = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        if(Opened !== true) {
            return navigate(`/invitation/${slug_url.name}`);
        }
    }, [])

    return (
        <>        
            {/* <main className='px-2 md:px-4 pt-5 pb-16 overflow-hidden' style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>        */}
            <main className=''> 
                <Hero />      
                <Activity />
                {/* <Merch/> */}
                <Guestbook />
                <Facility />
                <Gallery />
                               
            </main>
            <div className='fixed z-50 h-12 bottom-3 right-3 rounded-full ring-1 ring-green-500 bg-[#04a00e] py-2 px-3'>
                <a href='https://api.whatsapp.com/send?phone=6281990009680&text=Halo%2C%20Saya%20ingin%20bertanya%20tentang%20kegiatan%20STEAM%20Day%20di%20Kalananti%20Center' className='text-slate-100 right-1 rounded-full cursor-pointer'>
                    <img src={wa} className="inline w-8 m-auto" /> Hubungi kami
                </a>
            </div>
            
            {/* <Helmet>      
                <script src="assets/js/main.js"></script>
            </Helmet> */}

            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="kirimHadiah" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="text-light fa-solid fa-circle-chevron-up"></i></span>
                            </button>
                        </div>
                        <div className="modal-body d-flex madurai">
                            <div className='row'>
                                <img src={gift} className="mx-auto gift-logo" />
                                <div className='col-12 text-center mb-2'>
                                    Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk kami, dapat melalui :
                                </div>
                                <div className='d-flex p-3'>
                                    <div className='col-md-3 col-4 my-auto'>
                                        <img src={mandiri} className='rekening-logo' />
                                    </div>
                                    <div className='col-9'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <small>(Bank Mandiri)</small>
                                            </div>
                                            <div className='col-12'>
                                                a/n Evita Dwi Oktaviani
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex p-3'>
                                    <div className='col-md-3 col-4 my-auto'>
                                        <img src={cimb} className='rekening-logo' />
                                    </div>
                                    <div className='col-9'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <small>(Bank CIMB Niaga)</small>
                                            </div>
                                            <div className='col-12'>
                                                a/n Maulana Rahman Nur
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex p-3'>
                                    <div className='col-md-3 col-4 my-auto'>
                                        <img src={home} className='rekening-logo' />
                                    </div>
                                </div>
                                <div className='col-12 text-center mt-3'>
                                    Terima kasih!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )    
}

export default Main;
