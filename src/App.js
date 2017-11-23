import React, { Component } from 'react';
import Advert from './Advert';
import fire from './Fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };

    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    });
  }

  componentDidMount() {
    this.inputEl.focus();
  }

  addMessage(e) {
    e.preventDefault();

    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = '';
  }

  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          {
            this.state.messages.map(message => { 
              return <li key={message.id}>{message.text}</li>
            })
          }
        </ul>
        {
          this.state.messages.length > 0 ?
          <Advert relevance={this.state.messages[0].text} /> :
          ''
        }
      </form>
    );
  }
}

export default App;
