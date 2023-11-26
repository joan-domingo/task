import ImageList from "@mui/material/ImageList";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import PhotoImg from "./PhotoImg";
import "./GridView.scss";

const GridView = () => {
  const data = useContext(DataContext);

  return (
    <ImageList data-testid="grid-view">
      {data.map((photo) => {
        return (
          <li key={photo.id} className="grid-view__item">
            <PhotoImg photo={photo} className="grid-view__image" />
          </li>
        );
      })}
    </ImageList>
  );
};

export default GridView;
