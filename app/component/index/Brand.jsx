import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/index.pcss';
import Item from './Item'

class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data : []};
    }

    componentDidMount() {
        console.log(this.props.url);
        var brandThis = this;
        fetch(this.props.url).then(res=>{
            res.json().then((dataJson)=>{
                console.log(dataJson);
                brandThis.setState({data : dataJson});
            })
        })
    }

    render() {
        var list = this.state.data.map(function (brand) {
            //return <li key={client.id}><p>{client.clientName}</p></li>
            return <a className="left_group_item" title={brand.brandDescription} onClick={() => {
                ReactDOM.render(<Item url="http://localhost:8080/procurement/itemList" pageNumber="1" brand={brand.brandId} />, document.getElementById('item'));
            }}>{brand.brandName}</a>
        });
        return <div>{list}</div>;
    }
}

export default Brand;