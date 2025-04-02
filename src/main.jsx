import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import apiSlice from "./store/apiSlice.js";

store.dispatch(apiSlice.endpoints.getAllTodos.initiate());

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
