import React, {Component} from 'react';
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1 id="title">Swell</h1>
        <img id="logo" src="src/assets/logo-lockup.png" alt="swell logo" />
        <p id="content">Lorem ipsum dolor amet vice literally bicycle rights cornhole chicharrones asymmetrical
          tumblr kinfolk, organic deep v. Locavore aesthetic everyday carry raw denim lomo neutra
          banjo. Adaptogen health goth readymade, sartorial biodiesel fanny pack cornhole banh mi
          ethical typewriter activated charcoal echo park. Godard roof party chambray, truffaut
          marfa organic narwhal intelligentsia. Enamel pin meh wayfarers salvia, tote bag bicycle
          rights ennui hot chicken chia.</p>
        <a id="download-btn" href="../../somefile.txt" download="somefile.txt">Download!</a>
      </div>
    );
  }
}

export default App;