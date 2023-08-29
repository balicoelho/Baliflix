import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import VideoCarousel from "../../components/Carrousel/VideoCarousel";
import TitleCategory from "../../components/TitleCategory";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [categories, setCatgories] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const url = await fetch(
          "https://my-json-server.typicode.com/balicoelho/baliflix-api/videos"
        );
        const videos = await url.json();
        setVideos(videos);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchVideos();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const url = await fetch(
          "https://my-json-server.typicode.com/balicoelho/baliflix-api/categories"
        );
        const categories = await url.json();
        setCatgories(categories);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchCategories();
  }, []);

  const videochosen = videos[0];
  const categoryColorBanner = categories.find(
    (category) => category.categoryName === videochosen.categoryName
  ).categoryColor;

  return (
    <>
      <Banner {...videochosen} categoryColor={categoryColorBanner} />

      <VideoCarousel categoria={videochosen.categoryName} />

      {categories.map((category) => {
        const videoExist = videos.some(
          (video) => video.categoryName === category.categoryName
        );
        return videoExist ? (
          category.categoryName !== videochosen.categoryName ? (
            <div key={category.id}>
              <TitleCategory
                categoryColor={category.categoryColor}
                titleCategory={category.categoryDisplayName}
                categoryDescription={category.categoryDescription}
              />
              <VideoCarousel categoria={category.categoryName} />
            </div>
          ) : null
        ) : null;
      })}
    </>
  );
}
