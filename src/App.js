import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

//  import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

// import pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// https://exp-react-porto-front.herokuapp.com/
function App() {
  const URL = "https://express-react-portofolio-back.herokuapp.com/"
 
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/projects">
          <Projects URL={URL}/>
       </Route>
       <Route path="/about">
        <About URL={URL}/>
       </Route>
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
