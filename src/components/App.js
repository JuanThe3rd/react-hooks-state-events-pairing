import React, {useState} from "react"
import video from "../data/video";
import VideoContent from "./VideoContent"
import Comments from "./Comments"

function App() {
  const [isHidden, setIsHidden] = useState(false);

  function handleHideBtn(){
    setIsHidden(!isHidden);
  }

  return (
    <div className="App">
      <VideoContent videoContent={video}/>
      <button onClick={handleHideBtn}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
      <div className="content-divider"></div>
      <Comments comments={video.comments} isHidden={isHidden}/>
    </div>
  );
}

export default App;
