import React from "react";
import PropTypes from "prop-types";

import "./Checkbox.css";

class CheckboxComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    // Не викликати this.setState() тут!
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    // перевірка та виклик функції, пропса onChange є функція, значить її треба не повертати а викликати
    // в цю функцію треба передати поточне значення чекбокса.
    if (typeof this.props.onChange == "function") {
      this.props.onChange();
      var tar = e.target.id;
      var val = e.target.checked;
      this.setState({ [tar]: val });
      // const handler = useCallback(() => {
      //   setX(!x);
      // }, []);
    }
  };

  render() {
    const {
      id,
      type,
      label,
      error,
      children,
      active,
      className,
      disabled,
      color,
      size,
      onClick,
      checked,
      msg,
      ...attributes
    } = this.props;

    console.log("in label", label, id);

    const checkClass = `${className} ${size} ${color}`;

    return (
      <div key={id} className="checkbox">
        <input
          type={type}
          name={id}
          id={id}
          className={checkClass}
          size={size}
          disabled={disabled}
          onChange={this.props.onChange}
          defaultChecked={checked}
          {...attributes}
        />
        <label htmlFor={id}>
          {!!label.length && <span className="check-lbl">{label}</span>}
        </label>
      </div>
    );
  }
}

CheckboxComponent.propTypes = {
  "aria-label": PropTypes.string,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string, // main / secondary / tertiary
  className: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
};

CheckboxComponent.defaultProps = {
  disabled: false,
  className: "chek-base",
  type: "checkbox",
  checked: false,
  label: "",
  // onChange: () => {}
};

export const Checkbox = CheckboxComponent;
