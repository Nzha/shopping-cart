import { Link, useParams } from 'react-router-dom';

function AddedToCart() {
  const { title } = useParams();

  return (
    <div className="pt-10 text-center">
      <h1 className="mb-3 text-2xl font-bold">
        "{title}"<p className="text-xl">has been added to your cart.</p>
      </h1>
      <Link to="/store">
        <p className="text-red-500 underline">Continue shopping</p>
      </Link>
    </div>
  );
}

export default AddedToCart;
