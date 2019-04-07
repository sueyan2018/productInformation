import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    root: {
        width: "100%",
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    textfieldStyle: {
        backgroundColor: "#fff",
        color: "#868aa8",
        margin: "0",
        marginLeft: "20px",
        width: "800px"
    },
    commonTypography: {
        color: "#868aa8",
        fontSize: "18px",
        fontWeight: "blod",
        marginBottom: "0px",
        marginLeft: "20px"
    },
    button: {
        fontSize:"12px",
        marginLeft: "20px",
    }
})
class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fridgeValue: "",
            json: ""
        };
    }

    valueFridgeChange(event) {
        this.setState({
            fridgeValue: event.target.value
        })
    }

    valueJsonChange(event) {
        this.setState({
            json: event.target.value
        })
    }
    
    submit(){
        var itemThis = this;

        var opts = {
            method: "POST",   //请求方法
            body: JSON.stringify({
                "fridge": this.state.fridgeValue,
                "recipes": this.state.json
            }),   //请求体

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }


        fetch("http://ec2-13-229-67-79.ap-southeast-1.compute.amazonaws.com:8080/recipe/recipe", opts).then(res => {
            res.json().then((dataJson) => {
                console.log(dataJson);
                if(dataJson.header.status){
                    alert(dataJson.result)
                } else {
                    alert(dataJson.header.message)
                }
            })
        })
    }

    render() {
        const { classes } = this.props;
        const { fridgeValue, json } = this.state;
        return (
            <div>
                <div>
                    <Typography className={classes.commonTypography} gutterBottom>
                        Fridge CSV:
                    </Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Fridge"
                        multiline
                        rowsMax="50"
                        rows="20"
                        value={fridgeValue}
                        onChange={this.valueFridgeChange.bind(this)}
                        margin="normal"
                        variant="outlined"
                        className={classes.textfieldStyle}
                    />
                </div>
                <div>
                    <Typography className={classes.commonTypography} gutterBottom>
                        Recipe
                    </Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Recipe"
                        multiline
                        rowsMax="50"
                        rows="20"
                        value={json}
                        onChange={this.valueJsonChange.bind(this)}
                        margin="normal"
                        variant="outlined"
                        className={classes.textfieldStyle}
                    />
                </div>
                <div>
                    <Button
                        color="primary"
                        variant="outlined"
                        size="large"
                        onClick={this.submit.bind(this)}
                        className={classes.button}
                    >
                        Submit
                  </Button>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Recipe);