import React from "react";
const currentDate = new Date().toLocaleDateString();
const currentTime= new Date().toLocaleTimeString();
let cuurDate = new Date();
cuurDate = cuurDate.getHours();
const cssStyle={};
let greeting='';
if(cuurDate>=1&& cuurDate <12){
    greeting='Good Morning EveryOne';
    cssStyle.color='green';
}else if(cuurDate>=12 && cuurDate<19)
{
    greeting='Good Afternoon Everyone';
    cssStyle.color='orange';
}
else{
    greeting='Good Night Everyone';
    cssStyle.color='black';
}
function Para()
{
    return(
        <>
    <p>Developing is my work</p>
    <p id="pd">Current Date is :{currentDate} and time is : {currentTime} </p>
    <div>Hello ,<span style={cssStyle}>{greeting}</span></div>
    </> 
    );
}
export default Para;