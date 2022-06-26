import React from 'react';
import {TextField as MaterialTextField} from '@mui/material';



const TextField = (props) => {
    return (
        <MaterialTextField   InputLabelProps={{ shrink: true }} {...props} />
    );
};

export default TextField;