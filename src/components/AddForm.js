import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const AddForm = ({ content, onSubmit, children }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content) {
      setValue(content);
    }
  }, [content]);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    onSubmit(value);
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setValue(value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <form className="ui form">
      <div className="field">
        <textarea onChange={handleChange} value={value}></textarea>
      </div>
      <div
        className="ui green labeled submit icon button"
        onClick={(evt) => handleSubmit(evt)}
      >
        <i className="hand pointer blue icon"></i> Опубликовать
      </div>
      {children}
    </form>
  );
};

export default AddForm;
