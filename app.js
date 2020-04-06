import React from "react";
import Wrapper from "./pages/Wrapper";
import Header from "./pages/Header";
import Body from "./pages/Body";

function App() {
  return (
    <Router>
      <div className="App">
          <Wrapper>
          <Header />
          <Body />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;