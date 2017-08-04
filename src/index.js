import React from 'react';
import ReactDOM from 'react-dom';

//get pics's data
var imageDatas=require('../data/imageDatas.json');
//利用函数 将图片信息转成图片url
  imageDatas= function genImageURL(imageDataArr) {
	for(var i=0,i=imageDataArr.length;j<i;j++){
               var singelIamgeData = imageDataArr[j];
               singelIamgeData.imageURL = require('../image/' + singelIamgeData.fileName);


               imageDataArr[j]=singelIamgeData;
              
	}

	return imageDataArr;
})(imageDatas);

  var index = react.createClass({
     render:function(){
            return(
                 <section className="stage">
                    <section className="img"></section>

                 </section>
            	);



     }


  });









class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }

}

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);

