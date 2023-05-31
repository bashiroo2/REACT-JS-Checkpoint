import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import the custom styles

function App() {
  return (
    <div id="form">
      <form>
        <div className="form-group">
          <label htmlFor="loginInput">Login</label>
          <input type="text" className="form-control form-input-material changecolor" id="loginInput" required />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" className="form-control form-input-material changecolor" id="passwordInput" required/>
        </div>
        <button type="submit" className="btn btn-primary troll">Submit</button>
      </form>
    </div>
  );
}

export default App;
