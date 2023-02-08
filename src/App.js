import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import { fetchVideoRequest } from "./store/videos/actions";
import * as selectors from "./store/videos/selectors";

// const API_KEY = "AIzaSyDHs5nkssYDGIm41I40nj2ZyinKTJaLDgo";
// const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM"; //client

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

  console.log('useSelector1', videos);

  // useEffect(() => {
  //   setSelectedVideo(videosInitial);
  // }, []);

  useEffect(() => {
    dispatch(fetchVideoRequest('live'));
  }, [dispatch]);


  const videoSearchV = _.debounce((term) => {
    fetchVideoRequest(term);
  }, 300);

  return (
    <div>
      <SearchBar onSearchTermChange={videoSearchV} />
      <VideoDetail video={selectedVideoState ? selectedVideoState : selectedVideo } />
      <VideoList
        onVideoSelect={(selectedVideo) => setSelectedVideoState(selectedVideo)}
        videos={videos}
      />
    </div>
  );
}

export default App;
