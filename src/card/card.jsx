import { useState } from "react"
import "./card.css"
import Reviews from "./Data";

function Card(){
    
function Left(){

    if(index<=0){
        setIndex(Reviews.length-1)
    }
    else{
    setIndex(index-1);

    }
}
function Right(){
    if(index===Reviews.length-1){
        setIndex(0)
    }
    else{
    setIndex(index+1);

    }

}

var [index,setIndex]=useState(0)
var {name,job,text,image,}=Reviews[index]
    return(
        <div className="Card">
            <div className="imgback">
                <img src={image} alt="image" id="image"/>
            </div>
            <h5 className="name">{name}</h5>
            <h6 className="job">{job}</h6>
            <p className="text">{text}</p>
            <div className="butt">
                    <button className="left" onClick={Left}>{"<"}</button>
                    <button className="right" onClick={Right}>{">"}</button>
            </div>

        </div>

    )
}
export default Card