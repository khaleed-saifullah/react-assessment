import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Hero
        title="Skin Care Products"
        breadcumb_item="Healthcare & Beauty"
        breadcumb_item_active="Healthcare & Beauty"
      />
      <Product />
      <Footer />
    </>
  );
}

export default App;
