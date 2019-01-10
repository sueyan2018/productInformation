import React from 'react';
import '../../public/css/index.pcss';
import SearchInput from './SearchInput'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                itemList: []
            }
        };
    }

    componentDidMount() {
        console.log(this.props.url);
        var itemThis = this;

        var opts = {
            method: "POST",   //请求方法
            body: JSON.stringify({
                "brand": this.props.brand,
                "catalog": this.props.catalog,
                "itemName": this.props.itemName,
                "pageNumber": this.props.pageNumber,
            }),   //请求体

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }


        fetch(this.props.url, opts).then(res => {
            res.json().then((dataJson) => {
                console.log(dataJson);
                itemThis.setState({ data: dataJson });
            })
        })
    }

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
                    </li>
                )
            });
        // (
        //     <li className="list_item">
        //         <img src={require('../../public/img/test.jpg')} />
        //     </li>
        // );
        return (
            <div>
                <div className="right_search">
                    <div className="search_display float_left">
                        <p className="search_result float_left">{this.state.data.itemCount}个搜索结果</p>
                    </div>
                    <div className="search_box float_right">
                        <form action="/mall/index" method="get">
                            <div className="mall_search float_right">
                                <input type="text" name="gname" placeholder="输入商品名字" />
                                <button type="submit">搜索</button>
                            </div>
                        </form>
                        {/* <SearchInput /> */}
                    </div>
                </div>
                <div className="cl"></div>

                <div className="right_display">
                    <ul className="display_list" id="show_pop">
                        {list}
                    </ul>
                </div>
            </div>
        );
    }

}

export default Item;