import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Reducer/store.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// import store from "./Reducer/store";
// import { Provider } from "react-redux";

// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById("root"),
// );
