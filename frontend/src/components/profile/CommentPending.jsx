import React, { useState } from "react";
import { useNavigate } from "react-router";

function CommentPending({ ComentariosPending }) {
  const [product, setProduct] = useState(0);
  const navigate = useNavigate();
  const HandleSelect = (e) => {
    setProduct(e.target.value);
    console.log(product);
  };
  return (
    <div>
      <p className="bg-primary-400 font-Open px-5 py-1 rounded-lg  cursor-default uppercase font-semibold ">
        CON SU COMPRA TIENE DERECHO A HACER UN COMENTARIO DEL PRODUCTO:
      </p>
      <div className="bg-secundary-250 px-6 py-8 rounded shadow-md text-black">
        <select
          onChange={(e) => {
            HandleSelect(e);
          }}
        >
          <option disabled selected>
            Choose option:
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
              className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
              onClick={(e) => navigate(`/productsDetail/${product}`)}
            >
              Realizar Comentario
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CommentPending;
