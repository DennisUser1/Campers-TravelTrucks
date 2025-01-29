import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("@/pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("@/pages/DetailsPage/DetailsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));

function App() {


  return (
    <>
      
    </>
  )
}

export default App
