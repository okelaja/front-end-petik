import { Component } from "react";

// ini footer
// ini class component
class Footer extends Component {
    render() {
      return (
        <footer>
          <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
          <span>Make with &#10084</span>
        </footer>
      );
    };
  };

export default Footer;
  