//     // App.js 
//             //  old project code copy 

//             import React,{useEffect, useMemo} from 'react';
// import './App.css';

// function App() {
//   const [count,setCount] =React.useState(100);
//   const [emp,setEmp] = React.useState('');

//  let empFn = useMemo(()=>{
//    console.log(`Employee = ${emp}`);
   
//    return(
//      <>
//          <h5>This is from Employee table</h5>
//          <h5>Total Employee = {emp} </h5>
//       </>
//     )
//   },[emp])
  
  
//   // useEffect(()=>{
//     //    console.log(count);
//     //    console.log(emp);
//     // },[count,emp])
    
    
//     return (
//       <>
//     <h4>This is from Product table</h4>
//      <h4>Total Product = {count} </h4>
//     {empFn}
//       { console.log(`Product = ${count}`) };
//      <button onClick={()=>setCount(count-1)}>Update Product</button>
//      <button onClick={()=>setEmp('Rajkumar')}>Update Employee</button>
//     </>

//   );
// }

// export default App;
