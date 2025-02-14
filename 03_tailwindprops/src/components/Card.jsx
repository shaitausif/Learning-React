import React from 'react'

const Card = ({userName = "Tausif Shaikh", post = "Not Assigned yet."}) => {
    // console.log(props)
  return (
    
    <>
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18681384/pexels-photo-18681384/free-photo-of-gaming.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        {/* {userName || "Tausif Shaikh"} It is used to give default value to props if no props had passed from the user this approach is good but it's not scalable.  */}
        {/* Better approach could be we can add default value while destructuring the key eg. Card = ({userName = "Tausif Shaikh"}) */}
        {userName}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
</>
  )
}

export default Card
