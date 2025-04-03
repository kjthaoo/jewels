import {useState, useEffect} from "react";
import axios from "axios";
import HousePlan from "./HousePlan";

//https://portiaportia.github.io/json/house-plans.json
const HousePlans = () => {
    const [houses, setHousePlans] = useState([]); //defaults to an empty array
    
    // after page loaded to asynch json retrieval
    useEffect(()=>{
        // automatically execute the asyn function (it doesnt have a name to it or need a name to if since we are only callign it once)
        (async () => { // all the code thats fetching from the json file will be in here
            const response = await axios.get("https://localhost:3001/api/houses"); //this client side is accessing the server (server.js)
            setHousePlans(response.data);
        })(); 
    },[]);

    return (
        <div id="house-plans" className="columns">
            {houses.map((house)=>( //for every house, we will create an component for it
                 <HousePlan
                 _id="1"
                 name= {house.name} //using the name from the JSON data 
                 size= {house.size} //all the keys in here must match the JSON data keys
                 bedrooms={house.bedrooms}
                 bathrooms={ house.bathrooms}
                 main_image={house.main_image}/>

            ))}
        </div>
    );
};

export default HousePlans;