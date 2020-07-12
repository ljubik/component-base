import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class ButtonComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: 'secondary',
      disabled: false,
      className: 'secondary',
      size: 'secondary',
    };

    // це обовзково для работи `this` .
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      children,
      ariaLabel,
      active,
      className,
      disabled,
      color,
      size,
      onClick,
      ...attributes
    } = this.props;

    let btnClass = `${className} ${size} ${color}`;

    const Tag = attributes.href ? 'a' : 'button';

    // console.log("mij class", btnClass);

    return (
      <Tag
        className={btnClass}
        disabled={disabled}
        onClick={onClick}
        {...attributes}
      >
        {this.props.children}
      </Tag>
    );
  }
}

ButtonComponent.propTypes = {
  'aria-label': PropTypes.string,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string, // main / secondary / tertiary
  className: PropTypes.string,
};

ButtonComponent.defaultProps = {
  ariaLabel: 'Knopka',
  color: 'secondary',
  disabled: false,
  className: 'btn-base',
  size: 'main',
};

export const Button = ButtonComponent;
