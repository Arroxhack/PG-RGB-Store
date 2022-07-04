import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanFilterPrice,
  getAllCategories,
  getAllProducts,
  setFilterBrands,
  setFilterMax,
  setFilterPrice,cleanOrder,orderedByPrice, cleanFilterBrands,
  filterCategory, filterBran, filterPrice
} from "../../redux/actions";
import { setFilter } from "../../redux/actions";
import { filterCategories } from "../../redux/actions";
import { getBrand } from "../../redux/actions";
import { filterBrands } from "../../redux/actions";
import { filterMin } from "../../redux/actions";
import { cleanFilter } from "../../redux/actions";
import { useParams, useSearchParams } from "react-router-dom";
import Side from "./Side";
export default function SideBar() {
  //ESTADOS
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const brand = useSelector(state => state.brands);
  const products = useSelector(state => state.products);
  const filters = useSelector(state => state.filtros);
  const filterMax = useSelector(state => state.filterMax);
  const filterOrder= useSelector(state=> state.filterOrder)

  const productBrands = []
  products && products.forEach(p=>{

    if(!productBrands.includes(p.brand)){
      return productBrands.push(p.brand)
    }
  })

  const[searchParams,setSearchParams]= useSearchParams()
  const categoryQuery = searchParams.get("category")
  const brandQuery=searchParams.get("brand")
  const nameQuery=searchParams.get('name')
  useEffect(() => {
    dispatch(getAllCategories())
    if(!brandQuery){dispatch(filterCategory(categoryQuery,nameQuery))}
    if(brandQuery){dispatch(filterBran(categoryQuery,brandQuery,nameQuery))}
    }
  ,[brandQuery,categoryQuery, dispatch,nameQuery]);


  
  return (
    <aside className="w-1/4 md:w-64 sm:text-xs flex flex-col justify-around border-r-2 border-primary text-lg md:text-sm text-center text-primary-400 ">
      {/*------------------ CONTENEDOR DE LOS FILTROS  ------------------   /*/}
       <Side/>
      {/*------------------ CATEGORIES  ------------------   /*/}
      {/* <div className="flex flex-col pb-4">
        <h4 className="text-xl text-yellow-300 pb-4">Categories</h4>
        <ul>
          <li className="flex flex-col">
            <button
              className="text-left text-lg pl-8  "
              onClick={e => handleFilterCat(e)}
              value={"all"}
              name='category'
            >
              All
            </button>
            {categories
              ? categories.map(cat => {
                  return (
                    <button
                      className="text-left text-lg pl-8 hover:animate-pulse "
                      key={cat.id}
                      name="category"
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
      </div> */}
      {/*------------------ BRANDS ------------------   /*/}
      {/* <div className="flex flex-col  pl-4 pt-4">
        <h4 className="text-xl text-yellow-300 pb-3">Brands</h4>

        <button
          className="text-left text-lg pl-4"
          onClick={e => handleFilterBrand(e)}
          value="all"
          name="brand"
        >
          All
        </button>
        {productBrands
          ? productBrands.map(m => {
              return (
                <button
                  className="text-left text-lg pl-4 hover:animate-pulse "
                  onClick={e => handleFilterBrand(e)}
                  value={m}
                  name="brand"
                >
               
                  {m}
                </button>
              );
            })
          : 0}
      </div> */}
      {/*------------------ FILTER MIN PRICE AND MAX PRICE  ------------------   /*/}
      {/* <div className="pt-4">
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
      </fragments> */}
    </aside>
  );
}
