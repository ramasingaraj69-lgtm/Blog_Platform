import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";

import { store } from "./redux/store";

import { BlogProvider } from "./context/BlogContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <Provider store={store}>

      <BlogProvider>

        <App />

      </BlogProvider>

    </Provider>

  </React.StrictMode>
);
