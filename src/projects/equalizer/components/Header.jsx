/* eslint-disable prettier/prettier */
import logo from '../assets/logo.svg';
import headerImg from '../assets/bg-pattern-1.svg';

function Header() {
  return (
    <>
      <header className="w-[85vw] flex justify-between mx-auto mobile:w-full" >
        <div className='w-1/2 mobile:w-full mobile:m-8'>
        <div><img src={logo} className="" alt="logo" /></div>
        
        <div className="mt-24">
          <h3 className="text-8xl xl:text-tablet font-bold font-body mobile:text-3xl ">
            We make your music sound extraordinary.
          </h3>
          <p className="text-2xl mt-12 mb-44 font-body xl:text-1xl lg:text-0xl  mobile:text-0xl mobile:mb-16">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
        </div>
        
          <div className='-mr-28 -mt-16 mobile:hidden'>
            <img src={headerImg} className=" mobile:hidden" alt="headerimage" />
            </div>        
      </header>
    </>
  );
}

export default Header;
