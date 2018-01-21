import React, {Component} from 'react';
import trim from 'trim';

class ChannelBox extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      name: ""
    };
  }

  onChange(e){
      this.setState({
        name: e.target.value
      });
  }
  onKeyup(e){
      var _this=this;
      var name=trim(e.target.value);
      if(e.keyCode === 13 && name !== ''){
        e.preventDefault();
        let app = this.props.db.database().ref('channels');
        app.once('value', snapshot => {
          //this.getData(snapshot.val());
          let channels=snapshot.val();
          let exist=false;
          Object.keys(channels).forEach(function(key) {
            console.log(key);
            if(channels[key].name===name)
            {
              exist=true;
            }
          });
          if(exist)
            {
              console.log("exist");
            }
            else
            {
              let dbCon = _this.props.db.database().ref('/channels');
              dbCon.push({
                name: name,
                author:_this.props.store.nick
              });
              this.setState({
                name: ''
              });
            }
          
      
        });
        
        
      }
  }

  render() {
    return (
    <div>
        Create new channel
        <form>
        <textarea
            className="textarea"
            placeholder="Type channel name"
            cols="70"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.name}>
          </textarea>
          </form>
    </div>
    )
  }
}

export default ChannelBox