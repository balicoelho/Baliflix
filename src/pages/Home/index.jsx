import Banner from "../../components/Banner";
import VideoCarousel from "../../components/Carrousel/VideoCarousel";
import TitleCategory from "../../components/TitleCategory";
import { videos, categories } from "../../database/db.js";

export default function Home() {
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
