import React from 'react';
import ReactDOM from 'react-dom';
import Brand from '../app/component/index/Brand.jsx';
import Item from '../app/component/index/Item.jsx';
import Catalog from '../app/component/index/Catalog.jsx';
import Header from '../app/component/index/Header.jsx';
import Recipe from '../app/component/index/Recipe.jsx';
// import SimpleMenu from '../app/component/index/Menu.jsx'

// ReactDOM.render(<Brand url="http://13.229.67.79:8080/procurement/brand" />, document.getElementById('brand'));
// ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" />, document.getElementById('item'));
// ReactDOM.render(<Catalog />, document.getElementById('catalog'));
// ReactDOM.render(<Header />, document.getElementById('header'));

// // ReactDOM.render(<SimpleMenu />, document.getElementById('footer'));

// function itemSearchByCatalog(catalog) {
//     ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" catalog={catalog} />, document.getElementById('item'));
// }

// function itemSearchByBrand(brand) {
//     console.log(brand);
//     ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" brand={brand} />, document.getElementById('item'));
// }

// function itemSearchByName() {
//     ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber="1" itemName={name} />, document.getElementById('item'));
// }

// function itemSearchByAll(catalog, brand, name, pageNumber) {
//     ReactDOM.render(<Item url="http://13.229.67.79:8080/procurement/itemList" pageNumber={pageNumber} itemName={name} brand={brand} catalog={catalog} />, document.getElementById('item'));
// }

ReactDOM.render(<Recipe />, document.getElementById('recipe'));