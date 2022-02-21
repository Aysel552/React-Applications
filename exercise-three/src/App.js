// Solving the task using class components:

import { Component } from 'react';


export default class App extends Component{
  
  state = {
      count: 100
}


render(){
  return(
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={() =>this.setState({count: this.state.count -5 })}>Click</button>
    </div>
  )
}
} 














// Resolving the task using React hooks:

// import {useState} from 'react';

// function App() {
//   const [count,setCount] = useState(100);

//   const updateCount = () =>{
//     setCount(count-5)
//   }

//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={updateCount}>Click</button>
//     </div>
//   )
// }

// export default App;
