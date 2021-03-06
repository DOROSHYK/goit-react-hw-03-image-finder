import React, { Component } from 'react';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

// const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  static propTypes = {
    onBackdrop: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onBackdrop();
    }
  };

  render() {
    const { content } = this.props;
    return (
      <Portal>
        <div className={s.Overlay} onClick={this.handleBackdropClick}>
          <div className={s.Modal}>
            <img src={content} alt="" />
          </div>
        </div>
        , modalRoot
      </Portal>
    );
  }
}

export default Modal;
