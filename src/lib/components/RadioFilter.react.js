import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './RadioFilter.css'
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
// https://codesandbox.io/s/checkboxbyplatform-ppmh4?file=/src/app.jsx

class RadioFilter extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
           selections :[ ],
		   expanded : false
        }
		this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
		
		
    }
	
  toggleExpanded = () => {
    if (!this.state.expanded) {
	  this.setState({ expanded: true });
    } else {
      this.setState({ expanded: false });
    }
  };
  
  handleChange(event){
	console.log("event",event)
    if (event.target.checked) {
		this.setState(prevState => ({ 
    	selections: [...prevState.selections, event.target.nam ]
       }))
      //return "ok" //setSelections([...selections, event.target.name]);
    }
    const filtered = this.state.selections.filter(name => name !== event.target.name);
	this.setState({ selections: filtered });
    //return "ok"
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted! Values selected are", this.state.selections);
	this.props.setProps({ value : this.state.selections });
    //toggleExpanded();
  };

	
    render() {
        const {id, label, setProps, value ,classes,initialarray} = this.props;

        return (
            <div style={{ width: "100%"}}>
                <form onSubmit={this.handleSubmit} className="form-group">
                   <div>
                      <div onClick={this.toggleExpanded}>
		                  <div className={`font-semibold cursor-pointer ${this.state.expanded ? "up-arrow" : "down-arrow"}`}>
                             { " show all trends "}
                           </div>
                      </div>
                      {this.state.expanded && (
                      <div className="custom-checkbox custom-control">
                          { initialarray.map ( data => (
                          <label htmlFor="one" className="block" key={data}>
                          <input
                           type="checkbox"
                           name={data}
                           value={data}
                           onChange={this.handleChange}
                           className="m-3 cursor-pointer"
                          />
                          {data}
                          </label>
                     ))}
					 <button type="submit">Submit</button>
                     </div>
                    )}
                   </div>
                   
                </form>
            </div>
        );
    }
}

export default RadioFilter;

RadioFilter.defaultProps = {};

RadioFilter.propTypes = {
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
     * The type of dateformat in the input.
     */
    initialarray: PropTypes.any,
	
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
