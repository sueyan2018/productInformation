import React from 'react';
import '../../public/css/index.pcss';
import CustomizedDialogDemo from './Dialog'
import Button from '@material-ui/core/Button';
import ReactPaginate from 'react-paginate';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                itemList: []
            },
            InputValue: "",
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.url);
        this.getItems(nextProps);
    }

    componentDidMount() {
        console.log(this.props.url);
        this.getItems(this.props);
    }

    handleGetInputValue = (event) => {
        this.setState({
            InputValue: event.target.value,
        })
    };

    handlePost = () => {
        const { InputValue } = this.state;
        let props = {
            url: "http://localhost:8080/procurement/itemList",
            itemName: InputValue,
            pageNumber: 1,
        }
        this.getItems(props);
    };

    getItems = (props, selected) => {
        console.log(props.url);
        var itemThis = this;

        var opts = {
            method: "POST",   //请求方法
            body: JSON.stringify({
                "brand": props.brand,
                "catalog": props.catalog,
                "itemName": props.itemName,
                "pageNumber": selected = null ? props.pageNumber : selected,
            }),   //请求体

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }


        fetch(props.url, opts).then(res => {
            res.json().then((dataJson) => {
                console.log(dataJson);
                itemThis.setState({ data: dataJson });
            })
        })
    }

    handlePageClick = data => {
        let selected = data.selected;

        getItems(this.props, selected);
    };

    render() {
        console.log(this.state.data.itemList);
        let list = this.state.data.itemList.map(
            function (item) {
                return (
                    <li className="list_item">
                        <img src={require('../../public/img/' + item.itemPic)} />
                        <div className="item_name">
                            <p className="name_chinese">{item.itemName}</p>
                            <p className="name_english" title={item.itemDescription}>{item.itemDescription}</p>
                        </div>
                        <div className="price">
                            参考价格： ￥{item.itemAmount}
                        </div>
                        <div>
                            <CustomizedDialogDemo item={item} />
                        </div>
                    </li>
                )
            });
        // (
        //     <li className="list_item">
        //         <img src={require('../../public/img/test.jpg')} />
        //     </li>
        // );
        let page = this.state.data.itemCount == 0 ? null :(
            <div id="react-paginate" style={{fontSize:"16px",textAlign:"center"}}>
                <ReactPaginate
                    previousLabel={'⬅'}
                    nextLabel={'➡'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(this.state.data.itemCount / 20)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>);
        return (
            <div>
                <div className="right_search">
                    <div className="search_display float_left">
                        <p className="search_result float_left">{this.state.data.itemCount}个搜索结果</p>
                    </div>
                    <div className="search_box float_right">
                        <div className="mall_search float_right">
                            <input type="text" name="gname" placeholder="输入商品名字" value={this.state.InputValue} onChange={this.handleGetInputValue} />
                            <button onClick={this.handlePost}>搜索</button>
                        </div>
                        {/* <SearchInput /> */}
                    </div>
                </div>
                <div className="cl"></div>

                <div className="right_display">
                    <ul className="display_list" id="show_pop">
                        {list}
                    </ul>
                </div>
                <div className="cl"></div>
                <br />
                {page}
            </div>
        );
    }

}

export default Item;