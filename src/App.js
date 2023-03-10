import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import SearchBar from "./components/search_bar.tsx";
import VideoList from "./components/video_list.tsx";
import VideoDetail from "./components/video_detail.tsx";
import { fetchVideoRequest } from "./store/videos/actions";
import * as selectors from "./store/videos/selectors";
import {fetchCommentsRequest} from './store/comments/actions';
import * as commentsSelectors from "./store/comments/selectors";
import Container from '@mui/material/Container';

function App() {
  const dispatch = useDispatch();

  // fetched all the redux saved videos
  const {
    selectedVideo, videos, error
  } = useSelector(
    state => ({
      selectedVideo: selectors.getVideosSelector(state).videos[0],
      videos: selectors.getVideosSelector(state).videos,
      error: selectors.getErrorSelector(state)
    }),
  );
  const [selectedVideoState, setSelectedVideoState] = useState(selectedVideo);

  useEffect(() => {
    dispatch(fetchVideoRequest('Liverpool'));
  }, [dispatch]);


  const videoSearchV = _.debounce((term) => {
    dispatch(fetchVideoRequest(term));
  }, 300);

  useEffect(() => {
    const videoID = selectedVideoState ? selectedVideoState.id.videoId : selectedVideo?.id.videoId;
    dispatch(fetchCommentsRequest(videoID));
  }, [dispatch, selectedVideoState,  selectedVideo]);

  const {
    comments
  } = useSelector(
    state => ({
      comments: commentsSelectors.getCommentsSelector(state),
    }),
  );

  if(error) {
    return <div>{error}</div>;
  }


  return (
    <Container>
      <SearchBar onSearchTermChange={videoSearchV} />
      <VideoDetail comments={comments} dispatch={dispatch} video={selectedVideoState ? selectedVideoState : selectedVideo } />
      <VideoList
        onVideoSelect={(selectedVideo) => setSelectedVideoState(selectedVideo)}
        videos={videos}
      />
    </Container>
  );
}

export default App;
