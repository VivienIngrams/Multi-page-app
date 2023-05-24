import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product details</h1>
      <p>{params.productId}</p>
      <p><Link to="..">Back</Link></p>
    </>
  );
}

export default ProductDetail;
