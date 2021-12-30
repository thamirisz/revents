import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { verifyAuth } from "../../features/auth/authActions";
import { createBrowserHistory } from "history";
import rootReducer from "./rootReducer";

export const history = createBrowserHistory();

export function configureStore() {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.dispatch(verifyAuth());

  return store;
}
