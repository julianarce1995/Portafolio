"use client";

import { Provider } from "react-redux";
import store from "./store";
import LoadSpinner from "../components/LoadSpinner";
import Layout from "@/components/Layout";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <Layout>
        <LoadSpinner />
        {children}
      </Layout>
    </Provider>
  );
}
