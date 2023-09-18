import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./VideoCarousel.module.css";
import VideoCard from "../VideoCard";

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function VideoCarousel({ categoria }) {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

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
      setCategories(categoriesDados);
    });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className={styles.container}
    >
      {videos.map((video) => {
        if (video.categoryName === categoria) {
          return (
            <VideoCard
              key={video.id}
              categoryColor={
                categories.find(
                  (category) => category.categoryName === categoria
                ).categoryColor
              }
              videoCover={video.videoImgLink}
              videoLink={video.videoLink}
            />
          );
        }
      })}
    </Carousel>
  );
}
