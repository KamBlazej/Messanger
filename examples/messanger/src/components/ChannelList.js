import React, {Component} from 'react';
import Message from './Message';
import Channel from './Channel';
import _ from 'lodash';

class ChannelList extends Component {
  constructor(props){
    super(props);
    this.state = {
      channels: []
    };
    //let app = this.props.db.database().ref('channels');
    //let app = this.props.db.database().ref('messages').orderByChild("author").equalTo(this.props.store.nick);
    /*app.on('value', snapshot => {
      this.getData(snapshot.val());
    });*/
  }
  componentWillReceiveProps(p)
  {
    if(!_.isEqual(p.store.channels, this.state.channels))
    {
    this.setState({channels:p.store.channels});
    }
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
      this.setState({
        channels: channels
      });
  }
  clicked = (key,name) =>
  {
    this.props.action("SETCHANNEL",{key,name});
  }

  render() {
    var _this=this;
    console.log(this.state.channels);
    let channelNodes = this.state.channels.map((channel,index) => {
      var set=false;
      var current=String(this.props.store.channelKey);
      if(channel.key===this.props.store.channelKey)
      {
        set=true;
      }
      return (

            <Channel key={index} clicked={_this.clicked} set={set} channel = {channel} />
      )
    });
    return (
      <div>
        <div>
          <b>Choose Channel</b>
        </div>
        {channelNodes}
      </div>
    );
  }
}

export default ChannelList