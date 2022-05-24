import React from 'react';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Extension from './components/Extension';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Connect from './components/Connect';

function App() {
	return (
		<div className="App p-0 flex flex-col items-center overflow-x-hidden">
			<Navbar />
			<Hero />
			<Features />
			<Extension />
			<Faq />
			<Connect />
			<Footer />
		</div>
	);
}

export default App;
