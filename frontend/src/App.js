import { Reset } from "styled-reset";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GlidersList from "./pages/GlidersList";
import GliderDetail from "./pages/GliderDetail";
import PostForm from "./pages/PostForm";
import UserAdverts from "./pages/UserAdverts";
import Connexion from "./pages/Connexion";

const PrivateRoute = (props) => {
  const { id } = useSelector((state) => state.user);
  const isLoggedIn = !!id;

  if (isLoggedIn) {
    return <Route {...props} />;
  } else {
    toast.error("Vous devez être enregistré");
    return <Redirect to="/" />;
  }
};

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Switch>
        <Route path="/gliders/:id" component={GliderDetail} />
        <Route path="/post" component={PostForm} />
        <Route path="/connexion" component={Connexion} />
        <PrivateRoute path="/mesAnnonces" component={UserAdverts} />
        <Route exact path="/" component={GlidersList} />
      </Switch>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
