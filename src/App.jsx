import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Studio from './projects/loopStudio/studio';
import ECOMMERCE from './projects/e-commers/e_commers';
import Equalizer from './projects/equalizer/equalizer';
import Tips from './projects/tipsCalculator/tips';
import GitHubUser from './projects/githubUser/githubUser';

function App() {
  return (
    <>
      <Routes>
        <Route path="/studio" element={<Studio />} />
        <Route path="/e-commerce" element={<ECOMMERCE />} />
        <Route path="/equalizer" element={<Equalizer />} />
        <Route path="/tipsCalculator" element={<Tips />} />
        <Route path="/github-user" element={<GitHubUser />} />
      </Routes>

      <main className="grid grid-cols-2 h-100 box-border gap-4 m-10  bg-amber-10">
        <div className="bg-amber-100">
          <Link to="/equalizer">Equalizer</Link>
        </div>

        <div>
          <Link to="/tipsCalculator">Calculator</Link>
        </div>
        <div>
          <Link to="/studio">LoopStudio</Link>
        </div>
        <div>
          <Link to="/e-commerce">e-Commerce</Link>
        </div>
        <div>
          <Link to="/github-user">GitHubUser</Link>
        </div>
      </main>
    </>
  );
}

export default App;
