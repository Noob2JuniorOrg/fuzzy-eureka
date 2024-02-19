
import telephone from '../assets/illustration-app.png';
import pattern from '../assets/bg-pattern-2.svg';
import iosLogo from '../assets/icon-apple.svg';
import androidLogo from '../assets/icon-android.svg'

function Main() {
  return (
    <>
      <section className="bg-black w-[85vw] mx-auto my-24 h-telephone rounded-2xl flex justify-between mobile:relative mobile:flex-col mobile:my-0 mobile:w-full mobile:min-h-[70rem]">

      <div className='w-[20vw] md:w-[150vw] mobile:hidden' ></div>


        <div className='min-w-[20rem] h-telephone -mt-44 z-10 mobile:-mt-16 md:absolute md:ml-4 mobile:static mobile:flex mobile:align-middle mobile:justify-center mobile:h-0 mobile:min-w-[80vw] mobile:m-0 '>
          <img src={telephone} alt="telephone" className="max-w-full max-h-full mobile:contain mobile:max-h-[35rem]" />
        </div>

        <div className='md:w-[200vw] mobile:w-[0] mobile:hidden' ></div>

        <div className=' w-[23rem] mobile:w-[80%] mobile:left-8 mobile:m-auto  mobile:static mobile:flex mobile:align-middle mobile:justify-center'>
            <img src={pattern} alt="pattern" className='absolute max-w-full max-h-full mobile:max-w-[100%] mobile:contain mobile:top-6' />
        </div>

        <div className='bg-[#FA7453] w-[27rem] rounded-2xl z-10 mt-44 -mb-40 mobile:mb-12 mobile:w-[100vw] mobile:mt-8'>
          <div className='p-12 font-body mobile:p-8'>
          <h3 className='text-[2rem] text-white font-bold mobile:text-[8vw]'>
                Premium EQ
            </h3>
            <p className='text-white mt-7 w-64 mobile:w-[70vw] mobile:text-[5vw]'>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features! </p>
            <h1 className='text-white text-[3rem] font-bold mt-7 mobile:text-4xl'>
              4 <span className='text-[1.2rem] font-body align-middle'>/ month</span>
            </h1>
            <div className='flex flex-col mt-10'>
                <button className='bg-black hover:bg-[#66E2DC] font-body font-bold p-6 rounded-2xl flex justify-center  mobile:p-4 '>
                <img src={iosLogo} alt="ios" />
                <span className='text-white ml-2 mobile:text-[4vw]'>iOS Download</span>
                </button>
                <button className='bg-white hover:bg-[#FFB964] font-body font-bold p-6 mt-8 rounded-2xl flex justify-center  mobile:p-4'>
                <img src={androidLogo} alt="android" />
                    <span className='text-black ml-2 mobile:text-[4vw]'>
                      Android Download
                      </span>
                </button>
            </div>
          </div>
        </div>
        <div className='w-[20vw]'></div>
      </section>
    </>
  );
}

export default Main;
