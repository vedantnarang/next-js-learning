import React from 'react'

const reviewId =async ({params}) => {
    const {Id,reviewId}=await params;
  return (
    <div>
    <div>reviewId:{reviewId}</div>
    <div>ProductId:{Id}</div>
    </div>
  )
}

export default reviewId