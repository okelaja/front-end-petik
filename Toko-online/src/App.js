import Header from "./component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";
import Main from "./component/Main/Main.js";
import Hero from "./component/Hero/Hero.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Footer nama="Haikal" />
    </div>
  );
}

export default App;
