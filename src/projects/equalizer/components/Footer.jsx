/* eslint-disable prettier/prettier */
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg';
import logo from '../assets/logo.svg';


function Footer() {
  return (
    <>
      <footer className=' w-[85vw] mt-56 pb-12 flex flex-1 justify-between mx-auto mobile:flex-col mobile:mt-32'>
        <div className='w-[66%] flex justify-between  mobile:flex-col'>
          <span className='min-w-[20vw]'>
            <img src={logo} alt="logo" className='w-full h-full' />
          </span>
          <p className='w-[18.5rem] ml-4  md:mx-[] mobile:ml-0 mobile:pl-0 mobile:mt-8 mobile:w-[15rem]'>
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at <b>equalizer@example.com</b>
          </p>
        </div>
        <div className='flex justify-around mobile:justify-start mobile:mt-16 ml-16 mobile:ml-0'>
          <img src={facebook} alt="facebook-link" className='object-contain ml-3 mobile:ml-0' />
          <img src={instagram} alt="facebook-link" className='object-contain ml-3 ' />
          <img src={twitter} alt="facebook-link" className='object-contain ml-3 ' />
        </div>
      </footer>
    </>
  );
}

export default Footer;
