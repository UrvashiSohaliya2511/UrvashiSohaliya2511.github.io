import React from 'react';
import './App.css';
import Main from "./componants/Main.jsx";

function App() {
  React.useEffect( () => {
    document.title = 'Urvashi Sohaliya | Portfolio';
  } )
  return (
    <div className="App">
      <Main />

    </div>
  );
}

export default App;
