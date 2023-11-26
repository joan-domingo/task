import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading__container" data-testid="loading">
      <div className="loading__spinner"></div>
    </div>
  );
};

export default Loading;
