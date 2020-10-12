import React from 'react';
import Navbar from './components/Navbar'
import QuoteCard from './components/QuoteCard';


function App() {
  return (
    <div className="App">
      <Navbar />

      <QuoteCard
        quote={"Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?"}
        character="Abe Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593"
      />

      <QuoteCard
        quote={"I believe the children are the future... Unless we stop them now!"}
        character="Homer Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
    </div>
  );
}

export default App;
