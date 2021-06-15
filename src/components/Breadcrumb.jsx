import { Box, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#F6F6F6',
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

const BreadCrumb = ({onTextChange}) => {
    const classes = useStyles();
    return (
        <Box m={1} className={classes.component}>
            <TextField 
                onChange={(e) => onTextChange(e.target.value)}
                label="Search images" 
            />
        </Box>
    )
}

export default BreadCrumb;