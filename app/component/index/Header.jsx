import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/index.pcss';

class Header extends React.Component {

    state = {
        orderid: 'Cat in the Hat',
      };

    handleChange = orderid => event => {
        this.setState({
            [orderid]: event.target.value,
        });
    };

    render() {
        return (
            <div className="container-fluid">
                <a>
                    <div className="logo float_left">
                    </div>
                </a>
                <div className="float_right">
                </div>
            </div>
        )
    }
}

export default Header;