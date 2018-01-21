import React, {Component} from 'react';
import trim from 'trim';

class NickBox extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      nick: this.props.store.nick
    };
  }
  componentWillReceiveProps(p)
  {
    if(p.store.nick!==this.state.nick)
    {
        this.setState({nick:p.store.nick});
    }
  }
  onChange(e){
      this.setState({
        nick: trim(e.target.value)
      });
  }
  onKeyup(e){
      var _this=this;
    if(e.keyCode === 13){
      e.preventDefault();
      this.setNick(e.target.value);
      /*this.setState({
        nick: trim(e.target.value),
      });*/
    }
  }
  onBlur = () =>{
    this.setNick(this.state.nick);
  }
  setNick = (v) =>
  {
    var val=trim(v);
    if(val!== '')
    {
    this.props.action("SETNICK",val);
    }
    else
    {
    this.props.action("SETNICK","Guest");
        /*this.setState({
        nick: "Guest",
        });*/
    }
     
  }

  render() {
    return (
    <div>
        Your NickName
        <form>
        <textarea
            className="textarea"
            placeholder="Type your NickName"
            cols="70"
            onChange={this.onChange}
            onBlur={this.onBlur}
            onKeyUp={this.onKeyup}
            value={this.state.nick}>
          </textarea>
          </form>
    </div>
    )
  }
}

export default NickBox