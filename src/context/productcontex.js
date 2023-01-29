import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
const API_C="https://api.escuelajs.co/api/v1/categories";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  isCloading:false,
  Cat_p:[],
  Cat_single:{},
  isScloading:false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      console.log(singleProduct)
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  // Cat API call
  const getCat = async (url) => {
    dispatch({ type: "SET_C_LOADING" });
    try {
      const res = await axios.get(url);
      const Cat_p = await res.data;
      dispatch({ type: "SET_C_API_DATA", payload: Cat_p });
    } catch (error) {
      dispatch({ type: "API_C_ERROR" });
    }
  };
  const getSinglecat = async (url) => {
    dispatch({ type: "SET_CAT_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const Cat_single = await res.data;
      dispatch({ type: "SET_CAT_SINGLE_PRODUCT", payload: Cat_single });
      console.log(Cat_single)
    } catch (error) {
      dispatch({ type: "SET_CAT_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
    getCat(API_C);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct,getCat,getSinglecat}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };