import 'highlight.js/styles/github.css';
import './styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
