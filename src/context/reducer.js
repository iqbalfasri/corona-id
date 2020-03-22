import { FETCH_DATA_ID, FETCH_DATA_GLOBAL } from "./types";

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_DATA_ID:
            return {
                ...state,
                dataId: action.payload
            };
        case FETCH_DATA_GLOBAL:
            return {
                ...state,
                dataGlobal: action.payload
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: false
            };
        case "FETCH_CLUSTER":
            return {
                ...state,
                cluster: action.payload
            };
        case "SET_CLUSTER_JAKARTA":
            return {
                ...state,
                clusterJakarta: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
