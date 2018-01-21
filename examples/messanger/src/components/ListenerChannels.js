import React, {Component} from 'react';
import MessageBox from './MessageBox'
import MessageList from './MessageList'
import NickBox from './NickBox'
import ChannelBox from './ChannelBox'
import ChannelList from './ChannelList'


class ListenerChannels extends Component {

  constructor(props){
    super(props);
    this.state = {
        current: this.props.store.channelKey
      };
      let app = this.props.db.database().ref('channels');
      //let app = this.props.db.database().ref('messages').orderByChild("author").equalTo(this.props.store.nick);
      app.on('value', snapshot => {
        this.getData(snapshot.val());
      });
  }
  getData(values){
    let channelsVal = values;
    let channels = _(channelsVal)
                      .keys()
                      .map(channelKey => {
                          let cloned = _.clone(channelsVal[channelKey]);
                          cloned.key = channelKey;
                          return cloned;
                      })
                      .value();
    this.props.action("SETCHANNELS",channels);
  }



  render() {
    return null
  }
}

export default ListenerChannels