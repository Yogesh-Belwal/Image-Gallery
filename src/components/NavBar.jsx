import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

import CollectionsIconFace from '@material-ui/icons/Face';
const useStyles = makeStyles({
    component: {
        background: '#445A6F'
    }
})

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component} position="static">
            <Toolbar>
                <CollectionsIconFace />
                
                <Typography variant="h5" style={{marginLeft: 10}}>Yogesh's Gallery</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;