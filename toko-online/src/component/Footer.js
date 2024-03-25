import { Component } from "react";

class Footer extends Component {
    render() {
      return (
        <footer align="center">
          <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
          <span>Make with &#10084</span>
        </footer>
      );
    };
  };

export default Footer;
  