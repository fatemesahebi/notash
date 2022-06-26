import React from 'react';
import {ToggleButton as ToggleButton_} from "@mui/material";
import {palette} from "assets/theme";

const ToggleButton = (props) => {
    const {children, roleAccess , ...rest} = props
    return (
        <ToggleButton_ {...rest} sx={{
            border: "2px solid !important",
            fontSize:"12px",
            borderColor: `${palette.primary[700]} !important`,
            width: "110px"
        }}>
            {children}
        </ToggleButton_>
    );
};

export default ToggleButton;