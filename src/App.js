import logo from './logo.svg';
import './App.css';
import React from 'react';
import Name from './Name';
import Para from './Para';
import List from './List';
import Card from './Card';
import Sdata from './Scardata';
//import add, { div, mult, sub } from './Calc';

//in nelflix()val=sdata array value.
function netflixcard(val)
{
  return(
<Card 
        key={val.id} 
        imgsrc={val.imgsrc}
        title = {val.title} 
         sname= {val.sname}  
         links ={val.links} 
       />
  );
}
function App() {
  return (
      <>
        <Name />
        <Para />
        <List />
        <h1 className='heading_style'> List of top 5 series of Netflix </h1>
        {Sdata.map(netflixcard)}
        
      


               </>
    //</div>
    //<div> <ul><li>Sum of two no is :{add(40,4)}</li>
   // <li>Substation of two no is :{sub(40,4)}</li>
    //<li>Multipcation of two no is :{mult(40,4)}</li>
    //<li>Division of two no is :{div(40,4)}</li>
    //</ul></div>

    
  );
}

export default App;
