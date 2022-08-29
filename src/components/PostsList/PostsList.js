import React from "react";
import "./PostsList.css"
import PostItem from "../PostItem/PostItem"; 

const PostsList = () =>  {
     const [item , setItem] = React.useState([])
     const getItems = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then((response) => response.json())
          .then((json) => setItem(json));
      };
      React.useEffect(() => {
        getItems();
      }, []);

      return (
        <div className="container">
            <div className="header">
                <h3>POSTS LIST</h3>
            </div>

            <div className="body">
                <h4>POST ITEM</h4>
                {item.map((item) => {
                    return (
                        <PostItem 
                        description={item.body}
                        title={item.title}
                        key={item.id} 
                        />
                    )
                })}
            </div>
        </div>
      )
    
}
export default PostsList;