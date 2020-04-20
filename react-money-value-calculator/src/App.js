import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const computedValue = (value) => {
  console.log(JSON.stringify(value));
};
function App() {
  return (
    <div className='App'>
      <Header />
      <Form computedValue={computedValue} />
      <Footer />
    </div>
  );
}

export default App;
