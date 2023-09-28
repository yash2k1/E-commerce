import "./MainImageSliderStyle.css";
import SliderMenu from "./SliderData";
import { useState ,useEffect} from "react";
// import Categories from "./Categories"
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
function MainImageSlider(){
    let [currentIndex, setIndex]=useState(0);
    const updateSilder=(val)=>{
          let n=SliderMenu.length;
         setIndex(currentIndex=>(currentIndex+val+n)%n);
    }
// auto slide
useEffect(()=>{
    const interval=  setInterval(()=>{   
        updateSilder(1);
},5000);
return ()=>clearInterval(interval);
},[currentIndex]);
  
// slide to right 
 function toForward(){
   updateSilder(1);
 }
// slide to left 
 function toBackward(){
    updateSilder(-1);
 }
return(
    <>   
    <div className="sliders">
        
    <div className="mainImageText ">
        <b>Get your personalised vector art</b>
        <div className="imageText">{SliderMenu[currentIndex].imageText} </div>
        <button className="sliderBtn">visit collections</button>
        </div>
        <span className="image">
        <img src={SliderMenu[currentIndex].imageSrc} alt={SliderMenu[currentIndex].imageAlt} className="silderImages" id={SliderMenu[currentIndex].imageId} />
        <ChevronLeftRoundedIcon className="backward" onClick={toBackward}/>
    <ChevronRightRoundedIcon className="forward" onClick={toForward} />
        </span>
      </div>
           </>
       )}
export default MainImageSlider;