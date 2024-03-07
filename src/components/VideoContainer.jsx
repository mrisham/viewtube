import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setvideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  if (!videos.length) return <ShimmerUI dummyDivlength={videos.length} />;
  return (
    <div className="flex flex-wrap justify-start">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
