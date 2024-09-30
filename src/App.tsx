import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JoinCommunity from "./components/JoinCommunity";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <JoinCommunity />
      <Footer />
    </main>
  );
}

export default App;
