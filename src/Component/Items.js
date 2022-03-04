import React from 'react'

function Items(props) {
  let {image, title, MainContainerTextColor} = props
  return (
    <div className='items'>
      <img src={image} />
      <h5 style={MainContainerTextColor}>{title}</h5>
    </div>
  )
}

export default Items
