import React from "react";
import moment from "moment";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-2 cursor-pointer">
      <img className="w-full" src={thumbnails.high.url} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src={thumbnails.medium.url}
            alt={channelTitle}
          />
          <div className="text-gray-700 text-base">{channelTitle}</div>
        </div>
        <div className="text-gray-600 text-sm mt-2">
          <span>{formatNumber(viewCount)} views views</span> •{" "}
          <span>{moment(publishedAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
