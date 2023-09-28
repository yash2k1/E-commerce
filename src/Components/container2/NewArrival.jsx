import "./NewArrivalStyle.css"
function NewArrival(){
return(
    <>
    <div className="newArrival">
    <div className="newArrivalHeading">new arrival</div>
    <div className="newArrivals">
        <div className="newArrivalContainer">
                <img src="./images\arrivals\arrivals1.jpg" className="newArrivalImages"></img>
                <div className="newArrivalDes">Lorem ipsum.</div>
        </div>
       
        <div className="newArrivalContainer">
                <img src="./images\arrivals\arrivals3.jpg" className="newArrivalImages"></img>
                <div className="newArrivalDes">Lorem ipsum.</div>
        </div>

        <div className="newArrivalContainer">
                <img src="./images\arrivals\arrivals4.jpg" className="newArrivalImages"></img>
                <div className="newArrivalDes">Lorem ipsum.</div>
        </div>

        <div className="newArrivalContainer">
                <img src="./images\arrivals\arrivals5.jpg" className="newArrivalImages"></img>
                <div className="newArrivalDes">Lorem ipsum.</div>
        </div>
      
    </div>
    </div>
    </>
)
}
export default NewArrival;