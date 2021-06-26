import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CardDropDown.css'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
// DropdownPage.js


class CardDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownVisible: false
    }
  }

  toggleDropdown = (e) => {
    this.setState(prevState => ({dropdownVisible: !prevState.dropdownVisible}))
  }

  renderDropdownMenu(childrenlayout) {
    return (
      <div className='dropdown-body dropdown-form'>
         {childrenlayout.map((child, index) => (<div key={index}>{child}</div>))}
      </div>
    )
  }

  render() {
	  const {id, label, setProps, value ,classes,children } = this.props;
		console.log("children",children)
        let childrenlayout = Array.isArray(children) ? children : [children];
		console.log("childrenlayout", childrenlayout)
    return (
      <div className='dropdown-container'>
        <div className='dropdown-trigger'>
          <button className="btn btn-outline-secondary btn-rounded dropdown-toggle" onClick={this.toggleDropdown}>
		      <i className="mdi mdi-filter-variant"></i>
			  {label}
			  <span className="count-symbol bg-danger"></span>
          </button>
        </div>
        {
          this.state.dropdownVisible &&
          this.renderDropdownMenu(childrenlayout)
        }
      </div>
    )
  }
}

export default CardDropdown;

CardDropdown.defaultProps = {};

CardDropdown.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string,
	
	/**
     * The children components displayed inside the grid.
     */
    children : PropTypes.node,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.any,
	
	
	/**
     * The classes displayed in the component.
    */
    classes: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};


