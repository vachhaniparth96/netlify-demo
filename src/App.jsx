import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [gifs, setGifs] = useState([]);
  function getGifData() {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=minions&limit=10&rating=G&lang=en`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("We have data!", res.data);
        setGifs(res.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getGifData();
  }, []);

  const loaded = () => {
    return gifs.map((gif, idx) => (
      <div key="idx">
        <p>{gif.title}</p>
        <img src={gif.images["original"]["url"]} alt={gif.embed_url} />
      </div>
    ));
  };

  return gifs ? loaded() : <h1>Loading...</h1>;
}

export default App;