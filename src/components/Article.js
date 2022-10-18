import React, {Component, PureComponent} from 'react';

class Article extends PureComponent {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     isOpen : true
  //   }
  // }
    state = {
      isOpen : this.props.defaultOpen
    }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
      isOpen: nextProps.defaultOpen
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isOpen !== nextState.isOpen;
  // }

  render() {
    const {article} = this.props
    const message = this.state.isOpen && article.title
    return (
      <div>
        <h2>
          {article.id}
          <button onClick={this.handleClick}>{this.state.isOpen ? 'Close' : 'Open'}</button>
        </h2>
        <section>{message}</section>
      </div>
    )
  }
}

function handleClick(e) {
  console.log("Close");
}

export default Article
