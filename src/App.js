
import { Link, Outlet } from "react-router-dom";

import Pages from "./pages/Pages";


function App() {
  return (
    <div className="App">
      <Pages />
      

    <nav 
   style={{
    borderRight: '1px solid ',
    padding: "1rem",
    margin: '1rem',

  }}
        >
  
      <Link  style={{ padding: "1rem"}} to="/invoices">Invoices</Link>
      <Link to="/expenses">Expenses</Link>

    </nav>
    <Outlet />
    

 

  
  
  
   
    </div>
  );
}

export default App;
