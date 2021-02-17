import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  handleClick = () => {
    this.setState((state, props) => {
      return {
        count: state.isAdd
          ? state.count + props.step
          : state.count - props.step,
      };
    });
  };

  changeMode = () => {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  };

  render() {
    const { count, isAdd } = this.state;
    const { step } = this.props;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.handleClick}>
          {isAdd ? 'Добавить' : 'Отнять'}
        </button>
        <button onClick={this.changeMode}>Изменить состояние</button>
        <div>Кнопка на {step} единиц(y)</div>
      </div>
    );
  }
}
