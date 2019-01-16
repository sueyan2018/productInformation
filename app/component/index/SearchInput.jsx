import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/index.pcss';
import Item from './Item'

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inpValu: ''
        }
        this.handelChange = this.handelChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handelChange(e) {
        this.setState({
            inpValu: e.target.value
        })
        console.log(this.inpValu);
    }
    handlePost(){
        const {inpValu} = this.state;
        console.log(inpValu);
        ReactDOM.render(<Item url="http://localhost:8080/procurement/itemList" pageNumber="1" itemName={inpValu} />, document.getElementById('item'));
      };

    render() {
        return (
                <div className="mall_search float_right">
                    <input type="text" name="gname" placeholder="输入商品名字" onChange={this.handelChange}/>
                    <button onClick={this.handlePost}>搜索</button>
                </div>
        );
    }

}

export default SearchInput;
