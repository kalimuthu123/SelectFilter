import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

/**
 * TimeGrainFilter is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

class TimeGrainFilter extends Component {
	
	constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
		
    }
	
	handleClick=(e)=>{
         console.log(e.target.value)
		 this.props.setProps({ value : e.target.value });
    }

	
    render() {
        const {id, label, setProps, value ,classes ,timegrainarray } = this.props;
		var data = timegrainarray
        const buttonItems = data.map((timegrain) => <button class="btn btn-outline-secondary" value={timegrain} >{timegrain}</button>);
        return (
            <div style={{ width: "100%"}}>
			   <ButtonGroup onClick={this.handleClick}>
                {buttonItems}
			   </ButtonGroup>
            </div >
        );
    }
}

export default TimeGrainFilter;

TimeGrainFilter.defaultProps = {};

TimeGrainFilter.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.any,
	
	/**
     * The timegrainarray displayed in the input.
     */
    timegrainarray : PropTypes.any,
	
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
