
import React from 'react'
import { View, TextInput } from 'react-native'
import Message from './Message'

// Here, we "export" a new class called MessageList. This will allow us to "import"
// it in another file, such as App.js.
export default class MessageList extends React.Component {
  // Every React component needs a "render" method. Methods are just functions
  // that belong to a class. If this sounds like gibberish, don't worry. I
  // know you'll look it up on your own time, as any good student would.

  state={
    messages : [ ],
    newMsgText:' ',
  }



  updateMessage = (newMsgText) => this.setState({newMsgText});

  addMessage= ()=>{
    const text = this.state.newMsgText.trim();
    if(text.length <1){
      return;
    }

    const currentDate = new Date();
     const newMsg = {
       id:currentDate.getTime(),
       sender : 'frnkly',
       text:text,
      timestamp:currentDate.getTime(),
     }

     this.setState({
       messages:[...this.state.messages, newMsg],
       newMsgText:' ',
  })
}
  render() {

    return (
      <View>
        {this.state.messages.map(msg =>(
        <Message key={msg.id}
                           text={msg.text} 
                           sender = {msg.sender}
                           timestamp = {msg.timestamp}/>
        ))}     

        <TextInput 
            placeholder ="Enter your message here my friend"
            value = {this.state.newMsgText}
            onChangeText={this.updateMessage}
            onSubmitEditing={this.addMessage}
            style={{height :70, padding : 10}}
        />
      </View>
    );
  }
}