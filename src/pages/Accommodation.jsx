import { useParams } from "react-router-dom";
import products from "../data/logements.json";

import Star from "../components/Accommodation/Stars";
import Server from "../components/Accommodation/Server";
import ImageSlider from "../components/Accommodation/ImageSlider";
import Tags from "../components/Accommodation/Tags";
import Collapse from "../components/Accommodation/Collapse";
import PageNotFound from "./Error";

const Accommodation = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, location, rating, host, equipments, description, pictures } =
    product || {};
  //ajouter ceci
  if (!product) {
    return <PageNotFound />;
  }
  //et met un else comme ça
  else {
    return (
      <div className="singleproduct">
        <ImageSlider slides={pictures} />
        <div className="singleproduct__content">
          <div className="singleproduct__informations">
            <h1 className="singleproduct__title">{title}</h1>
            <p className="singleproduct__location">{location}</p>
            <div className="singleproduct__tags">
              {product?.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="singleproduct__rating-and-host">
            <Star rating={rating} />
            <Server host={host} />
          </div>
        </div>
        <div className="singleproduct__dropdowns">
          <Collapse title="description" content={description} />
          <Collapse title="équipement" content={equipments} />
        </div>
      </div>
    );
  }
};

export default Accommodation;
