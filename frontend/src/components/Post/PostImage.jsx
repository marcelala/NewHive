import Cactus from "../../assets/images/cactus.jpg";
import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import PostApi from "../../api/PostApi";


export default function PostImage({ post,user}) {

    const [image, setImage] = useState([]);



return(

      <div className="postCard-image">
        <p>{post.image}</p>
      </div>


)


}
