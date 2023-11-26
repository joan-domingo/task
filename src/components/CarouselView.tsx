import { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";
import "./CarouselView.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CarouselView = () => {
  const data = useContext(DataContext);
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel-view__container">
      <div className="carousel-view">
        <div
          className="carousel-view__carousel-inner"
          style={{ backgroundImage: `url(${data[currImg].url})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center" />
          <div
            className="right"
            onClick={() => {
              currImg < data.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselView;
