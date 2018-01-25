import React, { Component } from 'react';
import SkillItem from './SkillItem';

class Skills extends Component {

  render() {
    let skillItems;
    if(this.props.skills){
      skillItems = this.props.skills.map(skill =>{
        console.log(skill);
        return (
          <SkillItem key={skill} skill={skill} />
        );
    });
    }
    return (
      <div className="Skills">
      <h3> Skills </h3><br/>
        {skillItems}
      </div>
    );
  }
}

export default Skills;
