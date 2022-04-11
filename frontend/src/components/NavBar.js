import React, {useState} from 'react'
import {
    Toolbar,
    Typography,
    makeStyles,
    AppBar,
    Hidden,

} from "@material-ui/core";
import { NavLink } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons';
import { SwipeableDrawer } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';


const UseStyles = makeStyles((theme) => ({

    appBar: {
        background: "white",
    },
    linkcustom: {
        fontFamily: "Arvo",
        textDecoration: "none",
        color: "black",
        marginLeft: theme.spacing(15),
        "&:hover": {
            color: "#2EC400",
        },
        display: "flex",
    },
    nameLarge: {
        color: "black",
        fontSize: "20px",
        fontFamily: "Shadows Into Light",
        fontWeight: "bolder",
        marginLeft: theme.spacing(15),
        flexGrow: "1",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        }
    },
    nameSmall: {
        color: "black",
        fontSize: "15px",
        fontFamily: "Shadows Into Light",
        fontWeight: "bolder",
        display: "block",
        flexGrow: "1",
        marginLeft: theme.spacing(15),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    navlinks: {
        marginLeft: theme.spacing(-60),
        display: "flex",
      },

}));

export default function NavBar() {

    const classes = UseStyles();
    const [open, setOpen] = useState(false)

    return (
        <AppBar className={classes.appBar} elevation={1} position='fixed' top='0'>
        <Toolbar>
            <Typography className={classes.nameLarge}>
                <div><NavLink to="/" exact  className={classes.linkcustom} style={{marginLeft: -50, color: '#FEDB74'}}>eZ Schedule.</NavLink></div>
            </Typography>
            <Typography className={classes.nameSmall}>
                <div><NavLink to="/" exact  className={classes.linkcustom} style={{color: '#FEDB74'}}>eZ Schedule.</NavLink></div>
            </Typography>
            <Typography>
                <Hidden smDown>
                    <div className={classes.navlinks}>
                        <NavLink to="/" exact className={classes.linkcustom} fontSize="15px">
                            Home
                        </NavLink>
                        <NavLink to="/Login" className={classes.linkcustom} fontSize="15px">
                            Login
                        </NavLink>
                        <NavLink to="/Landing" className={classes.linkcustom} fontSize="15px">
                            Landing(Temp)
                        </NavLink>
                    </div>
                </Hidden>
            </Typography>
            <Hidden mdUp>
                <IconButton>
                    <Menu onClick={() => setOpen(true)}/>
                </IconButton>
            </Hidden>
        </Toolbar>
        <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <div>
                <IconButton>
                    <ChevronRight onClick={() => setOpen(false)}/>
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem>
                    <NavLink to="/" exact className={classes.linkcustom} fontSize="15px">
                        Home
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/Login" className={classes.linkcustom} fontSize="15px">
                        Login
                    </NavLink>
                </ListItem>   
            </List>
        </SwipeableDrawer>
        </AppBar>
    )
}

