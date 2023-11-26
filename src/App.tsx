import "./App.scss";
import useFetchData from "./hooks/useFetchData";
import PhotoGallery from "./components/PhotoGallery";
import DataContext from "./contexts/DataContext";
import Loading from "./components/Loading";
import Error from "./components/Error";

const App = () => {
  const { data, loading, error } = useFetchData(
    "https://api.slingacademy.com/v1/sample-data/photos?limit=100"
  );

  return (
    <div className="App">
      {loading && <Loading />}
      {error && <Error message="Something went wrong!" />}
      {data && (
        <DataContext.Provider value={data}>
          <PhotoGallery />
        </DataContext.Provider>
      )}
    </div>
  );
};

export default App;
