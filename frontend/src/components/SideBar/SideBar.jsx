import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanFilterBrands,
  getAllCategories,
  getAllProducts,
  setFilterBrands,
  setFilterMax,
  setFilterPrice,
} from "../../redux/actions";
import { setFilter } from "../../redux/actions";
import { filterCategories } from "../../redux/actions";
import { getBrand } from "../../redux/actions";
import { filterBrands } from "../../redux/actions";
import { filterMin } from "../../redux/actions";
import { cleanFilter } from "../../redux/actions";

export default function SideBar() {
  //ESTADOS
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const brand = useSelector(state => state.brands);
  const products = useSelector(state => state.products);
  const filters = useSelector(state => state.filtros);
  const filterPrice = useSelector(state => state.filterPrice);
  const filterMax = useSelector(state => state.filterMax);
  const filterBrand = useSelector(state => state.filterBrands);
  
  
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getBrand());
  }, [products]);


  //--------------HANDLES CLEAN--------------
  function handleSubmitCleanF(e) {
    e.preventDefault();
    dispatch(cleanFilter());
    dispatch(getAllProducts())
  }

  function handleSubmitCleanB(e) {
    e.preventDefault();
    dispatch(cleanFilterBrands());
    dispatch(getAllProducts());
  }
 //--------------HANDLES FILTERS--------------
  function handleFilterCat(e) {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
    dispatch(filterCategories(e.target.value));
  }

  function handleFilterBrand(e) {
    e.preventDefault();
    dispatch(setFilterBrands(e.target.value));
    dispatch(filterBrands(e.target.value));
  }

  function handleFilterMax(e) {
    e.preventDefault();
    dispatch(filterMin(e.target.value));
  }
  function onChangeMin(e) {
    e.preventDefault();
    dispatch(setFilterPrice(e.target.value));
  }
  function onChangeMax(e) {
    e.preventDefault();
    dispatch(setFilterMax(e.target.value));
  }
  
  return (
    <aside className="w-1/4 md:w-64 sm:text-xs flex flex-col justify-around  border-r-2 border-primary sticky text-lg md:text-sm text-center text-primary-400 ">
      {/*------------------ CONTENEDOR DE LOS FILTROS  ------------------   /*/}
      <div className="flex flex-col justify-center items-center p-0">
       
         <div className="flex mb-2">
    {  filters.length > 1?
      <div className="h-8 flex items-center justify-center border-2 rounded-lg ">
          <div className=" flex items-center ">
            <p className="text-primary w-full ">{filters}</p>
            <button onClick={e => handleSubmitCleanF(e)} className=" pl-4 ">
              x
            </button>
          </div>
        </div>:null}

        {filterBrand.length >1?<div className="pl-4">
          <div className="h-8 flex border-2 items-center rounded-lg pl-2">
            <div className=" flex items-center ">
              <p className="text-primary w-full ">{filterBrand}</p>
              <button
                className=" pl-4 "
                onClick={e => handleSubmitCleanB(e)}
              >
                x
              </button>
            </div>
          </div>
        </div>:null}
      </div>
      <div className=" flex justify-center items-center w-full ">
     { filterMax.length > 1 || filterPrice.length > 1?
         <div className="h-8 w-3/6  flex border-2 items-center rounded-lg">
         <div className="flex justify-center w-full ">
           <p className="text-primary">de ${filterPrice} </p>
           <p className="pl-1"> a ${filterMax}</p>
           <button onClick={e => handleSubmitCleanF(e)} className="pl-2 ">
              x
            </button>
           </div>
         </div>:null}
         </div>
      </div>
      {/*------------------ CATEGORIES  ------------------   /*/}
      <div className="flex flex-col pb-4">
        <h4 className="text-xl text-yellow-300 pb-4">Categories</h4>
        <ul>
          <li className="flex flex-col   ">
            <button
              className="text-left text-lg pl-8"
              onClick={e => handleFilterCat(e)}
              value={"all"}
            >
              All
            </button>
            {categories
              ? categories.map(cat => {
                  return (
                    <button
                      className="text-left text-lg pl-8 hover:animate-pulse "
                      key={cat.id}
                      onClick={e => handleFilterCat(e)}
                      value={cat}
                    >
                      {cat}
                    </button>
                  );
                })
              : 0}
          </li>
        </ul>
      </div>
      {/*------------------ BRANDS ------------------   /*/}
      <div className="flex flex-col  pl-4 pt-4">
        <h4 className="text-xl text-yellow-300 pb-3">Brands</h4>

        <button
          className="text-left text-lg pl-4"
          onClick={e => handleFilterBrand(e)}
          value={"all"}
        >
          All
        </button>
        {brand
          ? brand.map(m => {
              return (
                <button
                  className="text-left text-lg pl-4 hover:animate-pulse "
                  onClick={e => handleFilterBrand(e)}
                  value={m}
                >
                  {" "}
                  {m}
                </button>
              );
            })
          : 0}
      </div>
      {/*------------------ FILTER MIN PRICE AND MAX PRICE  ------------------   /*/}
      <div className="pt-4">
        <label htmlFor="">
          <input
            className="w-16 rounded-lg text-center bg-yellow-300 text-black placeholder:text-gray-900 "
            type="number"
            placeholder="Min"
            onChange={onChangeMin}
          />{" "}
        </label>
        <label htmlFor="">
          <input
            className="w-16 rounded-lg text-center bg-yellow-300 text-black placeholder:text-gray-900 "
            type="number"
            placeholder="Max"
            onChange={onChangeMax}
          />{" "}
        </label>
      </div>
      <fragments className="flex-col items-center pt-2">
        <button
          type="submit"
          className="bg-primary-400 font-Open py-1 rounded-lg text-primary-200  font-semibold hover:bg-primary-300"
          onClick={e => handleFilterMax(e)}
        >
          submit
        </button>
      </fragments>
    </aside>
  );
}
