import React from "react"
import LikeButton from "./LikeButton"

function VideoContent({videoContent}){
    const likeCounts = {likes: videoContent.upvotes, dislikes: videoContent.downvotes}
    
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={videoContent.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{videoContent.title}</h1>
            <p>{videoContent.views} | Uploaded {videoContent.createdAt}</p>
            <LikeButton isLike={true} likeCounts={likeCounts}/>
            <LikeButton isLike={false} likeCounts={likeCounts}/>
        </div>
    )
}

export default VideoContent;