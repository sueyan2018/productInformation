import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/index.pcss';
import Item from './Item'

class Catalog extends React.Component {
    render() {
        return (
            <div>
                <a href="" className="left_item_title">分类</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={1} />, document.getElementById('item'));
                }}>母婴专区</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={2} />, document.getElementById('item'));
                }}>营养保健</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={3} />, document.getElementById('item'));
                }}>婴儿奶粉</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={4} />, document.getElementById('item'));
                }}>其他奶粉</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={5} />, document.getElementById('item'));
                }}>家用常备药</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={6} />, document.getElementById('item'));
                }}>儿童专区</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={7} />, document.getElementById('item'));
                }}>家用清洁</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={8} />, document.getElementById('item'));
                }}>家居产品</a>
                <a className="left_group_item left_catagory_item" onClick={() => {
                    ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={99} />, document.getElementById('item'));
                }}>其他产品</a>
                <span className="left_group_item left_catagory_item"></span>
                <span className="left_group_item left_catagory_item"></span>
            </div>
        )
    }
}

export default Catalog;