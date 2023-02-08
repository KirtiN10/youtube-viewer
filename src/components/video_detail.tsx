/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { VideoProps } from "../store/videos/types";

interface Props{
video:VideoProps
comments: any
}
const VideoDetail = ({ video, comments }: Props) => {

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  
  
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={video.snippet.title}
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
      {
        comments.comments.map((comment: any) => {
          const commentSingle = comment?.snippet?.topLevelComment?.snippet;
          return (
            <div className="details">
              <p><b>{commentSingle?.authorDisplayName}:</b> {commentSingle?.textOriginal}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default VideoDetail;

