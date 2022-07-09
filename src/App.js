import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '8119b9abd49940fd90ca443eba8479f4'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: '',
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    return {
      leftCol: clarifaiFace.left_col * 100,
      topRow: clarifaiFace.top_row * 100,
      rightCol: 100 - (clarifaiFace.right_col * 100),
      bottomRow: 100 - (clarifaiFace.bottom_row * 100)
    }
  }


  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response =>{
        if (response) {
          fetch('http://localhost:3000/image',{
            method: 'put',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:this.state.user.id
,            })
          })
          .then(response=>response.json())
          .then(count=>{
            this.setState(Object.assign(this.state.user,{entries:count}))
          })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route == 'signout') {
      this.setState({ isSignIn: false });
    } else if (route === 'home') {
      this.setState({ isSignIn: true });
    }
    this.setState({ route: route })
  }

  render() {
    const { isSignIn, imageUrl, route, box} = this.state;
    return (
      <div className="App">
        <Navigation isSingedIn={isSignIn} onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <div>
            <Logo />
            <Rank
            name={this.state.user.name}
            entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
          : (
            route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )

        }
      </div>
    );
  }
}

export default App;
