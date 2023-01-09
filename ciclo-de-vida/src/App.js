import React, { useState, usefect } from "react";

const App = () => {
  const [user, setUser] = useState("Elisberto");
  const [users, setUsers] = useState(["Elsiberto", "Jose", "Manoel"])


  return (
    <div className="App">
      <h>Hello World!</h>

    <div>
      <input
        value={user}
        onChange={(event)=> setUser(event.target.value)}
      />
    </div>
      
    </div>
  );
}

export default App;
