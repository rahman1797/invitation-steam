import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Swal from "sweetalert2"
// import { v4 as uuidv4 } from 'uuid';

// import Service from '../services/Service';

import background from '../assets/images/BG_Section_tengah.png'
import blink from '../assets/images/blink.png'

import tokopedia from '../assets/images/tokopedia.png'
import bayarkalananti from '../assets/images/bayarkalananti.png'

import kalkulator from '../assets/images/kalkulator_kuning.png'
import botol from '../assets/images/botol_lab_kuning.png'

import kalkulatorBiru from '../assets/images/kalkulator.png'
import botolBiru from '../assets/images/botol_kimia.png'


export default function Guestbook() {

  //Ambil data dari parameter name di url dan mengambil data dari state redux + memfilter berdasarkan slug URL
  let slug_url = useParams();
  let invitation_name = slug_url.name.split('-');
  
  invitation_name = invitation_name.filter(value => {
    return value !== 'inf';
  });
  invitation_name = invitation_name.join(' ');

  //State untuk menyimpan text dari form
  const [nama, setNama] = useState(invitation_name !== 'public' ? invitation_name : '');
  const [namaOrtu, setNamaOrtu] = useState('');
  // const [kehadiran, setKehadiran] = useState('');
  const [kontak, setKontak] = useState('');
  // const [domisili, setDomisili] = useState('');

  const [sending, setSending] = useState(false);

  //State untuk menyimpan list pesan yang dibuat dalam bentuk array
  // const [message, setMessage] = useState([]);

  //Set kuota untuk tiap sesi
  const quota = 30;

  //Set opsi sesi
  const sesi = [
    'Hadir Online',
    'Hadir Onsite'
  ]
  const [opsi, setOpsi] = useState(sesi);

  const nama_event = 'Graduation Day';

  const handleSubmit = (event) => {
    event.preventDefault();

    setSending(true);
    
    if(!nama || nama === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Isi nama terlebih dahulu!'
      })
    }
    // else if(!kehadiran || kehadiran === '') {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Isi kehadiran terlebih dahulu!'
    //   })
    // }
    else {
      // save to RG Form
      // console.log(nama, kontak, kehadiran, domisili, nama_event)
      document.getElementById('reward_form_submission_submission_data_nama_anak').value = nama;
      document.getElementById('reward_form_submission_submission_data_kontak').value = kontak;
      document.getElementById('reward_form_submission_submission_data_nama_ortu').value = namaOrtu;
      // document.getElementById('reward_form_submission_submission_data_kehadiran').value = kehadiran;
      // document.getElementById('reward_form_submission_submission_data_alamat').value = domisili;
      // document.getElementById('reward_form_submission_submission_data_event').value = nama_event;
      

      handleSave();
    }
  
    //Reset inputan form
    // setKehadiran('');
    setKontak('');
    setNama('');
    setNamaOrtu('')
    // setDomisili('');
    
    return false;
  }

  const clicked = () => {
    let button = document.querySelector('#idForm button[type="submit"]');
    button.click();
  }
  
  const handleSave = () => {

      setSending(false);

      Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'Terima kasih telah konfirmasi!'
      });

      clicked();
  }

  useEffect(() => {
    // if(invitation_name === 'admin12321'){
      // getData();
    // }
  }, []);

  return (
    <section className='section-padding bg-no-repeat bg-center bg-[length:100%_70%] mt-40 relative' style={{ backgroundImage: `url(${background})` }}>

        <img className='absolute h-16 md:h-32 lg:h-40 left-10 -top-40' src={kalkulatorBiru} alt="" />
        <img className='absolute h-20 md:h-56 lg:h-64 right-0 -top-44' src={botolBiru} alt="" />

        <div className='mb-8 md:mb-14 text-center flex -mt-40'>
          <img className='scale-[-1] h-14 md:h-20 ml-auto' src={blink} alt="" />
          <h3 className='text-[#255D98] text-2xl md:text-4xl lg:text-5xl font-semibold mx-6 my-auto'>Konfirmasi Kehadiran</h3>
          <img className='h-14 md:h-20 mr-auto' src={blink} alt="" />
        </div>

        <div className='bg-white ring-2 ring-slate-300 md:w-11/12 mx-auto rounded-3xl p-10 mb-10 md:mb-10 lg:mb-20'>
          <form className='grid md:grid-cols-2 gap-10' id='form-input' onSubmit={handleSubmit}>

            <div className=''>
              <label className='text-lg font-bold mb-2-cus' htmlFor="nama">Nama Anak :</label>
              <input id='nama' className="rounded-xl w-full p-4-cus bg-gray-100 focus:outline-none" placeholder="Nama Lengkap Anak . . ." value={nama} onChange={ e => setNama(e.target.value) } required />  
            </div>

            <div className=''>
              <label className='text-lg font-bold mb-2-cus' htmlFor="nama">Nama Orang Tua :</label>
              <input id='nama_ortu' className="rounded-xl w-full p-4-cus bg-gray-100 focus:outline-none" placeholder="Nama Orang Tua . . ." value={namaOrtu} onChange={ e => setNamaOrtu(e.target.value) } required />  
            </div>

            <div className=''>
              <label className='text-lg font-bold mb-2-cus' htmlFor="kontak">No telp (yg bisa dihubungi via WA) :</label>
              <input id='kontak' className="rounded-xl w-full p-4-cus bg-gray-100 focus:outline-none" placeholder="No WA . . ." value={kontak} onChange={ e => setKontak(e.target.value) } required />  
            </div>
              
            <button className='bg-gradient-to-r from-[#FF9B4B] to-[#FFB850] py-4-cus px-10 rounded-xl font-bold text-lg text-white h-max my-auto' type='submit' disabled={sending}>{ sending ? 'Harap tunggu..' : 'Konfirmasi' }</button>
          </form>         
        </div>

        <div className='bg-gradient-to-tr from-[#FF9B4B] via-[#FFB850] to-[#FFB850] md:w-11/12 mx-auto rounded-3xl py-5-cus md:py-10 px-8 md:px-20 text-white grid md:grid-cols-2 gap-10 relative overflow-clip'>
          
          <h3 className='text-2xl md:text-3xl font-semibold my-auto relative z-10'>Tiket STEAM Day juga dapat dibeli melalui:</h3>
          <div className='flex justify-end relative z-10'>
            <a href="https://tokopedia.link/TrV6KiyqdAb">
              <img className='h-20 md:h-24 lg:h-28 cursor-pointer' src={tokopedia} alt="" />
            </a>
            <a href="https://bayar.kalananti.id/npf/package/PKG-ABBMYQ5V">
              <img className='h-20 md:h-24 lg:h-28 cursor-pointer' src={bayarkalananti} alt="" />
            </a>
          </div>
          <img className='absolute h-40 -left-10 -translate-y-10' src={kalkulator} alt="" />
          <img className='absolute h-52 -right-5 translate-y-20 md:translate-y-0' src={botol} alt="" /> 
        </div>
    </section>
    
  );
}
