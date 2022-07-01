import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanFilterPrice,
  getAllCategories,
  getAllProducts,
  setFilterBrands,
  setFilterMax,
  setFilterPrice,cleanOrder,orderedByPrice, cleanFilterBrands,
  filterCategory, filterBran
} from "../../redux/actions";
import { setFilter } from "../../redux/actions";
import { filterCategories } from "../../redux/actions";
import { getBrand } from "../../redux/actions";
import { filterBrands } from "../../redux/actions";
import { filterMin } from "../../redux/actions";
import { cleanFilter } from "../../redux/actions";
import { useParams, useSearchParams } from "react-router-dom";
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
  useEffect(() => {
    dispatch(getAllCategories())
    if(!brandQuery){dispatch(filterCategory(categoryQuery))}
    if(brandQuery){dispatch(filterBran(categoryQuery,brandQuery))}
    }
  ,[brandQuery,categoryQuery, dispatch]);


  // //--------------HANDLES CLEAN--------------
  // function handleSubmitCleanF(e) {
  //   e.preventDefault();
  //   //SI TENGO MARCAS
  //   if(filterBrand.length>0 && !filterOrder.length && !filterPrice.length>0 && !filterMax.length>0){ 
  //    dispatch(cleanFilter())
  //    dispatch(filterBrands(filterBrand))
  //   }
  //   //SI TENGO ORDENAMIENTO Y MARCAS
  //   else if( filterOrder.length>0 && filterBrand.length>0 & !filterPrice.length>0 && !filterMax.length>0){
  //     dispatch(cleanFilter())
  //     dispatch(filterBrands(filterBrand))
  //     dispatch(orderedByPrice(filterOrder))
  //   }
  //   //SI TENGO MARCAS Y FILTRO DE PRECIOS
  //   else if(filterBrand.length>0 && filterMax.length && filterPrice.length && !filterOrder.length){
  //     dispatch(cleanFilter())
  //     dispatch(filterBrands(filterBrand))
  //     dispatch(filterMin(filterPrice,filterMax))
  //   }
  //   //SI TENGO FILTRO DE PRECIO
  //   else if(filterMax.length && filterPrice.length && !filterOrder.length && !filterBrand.length>0){
  //     dispatch(cleanFilter())
  //     dispatch(filterMin(filterMax,filterPrice))
  //   }
  //   //SI TENGO ORDENAMIENTO 
  //   else if(filterOrder.length>0 && !filterBrand.length>0 && !filterPrice.length>0 && !filterMax.length>0){
  //     dispatch(cleanFilter())
  //     dispatch(orderedByPrice(filterOrder))
  //   }
  //   else if(filterBrand.length>0 && filterMax.length>0 && filterOrder.length>0 && filterPrice.length>0){
  //     dispatch(cleanFilter())
  //     dispatch(filterBrands(filterBrand))
  //     dispatch(orderedByPrice(filterOrder))
  //     dispatch(filterMin(filterPrice,filterMax))
  //    }
  //   else{
  //     dispatch(cleanFilter())
  //     dispatch(getAllProducts())
  //   }
  // }

//   function handleSubmitCleanB(e) {
//     e.preventDefault();
//     if(filters.length>0 && !filterOrder.length && !filterPrice.length>0 && !filterMax.length>0){ 
//       dispatch(cleanFilterBrands())
//       dispatch(filterCategories(filters))
//       //SI TENGO ORDENAMIENTO Y MARCAS
//      }
//      else if( filterOrder.length>0 && filters.length>0 && !filterPrice.length>0 && !filterMax.length>0){
//        dispatch(cleanFilterBrands())
//        dispatch(filterCategories(filters))
//        dispatch(orderedByPrice(filterOrder))
//      }
//      else if(filters.length>0 && filterMax.length && filterPrice.length && !filterOrder.length>0){
//        dispatch(cleanFilterBrands())
//        dispatch(filterCategories(filters))
//        dispatch(filterMin(filterPrice,filterMax))
//      }
//      else if(filterMax.length && filterPrice.length && !filterOrder.length && !filters.length>0){
//        dispatch(cleanFilterBrands())
//        dispatch(filterMin(filterMax,filterPrice))
//      }
//      else if(filterOrder.length>0 && !filters.length>0 && !filterPrice.length>0 && !filterMax.length>0 && !filterOrder.length>0){
//        dispatch(cleanFilterBrands())
//        dispatch(orderedByPrice(filterOrder))
//      }
//      else if(filters.length>0 && filterMax.length>0 && filterOrder.length>0 && filterPrice.length>0){
//       dispatch(cleanFilterBrands())
//       dispatch(filterCategories(filters))
//       dispatch(orderedByPrice(filterOrder))
//       dispatch(filterMin(filterPrice,filterMax))

//      }
//      else{
//        dispatch(cleanFilterBrands())
//        dispatch(getAllProducts())
//      }


// }

//   function handleSubmitCleanOrder(e) {
//     e.preventDefault(); 
//         //SI TENNGO CATEGORIAS SOLAMENTE
//     if(filters.length>0 && !filterBrand.length>0 && !filterPrice.length>0 && !filterMax.length>0){ 
//       dispatch(cleanOrder())
//       dispatch(filterCategories(filters))
    
//      }
//      //SI TENGO MARCAS SOLAMENTE
//      else if( filterBrand.length>0 && !filters.length>0 && !filterPrice.length>0 && !filterMax.length>0){
//        dispatch(cleanOrder())
//        dispatch(filterBrands(filterBrand))
//      }
//      //SI TENGO MARCAS Y CATEGORIAS
//      else if(filters.length>0 && filterBrand.length>0 && !filterMax.length>0 && !filterPrice.length>0){
//        dispatch(cleanOrder())
//        dispatch(filterCategories(filters))
//        dispatch(filterBrands(filterBrand))
//      }
//      //SI TENGO FILTRO POR PRECIO
//      else if(filterMax.length>0 && filterPrice.length>0 && !filterBrand.length>0 && !filters.length>0){
//        dispatch(cleanOrder())
//        dispatch(filterMin(filterMax,filterPrice))
//      }
//      //SI TENGO TODOS
//      else if(filters.length>0 && filterMax.length>0 && filterBrand.length>0 && filterPrice.length>0){
//       dispatch(cleanOrder())
//       dispatch(filterMin(filterPrice,filterMax))
//       dispatch(filterBrand(filterBrand))
//       dispatch(filterCategories(filters))
//      }
//      else{
//        dispatch(cleanOrder())
//        dispatch(getAllProducts())
//      }

//   }


//   function handleSubmitCleanPrice(e) {
//     e.preventDefault(); 
//         //SI TENNGO CATEGORIAS SOLAMENTE
//     if(filters.length>0 && !filterBrand.length>0 && !filterOrder.length>0){ 
//       dispatch(cleanFilterPrice())
//       dispatch(filterCategories(filters))
    
//      }
//      //SI TENGO MARCAS SOLAMENTE
//      else if( filterBrand.length>0 && !filters.length>0 && !filterOrder.length>0 ){
//        dispatch(cleanFilterPrice())
//        dispatch(filterBrands(filterBrand))
//      }
//      //SI TENGO MARCAS Y CATEGORIAS
//      else if(filters.length>0 && filterBrand.length>0 && !filterOrder.length>0 ){
//        dispatch(cleanFilterPrice())
//        dispatch(filterCategories(filters))
//        dispatch(filterBrands(filterBrand))
//      }
//      //SI TENGO FILTRO POR PRECIO
//      else if( filterOrder.length>0 && !filterBrand.length>0 && !filters.length>0){
//        dispatch(cleanFilterPrice())
//        dispatch(orderedByPrice(filterOrder))
//      }
//      //SI TENGO TODOS
//      else if(filters.length>0 && filterOrder.length>0 && filterBrand.length>0){
//       dispatch(cleanFilterPrice())
//       dispatch(filterBrands(filterBrand))
//       dispatch(filterCategories(filters))
//       dispatch(orderedByPrice(filterOrder))
//      }
//      else{
//        dispatch(cleanFilterPrice())
//        dispatch(getAllProducts())
//      }

//   }



 //--------------HANDLES FILTERS--------------


  function handleFilterCat(e) {
    e.preventDefault();
    setSearchParams({[e.target.name]:e.target.value})
    dispatch(filterCategory(categoryQuery))
  }

  function handleFilterBrand(e) {
    e.preventDefault();
    setSearchParams({category:categoryQuery, [e.target.name]:e.target.value})
    dispatch(filterBran(categoryQuery,brandQuery));
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
    <aside className="w-1/4 md:w-64 sm:text-xs flex flex-col justify-around border-r-2 border-primary text-lg md:text-sm text-center text-primary-400 ">
      {/*------------------ CONTENEDOR DE LOS FILTROS  ------------------   /*/}

       
   
 
      {/*------------------ CATEGORIES  ------------------   /*/}
      <div className="flex flex-col pb-4">
        <h4 className="text-xl text-yellow-300 pb-4">Categories</h4>
        <ul>
          <li className="flex flex-col   ">
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
      </div>
      {/*------------------ BRANDS ------------------   /*/}
      <div className="flex flex-col  pl-4 pt-4">
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
