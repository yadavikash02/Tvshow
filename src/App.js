import './App.css';
import Header from './component/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import SetElement from './component/SetElement';
import Summary from './component/Summary';
import ImageAutoPlay from './component/ImageAutoPlay';
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
    setViku(showID);
  }
  return (
   <BrowserRouter>
    <Header title="TVmaze" mode={mode} toggle={changeMode}/>
    <ImageAutoPlay data={data}></ImageAutoPlay> 
    <Routes>
      {/* <Route path="/Tvshow" element={<ImageAutoPlay data={data}></ImageAutoPlay>}></Route> */}
      <Route path='/Tvshow'element={<div className="container">
    <div className="row">
          {
            data.map((element) => {
                 return <div className="col-md-4 my-5 mx-0.5 " key={element?._embedded?.show?.id ? element?._embedded?.show?.id : "1"}>
                    <SetElement imageUrl={element?._embedded?.show?.image?.original} name={element?._embedded?.show?.name} showID={element?._embedded?.show?.id} clickhandler={clickhandler} mode={mode}/>
              </div>
            })
          }
    </div>
    </div>}/>
    <Route path='/'element={<div >
    <div className="container row">
          {
            data.map((element) => {
                 return <div className="col-md-4 my-5 mx-0.5" key={element?._embedded?.show?.id ? element?._embedded?.show?.id : "1"}>
                    <SetElement imageUrl={element?._embedded?.show?.image?.original} name={element?._embedded?.show?.name} showID={element?._embedded?.show?.id} clickhandler={clickhandler} mode={mode}/>
              </div>
            })
          }
    </div>
    </div>}/>
    <Route path='/summary'element={<div className="container">
    <div className="container row">
    {
  data.map((element) => {
    if (viku === (element?._embedded?.show?.id?element?._embedded?.show?.id:"")) {
      // console.log("run")
      return (
        <div className="col-md-4 my-5 mx-0.5 container" key={element?._embedded?.show?.id ? element?._embedded?.show?.id : "1"}>
          <Summary imageUrl={element?._embedded?.show?.image?.original?element?._embedded?.show?.image?.original:""} name={element?._embedded?.show?.name?element?._embedded?.show?.name:""} summary={element?._embedded?.show?.summary?element?._embedded?.show?.summary:""} genres={element?._embedded?.show?.genres?element?._embedded?.show?.genres:""} mode={mode}/>
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
