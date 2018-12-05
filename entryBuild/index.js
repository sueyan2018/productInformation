import React from 'react';
import ReactDOM from 'react-dom';
import Brand from '../app/component/index/Brand.jsx';
// import Chart from '../app/component/d3/chart.jsx';
// // import LineChart from '../app/component/index/LineChart.jsx';
// // import BarChart from 'react-d3-components'

ReactDOM.render(<Brand url="http://localhost:8080/procurement/brand" />, document.getElementById('brand'));

// let data = {
//     points: [
//       [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 },
//         { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ]
//       ,
//       [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 },
//         { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
//       ,
//       [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 },
//         { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
//       ],
//     xValues: [0,1,2,3,4,5,6],
//     yMin: 0,
//     yMax: 30
//   };

// var data = [{
//     label: 'somethingA',
//     values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
// }];