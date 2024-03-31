
import React from 'react'
import { Link } from 'react-router-dom'

 
const ExploreButton = (props) => {



  return (
    <div>
      <button className="rounded-xl border-2 border-brand-500 px-5 py-3 text-base font-medium text-brand-500 transition duration-200 hover:bg-brand-600/5 active:bg-brand-700/5 dark:border-brand-400 dark:bg-brand-400/10 dark:text-white dark:hover:bg-brand-300/10 dark:active:bg-brand-200/10">
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
