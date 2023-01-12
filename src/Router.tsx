import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage } from "./pages/home";
import { ImagePage } from "./pages/singleImage";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/breed/:breedName" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/breed/:breedName/image/:imageId"
          element={<ImagePage />}
        />
      </Route>
    </Routes>
  );
};
