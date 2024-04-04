import "./App.css";
import CardsSection from "./component/CardsSection";
import Footer from "./component/Footer";
import FooterBanner from "./component/FooterBanner";
import Header from "./component/Header";
import Slider from "./component/Slider";

function App() {
  return (
    <div className="App">
      <section id="wrapper" class="clearfix">
        <Header />
        <Slider />
        <CardsSection />
        <FooterBanner />
        <Footer />
      </section>
    </div>
  );
}

export default App;
