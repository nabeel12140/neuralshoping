const ProductReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }

  // if (action.type === "API_ERROR") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };
  // }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
      // Cat API call
    case "SET_C_LOADING":
      return{
        ...state,
        isCloading:false,
      }
    case "SET_C_API_DATA":    
        return {
          ...state,
          isCloading: false,
          Cat_p: action.payload,
        };
    case "API_C_ERROR":
      return {
        ...state,
        isCloading: false,
        isError: true,
      };
    case "SET_CAT_SINGLE_LOADING":
      return{
        ...state,
        isScloading:false,
      }
      case "SET_CAT_SINGLE_PRODUCT":
        return {
          ...state,
          isScloading: false,
          Cat_single: action.payload,
        };
        case "SET_CAT_SINGLE_ERROR":
          return {
            ...state,
            isScloading: false,
            isError: true,
          };
    default:
      return state;
  }
};

export default ProductReducer;