import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import "./ListView.scss";
import Card from "@mui/material/Card";
import PhotoImg from "./PhotoImg";

const ListView = () => {
  const data = useContext(DataContext);

  return (
    <ul className="list-view__container" data-testid="list-view">
      {data.map((photo) => (
        <li key={photo.id} className="list-view__row">
          <Card sx={{ display: "flex" }}>
            <PhotoImg photo={photo} className="list-view__photo" />
            <div className="list-view__row__text-layout">
              <h1>{photo.title}</h1>
              <div>{photo.description}</div>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
