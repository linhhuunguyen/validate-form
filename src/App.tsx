import React from "react";
import Form from "./Form";
import "./App.css";


function App() {

  return (
    <div className="App">
      <Form mode="edit" />
      <Form mode="create" />
    </div>
  );
}

export default App;
