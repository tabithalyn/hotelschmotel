import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Information from "./components/Information";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <NavMenu />
      <Header />
      <Carousel />
      <Information />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
