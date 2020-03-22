import { h } from "preact";
import { useContext, useEffect } from "preact/hooks";
import axios from "axios";
import moment from "moment";

import { ENDPOINT } from "../../helpers/constant";

import { Context } from "../../context/store";
import { FETCH_DATA_ID } from "../../context/types";

function Home() {
    const [state, dispatch] = useContext(Context);
    const { dataId, loading } = state;
    useEffect(() => {
        // Change title
        document.title = "Data terkini Corona COVID-19 - Indonesia";

        // Fetch data
        getDataId();
        getCluster();
    }, []);

    const getDataId = async () => {
        const fetch = await axios.get(`${ENDPOINT}`);
        const { data } = await fetch;
        dispatch({ type: FETCH_DATA_ID, payload: data });
        dispatch({ type: "SET_LOADING" });
    };

    const getCluster = async () => {
        const fetch = await axios.get(`${ENDPOINT}/kasus`);
        const { data } = await fetch;
        dispatch({ type: "FETCH_CLUSTER", payload: data.data.nodes });
        dispatch({ type: "SET_LOADING" });
    };

    // Cluster
    const { cluster } = state;
    cluster.map((clust, index) => {
        const clustJakarta = clust.klasterid == 31;
        if (clustJakarta) {
            console.log(clust)
        }
    });

    return (
        <div className="container mt-5">
            <h1 className="text-center text-bold">COVID-19 Indonesia</h1>
            <p className="text-center">
                Update terakhir{" "}
                {moment(dataId.lastUpdate).format("DD MMM YYYY hh:mm")}
            </p>
            {/* Card */}
            <div className="mt-5">
                {console.log(state)}
                <h3 className="text-med">Data Terkini di Indonesia</h3>
                <div className="row mt-4">
                    <div className="col-md-3 col-6 text-center mb-3">
                        <div className="card-content">
                            <span className="card-content--med-text">
                                Terkonfirmasi
                            </span>
                            <span className="card-content--lar-text">
                                {dataId.jumlahKasus}
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center mb-3">
                        <div className="card-content">
                            <span className="card-content--med-text text-blue">
                                Dalam Perawatan
                            </span>
                            <span className="card-content--lar-text">
                                {dataId.perawatan}
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="card-content">
                            <span className="card-content--med-text text-green">
                                Sembuh
                            </span>
                            <span className="card-content--lar-text">
                                {dataId.sembuh}
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <div className="card-content">
                            <span className="card-content--med-text text-red">
                                Meninggal
                            </span>
                            <span className="card-content--lar-text">
                                {dataId.meninggal}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Card */}
        </div>
    );
}

export default Home;
