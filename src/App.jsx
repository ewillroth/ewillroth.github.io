import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Splash from './components/Splash';
import './reset.css'

const App = () => {

	return (
	<div className="App">
		<Header />
		<Splash />
		<About />
		<Skills />
		<Projects />
		<Contact />
	</div>
	);
}

export default App;
