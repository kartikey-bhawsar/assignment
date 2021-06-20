import React, { useState } from 'react';
import './App.css';
import ProductsComponent from './Components/ProductsComponent';
import WelcomeComponent from './Components/WelcomeComponent';

const products = [
  { id: 1, name: 'Pepsi', content: "This is Pepsi cold drink", tag: "That's What I Like" },
  { id: 2, name: 'Coca-Cola', content: "This is Coca-Cola cold drink", tag: "Taste the Feeling" },
  { id: 3, name: 'Sprite', content: "This is Sprite cold drink", tag: "Obey Your Thirst" },
  { id: 4, name: 'Thums up', content: "This is Fenta cold drink", tag: "Taste the Thunder" },
];

function App() {

  const [view, setView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState("");

  const changeView = (product) => {
    if (product !== undefined) setSelectedProduct(product);
    if (view === 'home') setView('secondPage');
    else setView('home');
  }

  return (
    <div className="App">
      <h1>THE COMPANY</h1><hr /><br />
      {view === 'home' && <h2>Cold-Drinks</h2>}
      {view === 'home' && <ProductsComponent products={products} productClicked={changeView} />}
      {view === 'secondPage' && <WelcomeComponent selectedProduct={selectedProduct} changeView={changeView} />}
      <hr />
    </div>
  );
}

export default App;
