import { Link } from 'react-router-dom';

import EqualizerPhoto from './assets/equalizer.jpg';
import TipsCalcImg from './assets/tips.jpg';
import LoopStudioImg from './assets/loopstudio.jpg';
import E_commerceImg from './assets/e-commerce.jpg';
import gitHubImg from './assets/github-user.jpg';



function Landing() {
    return (
        <>
        <main class="grid grid-cols-3 box-border gap-8 justify-items-stretch p-4 items-center bg-sky-200">
  <div class="shadow-lg rounded-2xl">
    <Link to="/equalizer">
      <img
        src={EqualizerPhoto}
        alt="equalizer"
        class="bg-contain bg-no-repeat rounded-2xl justify-self-center"
      />
    </Link>
  </div>

  <div class="shadow-lg rounded-2xl">
    <Link to="/tipsCalculator">
      <img
        src={TipsCalcImg}
        alt="calculator"
        class="bg-contain bg-no-repeat  rounded-2xl"
      />
    </Link>
  </div>

  <div class="shadow-lg rounded-2xl">
    <Link to="/studio">
      <img
        src={LoopStudioImg}
        alt="loopstudio"
        class="bg-contain bg-no-repeat rounded-2xl"
      />
    </Link>
  </div>

  <div class="shadow-lg rounded-2xl">
    <Link to="/e-commerce">
      <img
        src={E_commerceImg}
        alt="e-commerce"
        class="bg-contain bg-no-repeat rounded-2xl"
      />
    </Link>
  </div>
  <div class="shadow-lg rounded-2xl">
    <Link to="/github-user">
      <img
        src={gitHubImg}
        alt="githubuser"
        class="bg-contain rounded-2xl bg-no-repeat overflow-hidden  "
      />
    </Link>
  </div>
</main>;
 </>
    );
  }
  
  export default Landing;

