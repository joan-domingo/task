import { useState } from "react";
import CarouselView from "./CarouselView";
import PhotoGallerySwitch from "./PhotoGallerySwitch";
import { PhotoGalleryView } from "../types/photoGallery";
import GridView from "./GridView";
import ListView from "./ListView";
import CardView from "./CardView";

const PhotoGallery = () => {
  const [photoGalleryType, setPhotoGalleryType] = useState<PhotoGalleryView>(
    PhotoGalleryView.Cards
  );

  const handleGalleryChange = (photoGalleryType: PhotoGalleryView) => {
    setPhotoGalleryType(photoGalleryType);
  };

  const PhotoGalleryLayout = () => {
    switch (photoGalleryType) {
      case PhotoGalleryView.Carousel:
        return <CarouselView />;
      case PhotoGalleryView.Cards:
        return <CardView />;
      case PhotoGalleryView.Grid:
        return <GridView />;
      case PhotoGalleryView.List:
        return <ListView />;
      default:
        throw new Error("Invalid photo gallery type");
    }
  };

  return (
    <div data-testid="photo-gallery">
      <PhotoGallerySwitch
        selected={photoGalleryType}
        onChange={handleGalleryChange}
      />
      <PhotoGalleryLayout />
    </div>
  );
};

export default PhotoGallery;
