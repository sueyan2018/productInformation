import React from 'react';
import ReactDOM from 'react-dom';
import Brand from '../app/component/index/Brand.jsx';
import Item from '../app/component/index/Item.jsx';

ReactDOM.render(<Brand url="http://localhost:8080/procurement/brand" />, document.getElementById('brand'));
ReactDOM.render(<Item url="http://localhost:8080/procurement/itemList" pageNumber="1" />, document.getElementById('item'));

function itemSearchByCatalog(catalog) {
    ReactDOM.render(<Item url="http://localhost:8080/procurement/itemList" pageNumber="1" catalog={catalog} />, document.getElementById('item'));
}

function itemSearchByBrand(brand) {
    console.log(brand);
    ReactDOM.render(<Item url="http://localhost:8080/procurement/itemList" pageNumber="1" brand={brand} />, document.getElementById('item'));
}

function itemSearchByName() {
    ReactDOM.render(<Item url="http://localhost:8080/procurement/itemList" pageNumber="1" itemName={name} />, document.getElementById('item'));
}

function itemSearchByAll(catalog, brand, name, pageNumber) {
    ReactDOM.render(<Item url="http://localhost:8080/procurement/itemList" pageNumber={pageNumber} itemName={name} brand={brand} catalog={catalog} />, document.getElementById('item'));
}