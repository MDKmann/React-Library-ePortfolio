import React from 'react'

function Price({ salePrice, originalPrice }) {
  return (
    <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
            </span>
            ${salePrice}
          </>
        ) : (
          <>${originalPrice.toFixed(2)}</>
        )}
      </div>
  )
}

export default Price