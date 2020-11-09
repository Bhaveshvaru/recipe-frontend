import React from "react";

const Posts =({posts})=>{

    return (
        
        <div>
            
            <ul className="list-group mb-4">
                {posts.map((post)=>{
                    <li key={posts.id} className="list-group-item">
                        {post.recipename}
                    </li>

                })}
            </ul>
        </div>
    )
}

export default Posts;