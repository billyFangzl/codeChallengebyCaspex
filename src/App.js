import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    images: [{url:'https://www.backpacker.com/.image/t_share/MTU3OTQyMDc0MjcwODIwMzAy/25707419847_20d14dea02_k.jpg', title:'travel'}],
    tempUrl:'',
    tempTitle:''
  };


  inputUrlHandler=(event)=>{
    const temps = event.target.value;
    this.setState({tempUrl:temps})
  }

  inputTitleHandler=(event)=>{
    const temps = event.target.value;
    this.setState({tempTitle:temps})
  }

  addImageHandler = ()=>{
    const images = [...this.state.images];
    const imageUrl = this.state.tempUrl;
    const imageTitle = this.state.tempTitle;
    const image = {url:imageUrl,title:imageTitle};
    if(imageUrl !== ''){
      images.push(image);
      this.setState({images:images});
    }else{
      alert("you need add image src first!");
    }
  }


  render() {
    const {images} = this.state;


    
    return (
      <div className="App">
        <div className="addImage">
          <h1>This is my code challenge!</h1>
          <input className="inputUrl" type="text" onChange={ (event)=> this.inputUrlHandler(event)}/>
          <div className="inputButton">
            <input type="text" onChange={ (event)=> this.inputTitleHandler(event)}/>
            <button onClick={this.addImageHandler}>Add Image </button>
          </div>
        </div>

        <div className="img-list">
          {images.map((image,index)=>(
            <div key={index}>
              <h1>{image.title}</h1>
              <img src={image.url} alt={index}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
