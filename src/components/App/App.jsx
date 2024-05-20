import { useState, useEffect } from "react";
import axios from "axios";

import "../App/App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import fetchImagesColection from "../../fetchApi/images-api";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (queryValue) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchImagesColection(queryValue);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
    </>
  );
}

export default App;
