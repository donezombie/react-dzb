/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const propTypes = {
  onScrollEnd: PropTypes.func,
  marginTop: PropTypes.number,
};

const ScrollWrapper = ({ children, onScrollEnd, marginTop = 0 }) => {
  //! State
  const { ref, inView } = useInView();

  //! Function
  useEffect(() => {
    if (inView) {
      onScrollEnd && onScrollEnd();
    }
  }, [inView]);

  //! Render
  return (
    <Fragment>
      {children}
      <div
        ref={ref}
        style={{
          display: 'flex',
          visibility: 'hidden',
          height: '1px',
          transform: `translateY(${marginTop}px)`,
          zIndex: -2,
        }}
      />
    </Fragment>
  );
};

ScrollWrapper.propTypes = propTypes;
export default ScrollWrapper;
