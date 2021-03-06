/** @format */

import React, { useState } from 'react';
import './ChatInput.css';
import db from './firebase';
import { useStateValue } from './StateProvider';
import { Button } from '@material-ui/core';
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId }) => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput('');
  };

  return (
    <div className='chatInput'>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <Button type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
