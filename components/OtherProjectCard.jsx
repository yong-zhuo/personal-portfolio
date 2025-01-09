import React from 'react'

export const OtherProjectCard = () => {
  return (
    <div className="card bg-primary-content w-96 shadow-xl">
        <figure className="px-4 pt-4">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
    <div className="card-body p-5">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>
  )
}
