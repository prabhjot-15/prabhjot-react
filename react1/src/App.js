import React from "react";
import AppNavbar from "./component/Navbar";
// import MovieCard from "./component/Moviecard";
// import MovieList from "./component/Movielist";
// import AddMovie from "./component/Addmovie";
function App() {
//   const [weight, setWeight] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [bmi, setBmi] = useState('');
//   const [message, setMessage] = useState('');


// let calcBmi = (event) =>{
//   event.preventDefault();
  
//   if(weight === 0 || height === 0){
//     alert('please enter valid date and height');
//   }
//   else{
//     let bmi = (weight/(height*height));
//     setBmi(bmi.toFixed(1));
    
//     if(bmi < 25){
//       setMessage('you are underweight');
//     }else if(bmi >= 25 && bmi < 30){
//       setMessage('you are healthy');
//     }else{
//       setMessage('you are overweight');
//     }

//   }
// }

// let reload = () =>{
//   window.location.reload();
// }




  return (
    // <div className="App">
    //   <div className='container'>
    //     <h2>BMI Calculator</h2>
    //     <form onSubmit={calcBmi}>
    //       <div>
    //         <label>Weight (kg)</label>
    //         <input type="text" placeholder="Enter Weight Value" value={weight} onChange={(e) => setWeight(e.target.value)} />
    //       </div>
    //       <div>
    //         <label>Height (m)</label>
    //         <input type="text" placeholder="Enter Height Value" value={height} onChange={(event) => setHeight(event.target.value)} />
    //       </div>
    //       <div>
    //         <button className='btn' type='submit'>Submit</button>
    //         <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
    //       </div>
    //       <div className="center">
    //         <h3>Your BMI is:{bmi}</h3>
    //         <p>{message}</p>
    //       </div>
    //     </form>
    //   </div>
    // </div>




    <div className='App'>
        <AppNavbar />
    </div>
  );
}

export default App;
