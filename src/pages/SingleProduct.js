import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  // console.log(useParams());
  const { productId } = useParams();
  // get product whose id matches productId
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  // console.log(product);

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Products</Link>
    </section>
  );
};

export default SingleProduct;
