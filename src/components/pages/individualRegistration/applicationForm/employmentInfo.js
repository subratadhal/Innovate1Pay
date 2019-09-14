import React, { Component } from "react";

class EmploymentInfo extends Component {
  componentDidMount() {}
  render() {
    return <React.Fragment> EmploymentInfo</React.Fragment>;
  }
}

export default EmploymentInfo;
/*
https://www.npmjs.com/package/react-avatar-image-cropper
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        src:''
      };
    }
  
    apply = (file) => {
      var src = window.URL.createObjectURL(file);
      this.setState({
        src: src
      })
    }
    render() {
    console.log(this.state);
    const src = this.state.src;
      return (
        <div style={{backgroundImage:'url("https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-af2aao_4e6f6afc.jpeg?region=0%2C0%2C400%2C300")',width:'250px',height:'250px',margin:'auto'}}>
          <AvatarImageCropper apply={this.apply} isBack={true}/>
          <img src={src} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('container')
  );
  */
