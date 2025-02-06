

// function App() {
//   return (
//     <div className="App">
      
//       <section>
//       <h1 style={{color:"red"}}>Hello</h1>
//       <p style={{color:"red", fontSize:"25px"}}>World</p>
//       </section>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Main/>
//       <div className='sidebar'>
//       <Sidebar1/>
//       <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import React from 'react'
// import PropChild from './propsex/PropChild'
// import SubChild from './propsex/SubChild'
import Child1 from './propsex/Child1'

const App = () => {
  return (
    <div>
    app
      {/* <PropChildEx num={1000}>
        <h1>this is data coming from props children</h1>
        <SubChild/>
      </PropChildEx> */}
      <Child1 university="Mallareddy university"/>
    </div>
  )
}

export default App