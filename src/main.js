// var React=require('react');
// var ReactDOM=require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

const css = require('./style.css');
//get pics's data
var imageDatas=require('../data/imageDatas.json');
//利用函数 将图片信息转成图片url
//   function genImageURL(imageDatasArr) {
// 	for(var i=0,j=imageDatasArr.length;i<j;i++){
//                var singleIamgeData = imageDatasArr[i];
//                singleIamgeData.imageURL = require('../images/' + singleIamgeData.fileName);
//                imageDatasArr[i]=singleIamgeData;
// 	}
//      	console.log(222);
// 	return imageDatasArr;
// };
// imageDatas=genImageURL(imageDatas);
// console.log(typeof (imageDatas));
// console.log(imageDatas);
// console.log(css);
//
//
//
// var ImgFigure = React.createClass({
// 	render:function(){
//             console.log(111);
//
// 		return(
//       <figure>
//         <img src={this.props.data.imageURL}
//              alt={this.props.data.title}
//              />
//         <figcaption>
//           <h2>{this.props.data.title}</h2>
//          </figcaption>
//       </figure>
// 		);
//     }
// });
//
//   var AppComponent = React.createClass({
//
//      render:function(){
//      	console.log(111);
//             var controllerUnits=[],
//             ImgFigures=[];
//          console.log(111);
//
//          imageDatas.forEach(function(value,index){
//             	ImgFigure.push(<ImgFigure data={value} key={'imgFigures'+index}/>);
//             });
//             return(
//                  <section className="stage">
//                     <section className="img-sec">
//                         {ImgFigures}
//                     </section>
//                     <nav className="controller-nav">
//                         {controllerUnits}
//                     </nav>
//                  </section>
//             	);
//      }
//   });
  function genImageURL(imageDatasArr) {
	for(var i=0,j=imageDatasArr.length;i<j;i++){
               var singleIamgeData = imageDatasArr[i];
               singleIamgeData.imageURL = require('../images/' + singleIamgeData.fileName);
               imageDatasArr[i]=singleIamgeData;
	}
     	console.log(222);
	return imageDatasArr;
};
imageDatas=genImageURL(imageDatas);

console.log(imageDatas);

class ImgFigure extends React.Component{
	render(){
        return(


            <figure className="img-figure">
                <img src={this.props.data.imageURL}
                     alt={this.props.data.title}
                />
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                </figcaption>
            </figure>
        )
    }
}
  class GalleryByReactApp extends React.Component{

     render() {
         console.log(111);
         var controllerUnits = [],
             imgFigures = [];
         console.log(111);
         console.log(imageDatas);
         imageDatas.forEach((value,index) =>{

             imgFigures.push(<ImgFigure data={value} key={'imgFigures'+index} />);
       });
         // for (var i = 0; i < imageDatas.toString().length;i++){
         //    imgFigures.push(<ImgFigure data={imageDatas[i]}/>);
         //     console.log(imageDatas.toString().length);
         //     console.log(data);
         //
         // }

         return (
             <section className="stage">
                 <section className="img-sec">
                     {imgFigures}
                 </section>
                 <nav className="controller-nav">
                     {controllerUnits}
                 </nav>
             </section>
         );
     }
  }




class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}



ReactDOM.render(
    <GalleryByReactApp name="john" />,
    document.getElementById('app')
);