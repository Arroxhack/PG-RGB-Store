import axios from axios;
import {GET_ALL_COMPONENTS} from "../types/index";


const PATH = "http://localhost:3001"


export function getAllComponents(){
    return async function(dispatch){
        try{
            let allComponents = await axios.get(`${PATH}/components`) //components por ahora
            let allComponentsData = allComponents.data
            return dispatch({
                type: GET_ALL_COMPONENTS,
                payload: allComponentsData
            })
        } 
        catch(error){
            console.log(error)
        }
    }
}