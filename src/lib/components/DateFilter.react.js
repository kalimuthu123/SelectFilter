import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
//import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
import './DateFilter.css'
import moment from "moment";

/**
 * DateFilter is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

class DateFilter extends Component {
	
	constructor(props) {
        super(props);		
		let daterange = { 
		     startDate: moment(), 
			 endDate: moment() }
		
        this.state = {
           daterange 
        }
    }

    componentWillMount() {
		
		if ( this.props.type == "today"){
			let daterange = { 
		     startDate: moment() , 
			 endDate: moment() }
			this.setState({ daterange : daterange });
		}
		else if (this.props.type == "current_quarter") {
			let daterange = { 
		     startDate: moment().startOf('quarter') , 
			 endDate: moment() }
			this.setState({ daterange : daterange });
  
         } 	
		else if (this.props.type == "last_quarter") {
			let daterange = { 
		     startDate: moment().subtract(1, 'quarter').startOf('quarter') , 
			 endDate: moment().subtract(1, 'quarter').endOf('quarter') }
			this.setState({ daterange : daterange });
  
        } 
		else if (this.props.type == "last_month") {
			let daterange = { 
		     startDate: moment().subtract(1, 'months').startOf('month') , 
			 endDate: moment().subtract(1, 'months').endOf('month') }
			this.setState({ daterange : daterange });
  
        } 
		else if (this.props.type == "current_month") {
			let daterange = { 
		     startDate: moment().startOf('month') , 
			 endDate: moment() }
			this.setState({ daterange : daterange });
  
        }
		else if (this.props.type == "last_7_days") {
			let daterange = { 
		     startDate: moment().subtract(6, 'days') , 
			 endDate: moment() }
			this.setState({ daterange : daterange });
  
        }
		else if (this.props.type == "current_year") {
			let daterange = { 
		     startDate: moment().startOf('year') , 
			 endDate: moment() }
			this.setState({ daterange : daterange });
  
        }
		
		else if (this.props.type == "yesterday") {
			let daterange = { 
		     startDate: moment().subtract(1, 'days') , 
			 endDate: moment().subtract(1, 'days')  }
			this.setState({ daterange : daterange });
  
        }
		
        else{
			// last 30 days
			let daterange = { 
		     startDate: moment().subtract(29, 'days') , 
			 endDate: moment() }
			this.setState({ daterange : daterange });
		}
		
		
		let dateranges={
            fromDate: this.state.daterange.startDate.format('YYYY-MM-DD'),
            toDate: this.state.daterange.endDate.format('YYYY-MM-DD'),
        }
		
		this.props.setProps({ value : dateranges });	
		
    }
	

   handleEvent = (e, { startDate, endDate }) => {
	   
	let dateranges={
      fromDate: startDate.format("YYYY-MM-DD"),
      toDate: endDate.format("YYYY-MM-DD")
    }
	console.log("dateranges",dateranges)
    this.setState({ daterange : dateranges });
	this.props.setProps({ value : dateranges });
  };

	
    render() {
        const {id, label, setProps, value ,classes ,initialdate } = this.props;
        let myAttr = {'date-ranges': JSON.stringify(this.state.daterange) }
		
        return (
		  <div className="search-field d-none d-md-block" id={id} {...myAttr} >
		    <div className="input-group" id={id} {...myAttr} >
              <div className="input-group-prepend">
			    <i className="input-group-text border-0 mdi mdi-calendarmdi mdi-calendar bg-transparent" ></i>
			  </div >
              <DateRangePicker initialSettings={this.state.daterange} onApply={this.handleEvent} >
                <input type="text" className="form-control  border-0 daterangeinput" />
              </DateRangePicker>
			</div>
		  </div>
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
     * The startDate of dateformat in the input.
     */
    startDate: PropTypes.any,
	
	/**
     * The startDate of dateformat in the input.
     */
    type: PropTypes.any,
	
	/**
     * The startDate of dateformat in the input.
     */
    endDate: PropTypes.any,
	
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
