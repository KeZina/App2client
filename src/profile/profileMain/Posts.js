import React, {useState} from 'react';

const Posts = ({posts}) => {
    const [visible, setVisible] = useState(false);

    const checkVisibility = () => visible ? "Hide posts" : "Show posts";

    const postsItem = new Array(posts).fill(null).map((item) => {
            return(
                <div className = "content" >
                    <h2 className = "titles">
                        Example Title of the Post
                    </h2>
                    <p>
                        Body of the Post
                    </p>
                </div>
            )
        }
    )

    return(
        <div className = "posts">
            <input type = "button" className = "button" value = {checkVisibility()} onClick = {() => setVisible(!visible)} />
            {visible && postsItem}
        </div>
    )
}

export default Posts;