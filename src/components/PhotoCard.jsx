const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
      />

      <div className="photo-info">
        <h3>{photo.title}</h3>

        <p>
          <strong>Photo ID:</strong> {photo.id}
        </p>

        <p>
          <strong>Album ID:</strong> {photo.albumId}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;