import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      current:this.props.store.channelKey,
      channel:this.props.store.channelName
    };
    //this.ref=null;
    //let app = this.props.db.database().ref('messages');
    //let app = this.props.db.database().ref('messages').orderByChild("author").equalTo(this.props.store.nick);
    /*app.on('value', snapshot => {
      this.getData(snapshot.val());
    });*/
  }
  componentDidMount() 
  {
    //this.checkListener(false,this.state.current);
  }
  componentWillReceiveProps(p)
  {
    if(!_.isEqual(p.store.messages, this.state.messages))
    {
    this.setState({messages:p.store.messages});
    }
    if(p.store.channelKey!==this.state.current)
    {
        //this.setState({current:p.store.currentCh});
        //this.checkListener(true,p.store.channelKey,p.store.channelName);
        this.setState({current:p.store.channelKey,channel:p.store.channelName}); 
    }
  }
  checkListener = (check,current,channel) =>
  {
    if(check)
    {
      
      if(current!==this.state.current)
      {
        this.ref.off();
        this.createListener(current);
        this.setState({current,channel}); 
      }
    }
    else
    {
      this.createListener(current);
    }
  }
  /*createListener = (current) =>
  {
    console.log(current)
    //this.ref = this.props.db.database().ref('messages');
    this.ref = this.props.db.database().ref('messages').orderByChild("channel_key").equalTo(current);
    this.ref.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

 
  getData = (values) =>
  {
    let messagesVal = values;
    let messages = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        messages: messages
      });
  }*/

  render() {
    let clonedMessages= _.cloneDeep(this.state.messages);
    let messageNodes = clonedMessages.reverse().map((message,index) => {
      return (

            <Message key={index} message = {message} />
      )
    });
    return (
      <div>
        <div style={{marginBottom:"20px"}}>
        Messages displayed from channel named <b>{this.state.channel}</b>
        </div>
        {messageNodes}
      </div>
    );
  }
}

export default MessageList