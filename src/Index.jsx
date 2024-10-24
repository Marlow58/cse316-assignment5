import React from 'react'
import assets from "./assets/producer.p.json"
// List recent characters
// This should accept isOwner as prop
// isOwner is a boolean value, is true if this function is invoked within a webpage of an owner
// In all the other places
// (there are 3 places where you can see characters)
// The index page
// The user->character page
// The world->character page
// Character owner is shown in index and world, but not in user
const Index = (props) => {
  // Props cannot be used as 'switches' as they only accept K/V object pairs.
  console.log(props);
  return (
    // CSS Grid would be most desirable
    // TODO Today: Fix the grid going under the 
    <div className="grid-container" style={{display:"flex", flexWrap:"wrap", marginTop:"72px", flex:"1"}}>
    {assets.map((char) => (
        // This consists of a character frame
        <div className='grid-member' style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
            {/* Resize image to appropriate size */}
            <div>
            <img src={char.img} style={{width: "500px"}} />
            </div>
            {/* Put character name behind it */}
            <div>
            <button className="btn btn-primary">{char.name}</button>
            {/* IF isOwner is false, show owner */}
            {/* {A ? B : C} - ternary, {A && B} - ternary, but no 'else if' */}
            <br></br>
            {Object.values(props).includes("false") && <><i className="bi bi-person"></i><span>{char.owner}</span></>}
            </div>
        </div>
    ))}
    {/* IF isOwner is true, show button */}
    {Object.values(props).includes("true") &&
    <button className='btn btn-secondary'><a href='addchar.html'>Add Character</a></button> }
    </div>
  )
}

export default Index