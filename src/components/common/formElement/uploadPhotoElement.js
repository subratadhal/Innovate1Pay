import React, { Component } from "react";
import {
  FormGroup,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import AvatarImageCropper from "react-avatar-image-cropper";

class UploadPhotoElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      src: ""
    };
  }
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  apply = file => {
    // handle the blob file you want
    // such as get the image src
    var src = window.URL.createObjectURL(file);
    this.setState({
      src: src
    });
    this.toggle();
  };
  render() {
    const src = this.state.src;
    const maxsize = 1024 * 1024 * 2;
    return (
      <React.Fragment>
        <FormGroup className="form-element">
          <Label for={this.props.id}>
            {this.props.name}
            <span>*</span>
          </Label>
          {!src ? (
            <div className="upload-photo form-control" id={this.props.id}>
              <div className="icon-w"></div>
              <Button onClick={this.toggle}>Upload Photo</Button>
              <p>
                Please upload only jpeg, jpg and git images with 50KB
                size/length, 144 height, 216 width ratio. Uploaded photos should
                have a white background.
              </p>
            </div>
          ) : (
            <div
              className="upload-photo-success form-control"
              id={this.props.id}
            >
              <div className="av-img">
                <img src={src} alt="" />
              </div>
              <Button onClick={this.toggle}>Change Photo</Button>
            </div>
          )}
        </FormGroup>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Upload Passport Photo</ModalHeader>
          <ModalBody className="p0">
            <div className="avatar-container">
              <div className="avatar-section">
                <div className="avatar-photo-uploder">
                  <AvatarImageCropper apply={this.apply} maxsize={maxsize} />
                </div>
              </div>
              <div className="tips-section">
                <p className="av-tips">Tips:</p>
                <p>
                  Please upload only jpeg, jpg and git images with 50KB
                  size/length, 144 height, 216 width ratio. Uploaded photos
                  should have a white background.
                </p>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default UploadPhotoElement;
