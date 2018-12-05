// import React from 'react';
// import '../../public/css/index.pcss';

// class Index extends React.Component {
//     render() {
//         return (
//             <div className="cont">
//                 <div className="top">
//                     <div>这是头部</div>
//                     <i className="logo"/>
//                 </div>
//                 <div className="bottom">
//                     这是底部
//                 </div>
//             </div>
//         );
//     }
// }

// export default Index;

import React from 'react';
import '../../public/css/index.pcss';

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
            return <a className="left_group_item" href="http://pol.cdnchina360.com/mall/index?&amp;cat_id=31">{brand.brandName}</a>
        });
        return <div>{list}</div>;
    }
}

export default Brand;