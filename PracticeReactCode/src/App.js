import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import LiftingStateUp from './component/LiftingStateUp';
import Parent from './component/Parent';

const App = () => {
    const name ="pinki"
    // const [user, setUser] = useState()
  return (
    <div>
      <Parent/>
    </div>
  )
}

const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(<Parent/>)

export default App
