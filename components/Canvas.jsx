import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.code = null;
  }

  componentDidMount() {
    this.createContext();
  }

  componentWillUnmount() {
    this.code = null;
  }

  newChain() {
    const numbers = "123456789";
    const captcha = [];
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * numbers.length);
      if (captcha.indexOf(numbers[index]) === -1)
        captcha.push(numbers[index]);
      else i--;
    }
    return this.code = captcha.join(" ");
  }

  createContext() {
    this.context = this.canvasRef.current.getContext('2d');
    this.canvasRef.current.width = 150;
    this.canvasRef.current.height = 50;
    this.context.font = "30px Serif";
    this.context.fillStyle = "#e6e6e6";
    this.context.fillText(this.newChain(), 12, 35);
  }

  render() {
    const input = this.props.input.join(" ");
    if (input[0] !== undefined) {
      if (input[input.length - 1] !== this.code[input.length - 1]) {
        this.createContext();
        this.props.reset();
      } else if (input === this.code) {
        this.props.reset("end");
      }
    }
    return <canvas ref={this.canvasRef} />
  }
}

export default Canvas;