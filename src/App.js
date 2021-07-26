import Footer from "./components/footer";
import Navbar from "./components/header";
import Hero from "./components/hero";
import "./scss/app.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
