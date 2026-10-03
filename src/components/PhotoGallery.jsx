import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.slice(0, 100));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading photos...</p>;
  }

  return (
    <main className="gallery-section">
      <div className="container">
        <h2>Photo Gallery</h2>

        <div className="photo-grid">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PhotoGallery;