import Fire from '../components/Fire';
import _ from 'lodash';

const st = {
  nick:"Guest",
  channelKey:"-L3JEI-1VyHnGvXwGEuu",
  channelName:"welcome",
  channels:[],
  messages:[]
};


export default function counter(state = st, action) {

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    case 'SETNICK':
            state.nick=action.data;
      return state
    case 'SETCHANNEL':
            state.channelKey=action.data.key;
            state.channelName=action.data.name;
      return state
    case 'SETMESSAGES':
            state.messages=action.data;
      return state
    case 'SETCHANNELS':
            state.channels=action.data;
      return state
    default:
      return state
  }
}
