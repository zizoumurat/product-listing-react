import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, Typography, Container } from '@material-ui/core';
import Cart from './Cart'

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        marginBottom: '50px'
    },
    box: {
        display:'flex',
        alignItems: 'center'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    searchBasketContainer: {
        display: 'flex',
        gap: '8px'
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Container maxWidth="lg">
                    <Box component="div" className={classes.box}>
                        <Typography variant="h6" color="inherit" className={classes.toolbarTitle} noWrap>
                            Murat Dere
                        </Typography>
                        <Cart />
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
