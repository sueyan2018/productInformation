import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
//import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import DragIndicator from '@material-ui/icons/DragIndicator';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import Clear from '@material-ui/icons/Clear'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,

    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit * 2.5,
        color: theme.palette.grey[500],
    },

}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                //         <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                //             {/* <CloseIcon /> */} ❌
                // </IconButton>
                <Clear onClick={onClose} className={classes.closeButton} />
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
    state = {
        open: false,
        scroll: 'paper',
    };

    handleClickOpen = () => {
        //this.props.closeMenu();
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.closeMenu();

    };

    handleAddCard = () => {
        alert("Sorry, the function is being developed~");
    }

    render() {

        let { item } = this.props;
        return (
            <div>
                {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen} className="control_button">
          详细情况
        </Button>
        <Button variant="outlined" color="primary" className="control_button">
          加入购物车
        </Button> */}
                <div className="flex_line">
                    <DragIndicator className="icons" onClick={this.handleClickOpen} />
                    <AddShoppingCart className="icons" onClick={this.handleAddCard} />
                    <FavoriteBorder className="icons" onClick={this.handleAddCard} />
                </div>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                    scroll={'paper'}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        {item.itemName}
                    </DialogTitle>

                    <DialogContent>
                        <div>
                            <img className="dialog_content" src={require('../../public/img/' + item.itemPic)} />
                            <p className="dialog_font">{item.itemDescription}</p>
                        </div>
                    </DialogContent>

                    <DialogActions>
                        <FavoriteBorder style={{cursor:"pointer",marginLeft:"20px"}} onClick={this.handleAddCard} />
                        <AddShoppingCart style={{cursor:"pointer"}} onClick={this.handleAddCard} />
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default CustomizedDialogDemo;
