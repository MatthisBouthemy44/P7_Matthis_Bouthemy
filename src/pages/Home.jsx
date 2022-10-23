import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/banner.png";
import products from "../data/logements.json";
import marketdata from "../data/aboutData";
import Herobanner from "../components/Header/Herobanner";
import Thumbnails from "../components/Card/Thumbnails";

const slogan = marketdata.slogan;

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Herobanner image={image} title={slogan} />
      </div>{" "}
      <section className="home__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
