import { Photo } from "../types/data";

interface Props {
  photo: Photo;
  className?: string;
}

const PhotoImg = ({ photo, className }: Props) => {
  return (
    <img
      srcSet={photo.url}
      src={photo.url}
      alt={photo.title}
      className={className}
    />
  );
};

export default PhotoImg;
