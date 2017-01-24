import React from 'react';

export default class Dungeon extends React.Component {
  render() {
    return (
      <div>
        {this.props.map.map(row => <div>{row}</div>)}
      </div>
    );
  }
}

Dungeon.propTypes = {
  map: React.PropTypes.array.isRequired
};
