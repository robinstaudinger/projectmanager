import React, { Component } from 'react';

class SkillItem extends Component {
  render() {
    return (
      <li key={this.props.skill} className="Skill">
      <strong>{this.props.skill}</strong>
      </li>
    );
  }
}

export default SkillItem;
