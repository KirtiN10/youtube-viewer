import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import SearchBar from "./components/search_bar.tsx";
import VideoList from "./components/video_list.tsx";
import VideoDetail from "./components/video_detail.tsx";
import { fetchVideoRequest } from "./store/videos/actions";
import * as selectors from "./store/videos/selectors";

function App() {
  const dispatch = useDispatch();
  const {
    selectedVideo, videos
  } = useSelector(
    state => ({
      selectedVideo: selectors.getVideosSelector(state).videos[0],
      videos: selectors.getVideosSelector(state).videos,
    }),
  );

  const [selectedVideoState, setSelectedVideoState] = useState(selectedVideo);

  useEffect(() => {
    dispatch(fetchVideoRequest('Liverpool'));
  }, [dispatch]);


  const videoSearchV = _.debounce((term) => {
    dispatch(fetchVideoRequest(term));
  }, 300);

  return (
    <div>
      <SearchBar onSearchTermChange={videoSearchV} />
      <VideoDetail dispatch={dispatch} video={selectedVideoState ? selectedVideoState : selectedVideo } />
      <VideoList
        onVideoSelect={(selectedVideo) => setSelectedVideoState(selectedVideo)}
        videos={videos}
      />
    </div>
  );
}

export default App;
