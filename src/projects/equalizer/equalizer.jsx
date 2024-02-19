/* eslint-disable import/no-unresolved */

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function Equalizer() {
  return (
    <main className="bg-body-pattern box-border">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

export default Equalizer;
