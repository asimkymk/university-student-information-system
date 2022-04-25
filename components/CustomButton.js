import React, { Component } from "react";
//WILL DELETE
class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      callback: props.callback,
      id: props.id,
      className: props.className,
      style: props.style,
      value: props.value,
      icon: props.icon,
    };
  }

  render() {
    return (
      <button
        type={this.state.type}
        className={this.state.className}
        style={this.state.style}
        id={this.state.id}
      >
        <i className={this.state.icon}></i>
        &nbsp;{this.state.value}
      </button>
    );
  }
}
export default CustomButton;
