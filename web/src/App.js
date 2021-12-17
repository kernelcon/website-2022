import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

// Import Components
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SecondaryNav from "./components/NavBar/SecondaryNav";

// Import Pages
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Bio from './pages/Agenda/Bio';
import Conference from "./pages/Conference/Conference";
import Dates from "./pages/Dates/Dates";
// import OpenCalls from "./pages/OpenCalls/OpenCalls";
import CFP from "./pages/CFP/CFP";
import Home from "./pages/Home/Home";
import Sponsors from "./pages/Sponsors/Sponsors";
import Venue from "./pages/Venue/Venue";
import Register from "./pages/Register/Register";
import Safety from "./pages/Safety/Safety";
import Training from "./pages/Training/Training";

function App() {
	return (
		<Router>
			<NavBar />
			<SecondaryNav />
			<div className="page-box">
				<div className="container">
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/admin" component={Admin} />
          <Route exact path="/bio" component={Bio} />
					<Route exact path="/conference" component={Conference} />
					<Route exact path="/dates" component={Dates} />
					{/* <Route exact path="/open-calls" component={OpenCalls} /> */}
					<Route exact path="/cfp" component={CFP} />
					<Route exact path="/sponsors" component={Sponsors} />
					<Route exact path="/venue" component={Venue} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/safety" component={Safety} />
					<Route exact path="/training" component={Training} />
				</div>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
