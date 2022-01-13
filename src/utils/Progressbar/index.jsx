import React from "react";
import PropTypes from "prop-types";
const ProgressBar = props =>{
    const {value, max} = props;

    return <progress value = {value} max = {max}></progress>
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
};
ProgressBar.defaultProps={
    max: 100,
    
    
};

export default ProgressBar;