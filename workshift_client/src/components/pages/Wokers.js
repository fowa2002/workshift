import React from 'react';
import { withStyles } from '@mui/material-ui/core/styles';

const styles = theme => ({
    root: {
        width:'100%',
        marginTop: theme.spacing.unit *3,
        overflowX:'auto'
    },
    table: {
        minWidth: 1080
    }
})

function Wokers() {
    return (
        <div>
            직원페이지입니다.
        </div>
    );
};

export default Wokers;