import React from "react";
import { useSpring, animated } from "react-spring";

const MessageError = ({
  children,
  isShow,
}) => {
  const propsAnimated = useSpring({
    delay: 50,
    from: {
      opacity: isShow ? 0 : 1,
    },
    to: async (next, cancel) => {
      await next({
        opacity: isShow ? 1 : 0,
      });
    },
  });

  return <animated.span style={propsAnimated}>{children}</animated.span>;
};

export default React.memo(MessageError);
