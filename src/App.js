import React from "react";
import UseState from "./Components/Hooks/UseState";
import UseEffect from "./Components/Hooks/UseEffect";
import UseReducer from "./Components/Hooks/UseReducer";

function App() {
  return (
    <div>
     <UseState/>
     <UseReducer/>
     <div style={{justifyContent:"center",display:"flex", alignItems:"center" } }>
     <UseEffect/>
     </div>

    </div>
  );
}

export default App;
