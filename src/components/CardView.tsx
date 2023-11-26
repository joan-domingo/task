import ImageList from "@mui/material/ImageList";
import { useContext } from "react";
import Card from "@mui/material/Card";
import DataContext from "../contexts/DataContext";
import PhotoImg from "./PhotoImg";
import "./CardView.scss";

const CardView = () => {
  const data = useContext(DataContext);

  return (
    <ImageList data-testid="card-view">
      {data.map((photo) => (
        <li key={photo.id} className="card-view__card">
          <Card>
            <PhotoImg photo={photo} className="card-view__photo" />
            <div className="card-view__text-layout">
              <h1>{photo.title}</h1>
              <div>{photo.description}</div>
            </div>
          </Card>
        </li>
      ))}
    </ImageList>
  );
};

export default CardView;
