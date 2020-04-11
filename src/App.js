import React from 'react';
import KeyEvent from 'react-native-keyevent';

import {View, Text} from 'react-native';

var ReasonApp = require('./App.bs').make;

const App = () => {
  const [scannedKeyCodes, setScannedKeyCodes] = React.useState(() => []);
  const [scannedKeys, setScannedKeys] = React.useState(() => []);
  const [scannedKeyTypes, setScannedKeyTypes] = React.useState(() => []);
  const [scannedKeyCodesTypes, setScannedKeyCodesTypes] = React.useState(
    () => [],
  );

  React.useEffect(() => {
    KeyEvent.onKeyDownListener(keyEvent => {
      setScannedKeys(prev => {
        prev.push(keyEvent.pressedKey);
        return prev;
      });
      setScannedKeyTypes(prev => {
        prev.push(typeof keyEvent.pressedKey);
        return prev;
      });
      setScannedKeyCodes(prev => {
        prev.push(keyEvent.keyCode);
        return prev;
      });
      setScannedKeyCodesTypes(prev => {
        prev.push(typeof keyEvent.keyCode);
        return prev;
      });
      console.log(`scannedKeys: ${scannedKeys}`);
      console.log(`scannedKeyTypes: ${scannedKeyTypes}`);
      console.log(`scannedKeyCodes: ${scannedKeyCodes}`);
      console.log(`scannedKeyCodesTypes: ${scannedKeyCodesTypes}`);
    });
    return () => KeyEvent.removeKeyDownListener();
  });
  return (
    <View>
      <Text>Registering key listener</Text>
      <ReasonApp />
    </View>
  );
};

export default App;
