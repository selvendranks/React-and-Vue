import { Component } from "react";

class ErrorBoundary extends Component {

  constructor(){
    super();
    this.state = {
        hasError: false
    }
  }
  componentDidCatch(err) {
      this.setState({hasError : true})
  }
  render() {
    if(this.state.hasError){
      return <h1>Something Went wrong</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary