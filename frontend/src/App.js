import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/";
import Footer from "./components/Footer/";
import GlidersList from "./pages/GlidersList";
import GliderDetail from "./pages/GliderDetail";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Switch>
        <Route exact path="/gliders/:id" component={GliderDetail} />
        <Route exact path="/" component={GlidersList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
