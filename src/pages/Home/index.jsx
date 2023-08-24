import Banner from "../../components/Banner";
import VideoCarousel from "../../components/Carrousel/VideoCarousel";
import TitleCategory from "../../components/TitleCategory";
import { videos, categories } from "../../database/db.json";

export default function Home() {
  const videoBanner = (id) => {
    const video = videos.filter((video) => video.id === id);
    return video;
  };

  const [videochosen] = videoBanner(1);

  const categoryName = categories.find((category) => {
    return category.categoryName === videochosen.categoryName;
  });

  return (
    <>
      {}

      <Banner
        {...videochosen}
        categoryColor={
          categories.find(
            (category) => category.categoryName === videochosen.categoryName
          ).categoryColor
        }
      />

      <VideoCarousel categoria={categoryName} />

      {categories.map((category) => {
        return category.categoryName !== categoryName ? (
          <div key={category.id}>
            <TitleCategory
              categoryColor={category.categoryColor}
              titleCategory={category.categoryDisplayName}
              categoryDescription={category.categoryDescription}
            />
            <VideoCarousel categoria={category.categoryName} />
          </div>
        ) : null;
      })}
    </>
  );
}
