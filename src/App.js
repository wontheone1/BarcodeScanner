import React from 'react';
import KeyEvent from 'react-native-keyevent';

import {View, Text} from 'react-native';

var ReasonApp = require('./App.bs').make;

const App = () => {
  React.useEffect(() => {
    KeyEvent.onKeyDownListener(keyEvent => {
      console.log('onKeyDownListener');
      console.log(`onKeyDown keyCode: ${keyEvent.keyCode}`);
      console.log(`Action: ${keyEvent.action}`);
      console.log(`Key: ${keyEvent.pressedKey}`);
    });
  });
  return (
    <View>
      <Text>Registering key listener</Text>
      <ReasonApp />
    </View>
  );
};

export default App;
