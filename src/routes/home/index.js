import { h } from "preact";
import { useContext, useEffect } from "preact/hooks";

import { Context } from "../../context/store";

function Home() {
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        console.log(state, "state ");
    }, []);

    return <h1>Corona Indonesia {JSON.stringify(state)}</h1>;
}

export default Home;
