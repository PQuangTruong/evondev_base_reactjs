import axios from "axios";
import React, { useEffect, useState } from "react";

const getRandomPhotos = async (page) => {
  // Make a request for a user with a given ID
  try {
    try {
      const response = await axios
        .get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  } finally { }
};
// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
  //useEffect(callback, [dependencies])

  // useEffect(function callback(){
  //     //side-effect
  // }, []);

  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  // console.log("outline");
  const handleLoadMorePhotos = async () => {
    console.log(nextPage)
    const images = await getRandomPhotos(nextPage);
    // concat operator
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  }

  useEffect(() => {
    //side-effect
    document.title = "Welcome to useEffect";
    // console.log("inline");
    handleLoadMorePhotos();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button className="inline-block px-8 py-4 bg-purple-500 text-white" onClick={handleLoadMorePhotos}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
