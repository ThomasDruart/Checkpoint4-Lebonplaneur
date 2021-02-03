import { Reset } from "styled-reset";
import {} from "react-router-dom";

import Header from "./components/Header/";
import Footer from "./components/Footer/";
import GlidersList from "./components/GlidersList";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <GlidersList />
      <Footer />
    </div>
  );
}

export default App;
