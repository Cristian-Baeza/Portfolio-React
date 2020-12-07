import React from "react"
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutMe from './pages/AboutMe';
import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import { Switch, Route } from "react-router-dom";
import MovieDetail from './pages/MovieDetail';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work" exact>
          <MyWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
