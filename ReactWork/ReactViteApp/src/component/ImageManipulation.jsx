import React , {useState} from 'react'
import cat from './cat3.png';


function ImageManipulation(){
    const[imgHeight, setImageHeight]=useState(200);
    const[imgWidth, setImageWidth]=useState(200);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    const[imgAngle,setImgAngle]=useState(0);

    function increaseHeight(){
        setImageHeight(imgHeight+10);
    }
    function increaseWidth(){
        setImageWidth(imgWidth+10);
    }
    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function imageRotate(){
        setImgAngle(imgAngle+30);
    }

    return (
        <div>
            <h2>ImageManipulation</h2>
            <div style={{border: '4px solid black', width: '220px',height:'300px', margin:'0px auto'}}>
                <img src={cat} height={imgHeight} width={imgWidth} alt='cat image' style={{paddingTop:'25px', paddingLeft:'25px', backgroundColor: `rgb(${red},${green},${blue})`, transform: `rotate(${imgAngle}deg)`}}/>
            </div>
            <div>
                <button onClick={increaseHeight}>Increase Height</button>
                <button>Decrease Height</button>
                <button onClick={increaseWidth}>Increase Width</button>
                <button onClick={changeBGColor}>Change BGColour</button>
                <button onClick={imageRotate}>Rotate Image</button>
                <div>
                    <h2 style={{color:'cyan', backgroundColor:'blue'}}>Image height:{imgHeight}</h2>
                    <h2 style={{color:'cyan', backgroundColor:'blue'}}>Image width:{imgWidth}</h2>
                </div>
            </div>

        
        
        </div>
    )
}

export default ImageManipulation