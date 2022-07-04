import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCommendProduct,
  VaciarStateProductComment,
} from "../../redux/actions/index";

export default function CommentReview({ idProduct }) {
  console.log(idProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCommendProduct(idProduct));
    setTimeout(() => {
      dispatch(VaciarStateProductComment());
    }, 500);
  }, []);
  const AllComentarios = useSelector((state) => state.CommendProduct);
  const [currentComment, setCurrentComment] = useState(0);
  const [CommentPerPage, setCommentPerPages] = useState(2);
  const ComentariosReducidos = AllComentarios.slice(
    currentComment,
    CommentPerPage
  );

  return (
    <div className="border-solid border-white">
      <div className="bg-opacity-0 px-6 py-8 rounded shadow-md text-black  ">
        <p className="w-full text-center py-3 rounded bg-primary-400 my-2">
          Comentarios-Compradores
        </p>
        {AllComentarios.length > 0 ? (
          AllComentarios.map((e) => (
            <>
              <div className="bg-secundary-250 px-6 py-8 rounded shadow-md text-black my-2">
                <p>{e.comentario}</p>
              </div>
            </>
          ))
        ) : (
          <div className="bg-secundary-250 px-6 py-8 rounded shadow-md text-black my-2">
            <p>Todavia no hay comentarios de este producto</p>
          </div>
        )}
        {console.log(ComentariosReducidos, " ACA REY")}
      </div>
    </div>
  );
}
