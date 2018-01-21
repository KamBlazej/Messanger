import React, {Component} from 'react';
import MessageBox from './MessageBox'
import MessageList from './MessageList'
import NickBox from './NickBox'
import ChannelBox from './ChannelBox'
import ChannelList from './ChannelList'


class ListenerMessages extends Component {

  constructor(props){
    super(props);
    this.state = {
        current: this.props.store.channelKey
      };
      this.ref=null;
  }

  componentDidMount() 
  {
    this.checkListener(false,this.state.current);
  }
  componentWillReceiveProps(p)
  {
    if(p.store.channelKey!==this.state.current)
    {
        this.checkListener(true,p.store.channelKey);
    }
  }
  checkListener = (check,current) =>
  {
    if(check)
    {
      
      if(current!==this.state.current)
      {
        this.ref.off();
        this.createListener(current);
        this.setState({current}); 
      }
    }
    else
    {
      this.createListener(current);
    }
  }
  createListener = (current) =>
  {
 
    //this.ref = this.props.db.database().ref('messages');
    this.ref = this.props.db.database().ref('messages').orderByChild("channel_key").equalTo(current);
    this.ref.on('value', snapshot => {
      this.getMessages(snapshot.val());
    });
  }

 
  getMessages = (values) =>
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
      /*this.setState({
        messages: messages
      });*/
      this.props.action("SETMESSAGES",messages);
  }

  render() {
    return null
  }
}

export default ListenerMessages