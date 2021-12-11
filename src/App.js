import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/page/Home';
import About from './components/page/About';
import Services from './components/page/Services';
import Contact from './components/page/Contact';
import Navbar from './components/Navbar';

import Error from './components/page/Error';



function App() {
  return (
		<Router>
			<Navbar />
			<Switch>
			<Route exact path="/"  component={Home} />
			<Route exact path="/about"  component={About} />
			<Route exact path="/service"  component={Services} />
			<Route exact path="/contact"  component={Contact} />


			<Route component={Error} />
			</Switch>
      </Router>

  );
}

export default App;
