import React, {Component} from 'react';
import MessageBox from './MessageBox'
import MessageList from './MessageList'
import NickBox from './NickBox'
import ChannelBox from './ChannelBox'
import ChannelList from './ChannelList'


class Container extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <div>
          
            <div className="inline">
            <NickBox action={this.props.action} store={this.props.store}/>
            <MessageBox db={this.props.db} store={this.props.store}/>
            <MessageList db={this.props.db} store={this.props.store}/>
            </div>
            <div className="inline">
              <ChannelBox db={this.props.db} store={this.props.store}/>
              <ChannelList action={this.props.action} db={this.props.db} store={this.props.store}/>
            </div>
        </div>
    )
  }
}

export default Container