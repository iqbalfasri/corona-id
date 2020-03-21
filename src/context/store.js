import { h, createContext } from "preact";
import { useReducer } from "preact/hooks";
import reducer from "./reducer";

const initialState = {
    data: [],
    error: null
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider children={children} value={[state, dispatch]} />;
};

export const Context = createContext(initialState);
export default Store;
