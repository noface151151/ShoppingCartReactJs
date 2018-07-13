import React from 'react';

const product =(props)=>(
    <div className="col-xs-6 col-md-3">
    <div className="prod-info-main prod-wrap clearfix">

      <div className="row">

        <div className="col-md-5 col-sm-12 col-xs-12">

          <div className="product-image" >

            <img styles={{'max-width': '100%','max-height': '100%'}} src={props.product.imageLink} className="img-responsive" alt={props.productName}/>
          </div>

        </div>

        <div className="col-md-7 col-sm-12 col-xs-12">

          <div className="product-deatil">

            <h5 className="name">

              <a href="/">{props.product.productName}</a>

              <a href="/"><span>{props.product.productCategory}</span></a>
            </h5>
            <p className="price-container">

              <span>{props.product.productPrice}</span>

            </p>

            <span className="tag1"></span>

          </div>

          <div className="description">

            <p>{props.product.description}</p>

          </div>

          <div className="product-info smart-form">

            <div className="row">

              <div className="col-md-12">

                <a onClick={props.clicked} styles={{cursor: 'pointer'}} className="btn btn-danger">Add to cart</a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
);

export default product;