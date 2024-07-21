import React, { useState, createContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Products from "../src/components/Products/Products.jsx";
import Header from "./components/Header/Header.jsx";
export const AppContext = createContext({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products/:phonemodel",
    element: <Products />,
  },
]);

function App() {
  const [searchPhones, setSearchPhones] = useState("");
  const [phones, setPhones] = useState([]);
  const [filteringPhones, setFilteringPhones] = useState([]);
  const [activeBrand, setActiveBrand] = useState("");
  const [activeStore, setActiveStore] = useState("");

  const fetchPhones = async () => {
    try {
      const response = await fetch(
        "https://smartphones-8fe7e-default-rtdb.europe-west1.firebasedatabase.app/phones.json",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      console.log(result);
      setPhones(result);
      setFilteringPhones(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div className="app">
      <AppContext.Provider
        value={{
          searchPhones,
          setSearchPhones,
          phones,
          setFilteringPhones,
          activeBrand,
          setActiveBrand,
          filteringPhones,
          activeStore,
          setActiveStore,
        }}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
