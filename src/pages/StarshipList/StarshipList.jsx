import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(()=>{
    getAllStarships()
    .then(starshipData =>setStarships(starshipData.results))
  }, [])

  return (  
    <>     
      <div className="starship-container">
        {starships.map((starship)=>(
          <Link 
            to={`/starship`} 
            state={{starship}} 
            key={starship.model}
          >
            <div id="starshipDiv">
              {starship.name}
            </div>
          </Link>
        ))}
      </div>
    </>
    );
}
 
export default StarshipList;