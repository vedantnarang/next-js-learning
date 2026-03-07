import React from 'react'

const Reviews = async ({params}) => {
    const {Id}=await params;
  return (
    <div>Reviews page for product {Id}</div>
  )
}

export default Reviews