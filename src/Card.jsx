import React from "react";
//import img1 from './images/grid5.jpg';
//\import img2 from './images/cover2.jpg';
//const img1="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_960_720.png";

function Card (props) {
    
       return(
              <div className="cards"> 
              <div className="card">
              <img
              src={props.imgsrc}
              alt="mypic" 
              className="card_img"
              />
              <div className="card_info">
                     <span className="card_category">{props.title}</span>
                     <h3 className="card_title">{props.sname}</h3>
                     <a
                     href={props.links}
                     target="_blank" 
                     ><button>Watch Now</button>
                     </a>

              </div>
              </div>
              </div>
       );       
}
export default Card;
