import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Last from '../components/last';
import Footer from '../components/footer';
import ScrollToHash from "../components/ui/scrollview";

export default function Home() {

  return (
    <div className='px-10 lg:px-15 xl:px-25 overflow-hidden'>
      <ScrollToHash />
      <div id="home"><Hero /></div>
      <div><About /></div>
      <div><Projects /></div>
      <div id="contact"><Last /></div>
      <div className="py-5">
        <Footer />
      </div>
    </div>
  );
}
