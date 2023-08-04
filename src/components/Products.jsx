import React, { useState, useEffect, useRef } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  
  const [categories, setCategories] = useState([]);
  const componentMounted = useRef(true);
  

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      
      const categoryResponse = await fetch("https://api.escuelajs.co/api/v1/categories");
      
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setCategories(await categoryResponse.json());
        setLoading(false);
      }
     

      return () => {
        componentMounted.current = false;
      };
    };

    getProducts();
  }, []);
  const fetchProductsByCategory = async (categoryId) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
    const data = await response.json();
    setFilter(data);
  }

  const CategoryButtons = () => {
    return categories.map(category => (
      <button
        key={category.id}
        className="btn btn-outline-dark btn-sm m-2"
        onClick={() => fetchProductsByCategory(category.id)}
      >
        {category.name}
      </button>
    ));
  };


  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
           <CategoryButtons />
        </div>

        {filter.slice(0, 21).map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card  h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.images[0]}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                  <Link to={"/product/" + product.id} style={{textDecoration:"none", color:"black"}}>
                  {product.title}
                  </Link> 
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul>
                  <li className="list-group-item lead">₨ {product.price}</li>
                </ul>
                <div className="card-body ">
                
                  <button className="btn btn-outline-dark btn-md " >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
