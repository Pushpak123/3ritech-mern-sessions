import './App.css';

function App() {
  let spanStyle = {
    color: '#f00'
  };

  let imgStyle = {
    width: '768px',
    margin: '10px auto', 
    position: 'absolute', 
    top: '50px', 
    left: '100px'
  }

  let monthlyPrice = 19;
  return (
    <div className="container">
      <h2>Choose your <span style={spanStyle}>plan</span></h2>
      
      {/* image */}
      <img src={require('./assets/images/1067-1000x600.jpg')} style={imgStyle} />

      {/* price-row */}
      <div className="price-row">
        {/* price-col */}
        <div className="price-col">
          <p>Starter</p>
          <h3>${monthlyPrice} <span>/month</span></h3>

          <ul>
              <li>1 Website</li>
              <li>10 GB Disk Space</li>
              <li>Free Email Address</li>
              <li>Basic Web Builder</li>
              <li>No SSL Certificate</li>
              <li>Limited Support</li>
          </ul>

          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
