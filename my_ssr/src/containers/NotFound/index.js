import React, { Component } from 'react';

class Notound extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    staticContext && (staticContext.NotFound = true)
  }

  render() { 
    return (
      <div>
        <div>404</div>
      </div>
    );
  }
}
 
export default Notound;