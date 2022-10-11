import "./App.css";
import Search from "./component/search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${searchData}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then(async (response) => {
        const weatherResponse = await response.json();
        console.log(weatherResponse);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
