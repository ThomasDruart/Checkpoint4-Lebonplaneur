import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/";
import Footer from "./components/Footer/";
import GlidersList from "./pages/GlidersList";
import GliderDetail from "./pages/GliderDetail";
import PostForm from "./pages/PostForm";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Switch>
        <Route path="/gliders/:id" component={GliderDetail} />
        <Route path="/post" component={PostForm} />
        <Route exact path="/" component={GlidersList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
