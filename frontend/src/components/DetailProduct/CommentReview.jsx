import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCommendProduct,
  VaciarStateProductComment,
} from "../../redux/actions/index";

export default function CommentReview({ idProduct }) {
  //console.log(idProduct);
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
    <div className="border-solid w-full">
      <div className="bg-opacity-0 ">
        <p className=" text-center py-3 text-xl font-PT  text-secundary-250 my-2">
          Reviews
        </p>
        {AllComentarios.length > 0 ? (
          AllComentarios.map((e) => (
            <>
              <div className="bg-secundary-250 px-6 py-8 rounded text-black my-2">
                <p>{e.comentario}</p>
              </div>
            </>
          ))
        ) : (
          <div className="bg-secundary-250 px-6 py-8 my-2">
            <p>There are no reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
