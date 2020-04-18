import React from "react";
import faker from "faker";
import moment from "moment";

const PostItem = ({ content, created, children }) => {
  return (
    <div className="ui centered card">
      <div className="ui medium circular image">
        <img src={faker.image.avatar()} alt="avatar" />
      </div>
      <div className="content">
        <span href="#" className="ui red horizontal label">
          {faker.name.firstName()}
        </span>
        <div className="metadata">
          <span className="ui purple horizontal label">
            {moment(created).format("DD.MM.YYYY HH:mm:ss")}
          </span>
        </div>
        <div className="text">{content}</div>
        <div className="actions">{children}</div>
      </div>
    </div>
  );
};

export default PostItem;
