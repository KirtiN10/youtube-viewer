import React from "react";
import { VideoProps } from "../store/videos/types";
import {fetchCommentsRequest} from '../store/comments/actions';
interface Props{
video:VideoProps
}
const VideoDetail = ({ video }: Props) => {

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   dispatch(fetchCommentsRequest(videoId));
  // }, [dispatch, videoId]);
  // const {
  //   comments
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // } = useSelector(
  //   state => ({
  //     comments: selectors.getCommentsSelector(state),
  //   }),
  // );
  // console.log('commentscommentscommentscomments', comments);


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
      {/* {
        comments.comments.map((comment: any) => {
          const commentSingle = comment.snippet.topLevelComment.snippet;
          return (
            <div>
              <p><b>{commentSingle.authorDisplayName}:</b> {commentSingle.textOriginal}</p>
              &emsp;{comment.snippet.replies.map(() => {
                return <></>
              } )}
            </div>
          );
        })
      } */}
    </div>
  );
};

export default VideoDetail;
