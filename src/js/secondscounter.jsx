import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


const Card = (props) =>{
    return(
    
        <div class="card text-bg-dark my-3 mx-3 " style={{width:"100px"}} >            
            <div class="card-body d-flex justify-content-center align-items center" style={{backgroundColor:"black"}}>
                <h5 class="card-title text-center" style={{fontSize:"90px"}}>{props.digit}</h5>
            </div>
        </div>
    )
}


const SecondsCounter = (props) => {
    return (
    <div className = "d-flex justify-content-center" style={{backgroundColor:"black"}}>
            <Card digit={<FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} />} />
            <Card digit={Math.floor(props.counter/10000 %10)}/>
           <Card digit={Math.floor(props.counter/10000 %10)}/>
           <Card digit={Math.floor(props.counter/1000 %10)}/>
           <Card digit={Math.floor(props.counter/100 %10)}/>
           <Card digit={Math.floor(props.counter/10 %10)}/>
           <Card digit={props.counter % 10}/>
          
    </div>) 
}



export default SecondsCounter;