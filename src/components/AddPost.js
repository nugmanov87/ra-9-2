import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import AddForm from "./AddForm";

const AddPost = () => {
  const [saved, setSaved] = useState(false);

  const handleSubmit = (value) => {
    axios
      .post(`${process.env.REACT_APP_POSTS_URL}/posts`, {
        id: 0,
        content: value,
      })
      .then(() => setSaved(true))
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (saved) {
    return <Redirect to="/" />;
  }

  return <AddForm onSubmit={handleSubmit} />;
};

export default AddPost;
