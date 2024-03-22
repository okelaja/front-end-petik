import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rerum
        placeat, illo amet tempore at similique ratione eum laudantium suscipit
        eius tempora debitis tenetur consectetur voluptates velit temporibus
        odit, praesentium totam minus fugit. Adipisci ipsam consequatur minus,
        reprehenderit maiores similique illum cumque assumenda sit dignissimos
        voluptatem necessitatibus sapiente cupiditate aut!
      </p>
      <Footer />
    </div>
  );
}

// cara penulisan komponen harus di awali dengan kapital
const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by Haikal</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  };
};

export default App;
