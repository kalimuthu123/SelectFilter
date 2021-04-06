import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { Icon } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { DateRange } from 'react-date-range';
import Utils from "./util.js";
import withStyles from "@material-ui/core/styles/withStyles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = theme => ({
    icon: {
        margin: 0,
        fontSize: 22,
        marginRight: 0,
        borderRadius: '50%',
        padding: 3
    },
    applyButton: {
        borderRadius: '2em',
        height: 34,
        margin: '0px 10px',
        backgroundColor: '#00acc1',
        color: 'white',
        border: '1px solid #00acc1',
        justifyContent: 'center',
        minHeight: 34,
        minWidth: 100,
        boxShadow: 'none',
        "&:hover,&:focus": {
            color: "#00acc1",
            backgroundColor: 'white',
            border: '1px solid #00acc1',
            boxShadow:
                "none"
        }
    },
    button: {
        borderRadius: '2em',
        height: 34,
        margin: '0px 10px',
        backgroundColor: 'white',
        color: '#373737',

        ustifyContent: 'center',
        minHeight: 34,
        minWidth: 110,
        boxShadow: 'none',
        "&:hover,&:focus": {
            color: "black",

            backgroundColor: 'white',
            boxShadow:
                "none"
        }
    },
    dateButton: {
        borderRadius: '2em',
        height: 40,
        margin: '0px 10px',
        backgroundColor: 'white',
        color: '#373737',
        // boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        ustifyContent: 'center',
        minHeight: 40,
        minWidth: 110,
        boxShadow: 'none',
        "&:hover,&:focus": {
            color: "black",
             boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
            backgroundColor: 'white',
            // boxShadow:"none"
        }
    }
});


const dateFilterType = [
    {
        type: '0 day',
        text: 'Today',
        displayValue: ''
    },
    {
        type: '1 day',
        text: 'Yesterday',
        displayValue: ''
    },
    {
        type: '7 day',
        text: 'Last 7 Days',
        displayValue: ''
    },
    {
        type: '30 day',
        text: 'Last 30 Days',
        displayValue: ''
    },
    {
        type: '1 month',
        text: 'This month',
        displayValue: ''
    },
    {
        type: 'prev month',
        text: 'Last Month',
        displayValue: ''
    },
    {
        type: 'custom',
        text: 'Custom Range',
        displayValue: ''
    }
    // ,
    // {
    //     type: 'All',
    //     text: 'All',
    //     displayValue: ''
    // }
];



const StyledButton = withStyles({
    root: {
        borderRadius: '2em',
        height: 40,
        margin: '0px 10px',
        backgroundColor: 'white',
        color: 'black',
        ustifyContent: 'center',
        minHeight: 40,
        minWidth: 110,
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        "&:hover,&:focus": {
            color: "black",
            backgroundColor: 'white',
            boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        }
    },
    label: {
        textTransform: 'capitalize',
        width: '100% !important',
        padding: '0px 0px 0px 10px'
    },
})(Button);

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

class SelectFilter extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            showCustom: false,
            // dateSelectFilter: 'Today:',
            startDate: Utils.getDateForDatePicker('current-start'),
            endDate: Utils.getDateForDatePicker('current-end'),
            maxDate: Utils.getDateForDatePicker('max'),
            buttonText: 'Last 30 Days',
            start: '',
            end: '',
            titleText : this.props.titleText,
            defaultDateRangeType: this.props.defaultDateRangeType || "30 day"
        }
    }

    componentWillMount() {
        this.updateSelectedDatePicker( this.state.defaultDateRangeType );
		var data = Utils.getDateForDatePicker(this.state.defaultDateRangeType);
        var finalDateData = {
            fromDate: data.startDate,
            toDate: data.endDate
        }
		this.props.setProps({ value: finalDateData });	
		
    }

    handleSave = () => {
        this.setState({ anchorEl: null });
    }


    updateSelectedDatePicker(type, text) {
        this.setState({ buttonText: text });
        if (type === 'custom') {
            return;
        }
        var data = Utils.getDateForDatePicker(type);

        this.setState({
            start: data.start,
            end: data.end,
            startDate: data.startDate,
            endDate: data.endDate
        });
		/*var finalDateData = {
            fromDate: data.startDate,
            toDate: data.endDate
        }
		this.props.setProps({ value: finalDateData });*/
    
    }

    showCustomDatePicker = () => {
        this.setState({
            showCustom: true
        })
    }

    handleSelect(range) {
        var dateData = {
            startDate: range.startDate._d,
            endDate: range.endDate._d
        }

        var data = Utils.formatStartDateAndEndDate(dateData);//for custom date
        this.setState({
            start: data.start,
            end: data.end,
            startDate: data.startDate,
            endDate: data.endDate
        });
    }

    applyDateChange() {
        var finalDateData = {
            fromDate: this.state.startDate,
            toDate: this.state.endDate
        }

        //this.props.emitDateData(finalDateData);
		this.props.setProps({ value: finalDateData });
        this.handleClose();
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
	
    render() {
        const {id, label, setProps, value ,classes } = this.props;

        return (
            <div style={{ width: "100%"}}>
                <Grid container direction="row" alignItems="stretch">
                    <Grid item xs={12} sm={12} md={8}>
                        <p style={{ margin: 5, float: 'left', fontSize: '2em', color: '#373737', 
                        fontFamily: "'Montserrat', sans-serif" }}>{this.state.titleText}</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ float: 'right' }}>
                            <StyledButton aria-owns={this.state.anchorEl ? 'long-menu' : null} aria-haspopup="true" aria-label="More" onClick={this.handleClick} variant="contained" className={classes.dateButton} style={{ width: 180, padding: '0 5px', boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)' }}>
                                <Grid container direction="row" alignItems="stretch" style={{ minWidth: 130, alignItems: 'center', fontFamily: "'Montserrat', sans-serif" }}>
                                    <Grid item xs={9} sm={9} md={9} style={{ display: 'flex' }}>
                                        <p style={{ textAlign: 'left', fontSize: 12, margin: 0, 
                                        paddingRight: 5, fontFamily: "'Montserrat', sans-serif",
                                         color: '#373737' }}>
                                         {this.state.start}</p>
                                        <p style={{ textAlign: 'left', fontSize: 12, margin: 0, 
                                        fontFamily: "'Montserrat', sans-serif", 
                                        color: '#36c2d8' }}>
                                        - {this.state.end}</p>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} style={{ textAlign: 'right', placeContent: 'center', alignItems: 'center', display: 'flex', fontFamily: "'Montserrat', sans-serif" }}>
										<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                           <MenuIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </StyledButton>
                            <Menu
                                id="long-menu"
                                anchorEl={this.state.anchorEl}
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: '100%',
                                        width: '60%'
                                    },
                                }}
                            >
                                <Grid container direction="row" alignItems="stretch" style={{
                                    padding: '0px 15px'
                                }}>
                                    <Grid item xs={12} sm={12} md={9}>
                                        < DateRange
                                            style={{ display: 'flex' }}
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            format="YYYY-MM-DD"
                                            maxDate={this.state.maxDate}
                                            onChange={this.handleSelect.bind(this)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <List component="nav">
                                            {dateFilterType.map((indValue, index) => (
                                                <ListItem key={index} 
                                                button 
                                                style={{ padding: 10, backgroundColor: (this.state.buttonText === indValue.text) ? '#00acc1' : 'white' }} 
                                                onClick={this.updateSelectedDatePicker.bind(this, indValue.type, indValue.text)}>
                                                    <ListItemText disableTypography inset primary={indValue.text} 
                                                    style={{ color: (this.state.buttonText === indValue.text) ? 'white' : '#373737', 
                                                    paddingLeft: 0, fontSize: 13, fontWeight: 600 }} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" justify="flex-end" alignItems="center">
                                    <Grid item xs={12} sm={12} md={4} style={{ margin: 10 }}>
                                        <Button variant="contained" className={classes.applyButton} onClick={this.applyDateChange.bind(this)}>
                                            Apply
                                    </Button>
                                        <Button variant="contained" className={classes.button} onClick={this.handleClose}>
                                            Cancel
                                    </Button>
                                    </Grid>
                                </Grid>
                            </Menu>
                        </div>
                    </Grid>
                </Grid >
            </div >
        );
    }
}

export default withStyles(styles)(SelectFilter);

SelectFilter.defaultProps = {};

SelectFilter.propTypes = {
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
	
    classes: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
