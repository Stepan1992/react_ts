import React from "react";
import ReactDOM from "react-dom";
import App from "./src/app.js";

const rootId = document.getElementById("app-root");

ReactDOM.render(<App />, rootId);

if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept("./src/app.js", () => {
        const app = require("./src/app.js").default;
        ReactDOM.render(app, rootId);
    });
}