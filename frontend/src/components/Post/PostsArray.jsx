const PostsArray = ({posts}) => {
    const postsToShow = posts.filter(post => {
        
    })

return (

)

  return posts
    .filter((post) => {
      if (selectedTopic) {
        return post.topic === selectedTopic;
      } else {
        return true;
      }
    })
    .map((post) => (
      <PostCard
        key={post.id}
        post={post}
        onDeleteClick={() => deletePost(post)}
      />
    ));
};
