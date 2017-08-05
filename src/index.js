// var React=require('react');
// var ReactDOM=require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css';


//get pics's data
var imageDatas=require('../data/imageDatas.json');
//利用函数 将图片信息转成图片url
  imageDatas=(function genImageURL(imageDatasArr) {
	for(var i=0,j=imageDatasArr.length;i<j;i++){
               var singleIamgeData = imageDatasArr[i];
               singleIamgeData.imageURL = require('../images/' + singleIamgeData.fileName);
               imageDatasArr[i]=singleIamgeData;
	}
     	console.log(222);

	return imageDatasArr;
})(imageDatas);


var ImgFigure = React.createClass({
	render:function(){
            console.log(111);

		return(
      <figure>
        <img src={this.props.data.imageURL}
             alt={this.props.data.title}
             />
        <figcaption>
          <h2>{this.props.data.title}</h2>
         </figcaption>
      </figure>
		);
    }
});

  var index = React.createClass({
     render:function(){
     	console.log(111);
            var conntrollerUnits=[],
            ImgFigures=[];
            imageDatas.forEach(function(value,index){
            	ImgFigure.push(<ImgFigure data={value} key={'imgFigures'+index}/>);
            });
            return(
                 <section className="stage">
                    <section className="img-sec">
                    </section>
                    <nav className="controller-nav">
                    </nav>
                 </section>
            	);
     }
  });



ReactDOM.render(
<index />,document.getElementById('content')
);

