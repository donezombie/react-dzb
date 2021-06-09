/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {};

const EachTodo = ({ item }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="each-todo">
      <img
        className="each-todo--image"
        src="https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png"
        alt="default-avatar"
      />
      <div className="each-todo--">
        <p>
          <span>ID:</span> {item.id}
        </p>
        <p>
          <span>Name:</span> {item.title}
        </p>
      </div>
    </div>
  );
};

EachTodo.propTypes = propTypes;
export default EachTodo;
