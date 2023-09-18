import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import VideoCarousel from "../../components/Carrousel/VideoCarousel";
import TitleCategory from "../../components/TitleCategory";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [videochosen, setVideoChosen] = useState([]);
  const [categoryColorBanner, setCategoryColorBanner] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://my-json-server.typicode.com/balicoelho/baliflix-api/videos"
      ).then((resposta) => resposta.json()),
      fetch(
        "https://my-json-server.typicode.com/balicoelho/baliflix-api/categories"
      ).then((resposta) => resposta.json()),
    ]).then(([videosDados, categoriesDados]) => {
      setVideos(videosDados);
      setVideoChosen(videosDados[0]);
      setCategories(categoriesDados);
      setCategoryColorBanner(
        categoriesDados.find(
          (category) => category.categoryName === videosDados[0].categoryName
        ).categoryColor
      );
    });
  }, []);

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
