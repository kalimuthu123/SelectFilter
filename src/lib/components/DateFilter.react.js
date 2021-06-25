import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
//import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

class DateFilter extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
     
        }
    }

    componentWillMount() {
		
		
    }

	
    render() {
        const {id, label, setProps, value ,classes ,initialdate } = this.props;

        return (
            <div style={{ width: "100%"}}>
                <DateRangePicker initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }} >
                     <input type="text" className="form-control" />
                </DateRangePicker>
            </div >
        );
    }
}

export default DateFilter;

DateFilter.defaultProps = {};

DateFilter.propTypes = {
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
     * The Date displayed in the input.
     */
    initialdate: PropTypes.any,
	
	/**
     * The type of dateformat in the input.
     */
    type: PropTypes.any,
	
	
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
