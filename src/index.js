import { h, Component } from "preact";
import { Router } from "preact-router";

import Home from "./routes/home";
import "./style/index.scss";

import Store from "./context/store";

class App extends Component {
    handleRoute = e => {
        this.currentUrl = e.url;
    };

    render() {
        return (
            <Store>
                <div id="app">
                    <Router onChange={this.handleRoute}>
                        <Home path="/" />
                    </Router>
                </div>
            </Store>
        );
    }
}

export default App;
