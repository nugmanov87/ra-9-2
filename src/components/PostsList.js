import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostItem from "./PostItem";
import Loader from "./Loader";

class PostsList extends React.Component {
  state = {
    posts: [],
    loading: true,
  };
  componentDidMount() {
    this.getPosts();
  }
  setData = (posts) => {
    this.setState({ posts, loading: false });
  };

  getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_POSTS_URL}/posts`)
      .then((response) => this.setData(response.data));
  };

  render() {
    const { posts, loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="ui comments">
        {posts.map((post) => (
          <PostItem key={post.id} {...post}>
            <Link to={`/posts/${post.id}`} className="ui teal tag label">
              Побробнее
            </Link>
          </PostItem>
        ))}
      </div>
    );
  }
}

export default PostsList;
