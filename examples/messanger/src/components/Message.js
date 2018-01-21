import React, {Component} from 'react';

class Message extends Component {

  constructor(props){
    super(props);
  }


  render() {
      var message=this.props.message;
    return (
        <div>
            <b>{message.author}</b><br/>
            {message.message}

        </div>
    )
  }
}

export default Message