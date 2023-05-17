import React from 'react'
// function Counter({title,count}) {
function Counter(props) {
    const {title,...obj}=props
  return (
    <div>
      <h1>counter:{title} {obj.count}</h1> 
    </div>
  )
}

export default Counter
