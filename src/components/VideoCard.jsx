const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  return (
    <div className="p-2 m-2 w-72 ">
      <img
        className="rounded-lg hover:drop-shadow-xl"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul className="flex justify-start items-start">
        <img
          className="rounded-full w-7 h-7 mt-2 mr-2"
          alt="thumbnail"
          src={thumbnails?.default?.url}
        />
        <div>
          <li className="font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5">
            {title}
          </li>
          <li className="text-gray-500 text-[13px]">{channelTitle}</li>
          <li className="text-gray-500 text-[13px]">
            {statistics.viewCount} views{" "}
            <span className="font-bold text-xl m-1">·</span>
            {(
              Math.abs(new Date(publishedAt) - new Date()) /
              (60 * 60 * 24 * 1000)
            ).toFixed(1)}
            <span className="ml-1">days ago</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
