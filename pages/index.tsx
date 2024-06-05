import Header from "./components/header";
import SectionPublicity from "./components/section-publicity";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SectionServices from "./components/section-services";
import SectionDepoiments from "./components/section-depoiment";
import SectionAbout from "./components/section-about";
import Footer from "./components/footer";
import SectionCertificate from "./components/section-certificate";

const Home = () => {
  return (
    <>
      <Header />
      <SectionPublicity />
      <SectionServices />
      <SectionAbout />
      <SectionCertificate />
      <SectionDepoiments />
      <Footer />
    </>
  );
};

export default Home;
