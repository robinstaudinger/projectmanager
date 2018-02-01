import React, { Component } from 'react';
import SkillItem from './SkillItem';

class Skills extends Component {

  render() {
    let skillItems = [];
    let w = 400;
    let h = 400;
    let cx = w/2;
    let cy = h/2;
    var x, y, angle, idStyle;
    for (var i = 0; i < this.props.skills.length; i++){
      angle = i * 2 * Math.PI / this.props.skills.length;
      x = cx + 110.0 * Math.cos(angle);
      y = (cy + 110.0 * Math.sin(angle));
      idStyle = {
        position: 'absolute',
        top: y,
        left: x,
      };
      skillItems.push(<SkillItem key={this.props.skills[i]} skill={this.props.skills[i]} idStyle={idStyle} top={y} />);
    }
    // if(this.props.skills){
    //   skillItems = this.props.skills.map(skill =>{
    //     console.log(skill);
    //     return (
    //       <SkillItem key={skill} skill={skill} />
    //     );
    // });
    return (
      <div className="Skills" style = {{position: 'relative'}}>
      <h3> Skills </h3><br/>
        {skillItems}
      </div>
    );
  }
}

export default Skills;
