import React from "react";
import { connect } from "react-redux";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Counter from "./components/counter.js";


import "./app.scss";



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
