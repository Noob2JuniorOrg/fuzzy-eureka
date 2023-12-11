import { Routes, Route } from 'react-router-dom';
import './App.css';
import Studio from './projects/loopStudio/studio';
import ECOMMERCE from './projects/e-commerce/e_commerce';
import Equalizer from './projects/equalizer/equalizer';
import Tips from './projects/tipsCalculator/tips';
import GitHubUser from './projects/githubUser/githubUser';
import Landing from './Landing';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/e-commerce" element={<ECOMMERCE />} />
        <Route path="/equalizer" element={<Equalizer />} />
        <Route path="/tipsCalculator" element={<Tips />} />
        <Route path="/github-user" element={<GitHubUser />} />
      </Routes>
    </>
  );
}

export default App;
