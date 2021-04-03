/* eslint-disable import/prefer-default-export */
import SelectFilter from './components/SelectFilter.react';
import withStyles from "@material-ui/core/styles/withStyles";

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

export {
    SelectFilter
};
