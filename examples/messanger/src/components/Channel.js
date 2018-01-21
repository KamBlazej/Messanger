import React, {Component} from 'react';

class Channel extends Component {

  constructor(props){
    super(props);
  }
  clicked = () =>
  {
    this.props.clicked(this.props.channel.key,this.props.channel.name);
  }

  render() {
      var channel=this.props.channel;
      var clas="";
      if(this.props.set)
      {
        clas="channelSet";
      }
    return (
        <div className={"channel "+clas} onClick={this.clicked}>
            {channel.name}

        </div>
    )
  }
}

export default Channel