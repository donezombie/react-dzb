import React, { Component } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';

const withErrorBoundary = (BaseComponent) => {
  return class ComponentWrapped extends Component {
    render() {
      return (
        <ErrorBoundary>
          <BaseComponent {...this.props} />
        </ErrorBoundary>
      );
    }
  };
};

export default withErrorBoundary;
