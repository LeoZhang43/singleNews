import React from 'react';

const Product = ({ author, title, description, url, urlToImage}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>{description}</p>
      <div>
        <h1><a href={url}>Read more</a></h1>
      </div>
      <img src={urlToImage} alt="News Image" />
    </div>
  );
};

export default Product;
