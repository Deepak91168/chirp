"use client";
import Drawer from "./components/sidebar/Drawer";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function Home() {
  return (
    <>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
      <Drawer />
      {/* </PersistGate>
      </Provider> */}
    </>
  );
}
