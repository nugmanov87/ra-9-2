import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import PostItem from "./PostItem";
import AddForm from "./AddForm";
import Page404 from "./Page404";
import Loader from "./Loader";

class ViewPost extends React.Component {
  state = {
    post: null,
    deleted: false,
    editing: false,
    loading: true,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const id = Number(params.id);
    axios.get(`${process.env.REACT_APP_POSTS_URL}/posts`).then((response) => {
      const post = response.data.find((item) => item.id === id);
      this.setState({ post, loading: false });
    });
  }

  toggleEditing = () => {
    this.setState((prevState) => ({
      editing: !prevState.editing,
    }));
  };

  handleDelete = () => {
    this.setState({ loading: true });
    const {
      match: { params },
    } = this.props;

    axios
      .delete(`${process.env.REACT_APP_POSTS_URL}/posts/${params.id}`)
      .then(() => this.setState({ deleted: true }))
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleEdit = (value) => {
    axios
      .post(`${process.env.REACT_APP_POSTS_URL}/posts`, {
        id: this.state.post.id,
        content: value,
      })
      .then(() => this.props.history.go(0))
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const { post, deleted, editing, loading } = this.state;

    if (deleted) {
      return <Redirect to="/" />;
    }

    if (editing) {
      return (
        <AddForm content={post.content} onSubmit={this.handleEdit}>
          <div
            className="ui red button"
            onClick={() => this.toggleEditing()}
          >
            Отменить
          </div>
        </AddForm>
      );
    }

    if (post === undefined) {
      return <Page404 />;
    }

    if (loading) {
      return <Loader />;
    }

    console.log(this.state);
    return (
      <div className="ui comments">
        <PostItem {...post}>
          <button className="ui brown basic button" onClick={this.toggleEditing}>
            Изменить
          </button>
          <button className="ui red basic button" onClick={this.handleDelete}>
            Удалить
          </button>
        </PostItem>
      </div>
    );
  }
}

export default ViewPost;
