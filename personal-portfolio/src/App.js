import react, { useEffect } from "react";
import './App.css';

function App() {
  useEffect(()=> {
    const now = new Date()
    console.log(now)
  }, [])
  return (
    <div className="App">
      <h1>Marc Rodriguez</h1>
      <img className="trees" src="trans-tree-sil-mirror-crop.png" alt="tree silouette bottom border"/>

    </div>
  );
}

export default App;
