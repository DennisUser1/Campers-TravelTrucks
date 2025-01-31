import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "@/components";
import './App.css';

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("@/pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("@/pages/DetailsPage/DetailsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));
const Features = lazy(() => import("@/components/Features/Features"));
const Reviews = lazy(() => import("@/components/Reviews/Reviews"));

function App() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
      <Routes>
      <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<DetailsPage />}>
              <Route index element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App;
