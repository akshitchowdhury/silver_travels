
import React from 'react'
import { Link } from 'react-router-dom'
import './ExploreButton.css'
 
const ExploreButton = (props) => {



  return (
    <div>
      <button className="exploreContact
       rounded-xl border-2 border-brand-500
        px-5 py-3 text-base font-medium
         text-brand-500 
         hover:bg-sky-400
         
         transition ease-in-out duration-300
          "
      style={{marginLeft: '20%'}}>
       {
        props.options!=="Explore" ? (
          <Link to= "/contact">{props.options} </Link>

        ) : (
          <Link to= "/home">{props.options} </Link>

        )
       }
        
</button>
    </div>
  )
}

export default ExploreButton
