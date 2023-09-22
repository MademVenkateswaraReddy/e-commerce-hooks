import React from 'react';

export default function Gallery({ productItems, handleAddToCart }) {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={process.env.PUBLIC_URL + '/images/img1.webp'} className="d-block w-100" style={{ height: '450px'}} alt="img1" />
          </div>
          <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/images/img2.webp'} className="d-block w-100" style={{ height: '450px'}} alt="img2" />
          </div>
          <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/images/img3.jpg'} className="d-block w-100" style={{ height: '450px'}} alt="img3" />
          </div>
        </div>
      </div>

      <div className='container row' style={{ margin: 'auto' }}>
        {productItems.map((product) => (
          <div className='card col-5' style={{ margin: '30px' }}>
            <img className='card-img-top' style={{ margin: '25px', width: '80%' }} src={product.pic} alt='card-pic' />
            <div className='card-body'>
              <h5 className='card-title'>{product.name}</h5>
              <p>About Product About Product About Product About Product About Product About Product About Product.</p>
              <h3 className='card-cost'>Rs.{product.cost}</h3>
              <button className='btn btn-primary' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
