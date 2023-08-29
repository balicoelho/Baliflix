import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./VideoCarousel.module.css";
import VideoCard from "../VideoCard";

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function VideoCarousel({ categoria }) {
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
