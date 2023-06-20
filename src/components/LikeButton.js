import React, {useState} from "react"

function LikeButton({isLike, likeCounts}){
    const [likes, setLikes] = useState(likeCounts)

    function handleLikeBtn(){
        if(isLike){
            setLikes(() => ({...likes, likes: likeCounts.likes+1}))
        } else {
            setLikes(() => ({...likes, dislikes: likeCounts.dislikes+1}))
        }
    }

    return (
        <button className="like-btn" onClick={handleLikeBtn}>
            {isLike ? `${likes.likes} 👍` : `${likes.dislikes} 👎`}
        </button>
    )
}

export default LikeButton; 