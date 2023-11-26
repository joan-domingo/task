import { PhotoGalleryView } from "../types/photoGallery";
import "./PhotoGallerySwitch.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface Props {
  selected: PhotoGalleryView;
  onChange: (layout: PhotoGalleryView) => void;
}

const PhotoGallerySwitch = ({ selected, onChange }: Props) => {
  const handleSelectedView = (
    _event: React.MouseEvent<HTMLElement>,
    newView: PhotoGalleryView
  ) => {
    onChange(newView);
  };

  return (
    <div className="photo-gallery-switch__container">
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleSelectedView}
        aria-label="select photo gallery view"
        orientation="vertical"
      >
        <ToggleButton
          value={PhotoGalleryView.Cards}
          aria-label={PhotoGalleryView.Cards}
        >
          <ArtTrackIcon />
        </ToggleButton>
        <ToggleButton
          value={PhotoGalleryView.Carousel}
          aria-label={PhotoGalleryView.Carousel}
        >
          <ViewCarouselIcon />
        </ToggleButton>
        <ToggleButton
          value={PhotoGalleryView.Grid}
          aria-label={PhotoGalleryView.Grid}
        >
          <GridViewIcon />
        </ToggleButton>
        <ToggleButton
          value={PhotoGalleryView.List}
          aria-label={PhotoGalleryView.List}
        >
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default PhotoGallerySwitch;
