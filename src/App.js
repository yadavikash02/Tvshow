import './App.css';
import Header from './component/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import SetElement from './component/SetElement';
import Summary from './component/Summary';
function App() {
  const[mode,setMode]=useState('light');
  const[viku,setViku]=useState(0);
  const changeMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
  }
  const [data,setData]=useState([]);
  const getDataFromApi=()=>{
      fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response)=>response.json())
      .then((json)=>{
          // console.log(json)
          setData(json);
      });
  }
  useEffect(()=>{
      getDataFromApi();
  },[])
  const clickhandler=(showID)=>{
    console.log(showID)
    // showID=showID.toString();
    setViku(showID);
    console.log("shantanu")
    console.log(viku)
    console.log(viku)
    console.log(viku)
  }
  return (
   <BrowserRouter>
    <Header title="TVmaze" mode={mode} toggle={changeMode}/>
    <Routes>
      <Route path='/Tvshow'element={<div className="container">
    <div className="container row">
          {
            data.map((element) => {
                 return <div className="col-md-4 my-5 mx-0.5 container" key={element.show.id ? element.show.id : "1"}>
                    <SetElement imageUrl={element.show.image?.original} name={element.show.name} showID={element.show.id} clickhandler={clickhandler} mode={mode}/>
              </div>
            })
          }
    </div>
    </div>}/>
    <Route path='/'element={<div className="container">
    <div className="container row">
          {
            data.map((element) => {
                 return <div className="col-md-4 my-5 mx-0.5 container" key={element.show.id ? element.show.id : "1"}>
                    <SetElement imageUrl={element.show.image?.original} name={element.show.name} showID={element.show.id} clickhandler={clickhandler} mode={mode}/>
              </div>
            })
          }
    </div>
    </div>}/>
    <Route path='/summary'element={<div className="container">
    <div className="container row">
    {
  data.map((element) => {
    if (viku === element.show.id) {
      // console.log("run")
      return (
        <div className="col-md-4 my-5 mx-0.5 container" key={element.show.id ? element.show.id : "1"}>
          <Summary imageUrl={element.show.image?.original} name={element.show.name} summary={element.show.summary} genres={element.show.genres} mode={mode}/>
        </div>
      );
    }
    return null; // Or you can choose to render something else if the condition is not met
  })
}
    </div>
    </div>}/>
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
