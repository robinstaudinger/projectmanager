import React, { Component } from 'react';

class SkillItem extends Component {
  render() {
    return (
      <div key={this.props.skill} className={this.props.skill} style={this.props.idStyle} >
      <strong>{this.props.skill}</strong>
      </div>
    );
  }
}

export default SkillItem;
