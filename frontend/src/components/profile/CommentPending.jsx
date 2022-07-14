import React, { useState } from "react";
import { useNavigate } from "react-router";

function CommentPending({ ComentariosPending }) {
  const [product, setProduct] = useState(0);
  const navigate = useNavigate();
  const HandleSelect = (e) => {
    setProduct(e.target.value);
   // console.log(product);
  };
  return (
    <div className="flex bg-secundary-250 p-6 sm:flex-row flex-col">
          <div className="flex-grow">
        <h1 className="text-2xl font-open font-bold pb-4 capitalize">
          Comments
        </h1>
        <p>Do a review of your product!</p>
    
        <select className="bg-primary-200 text-secundary-250 block w-full px-4 py-2 mt-2 border rounded-md"
          onChange={(e) => {
            HandleSelect(e);
          }}
        >
          <option disabled selected>
            Choose product:
          </option>
          {ComentariosPending &&
            ComentariosPending.map((e, i) => {
              return (
                <option key={e.id} value={e.idProducto}>
                  {e.NameProduct}
                </option>
              );
            })}
        </select>
        {product === 0 ? null : (
          <>
            <button
               className="w-full text-center mt-5 py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
              onClick={(e) => navigate(`/productsDetail/${product}`)}
            >
              Comment
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CommentPending;
