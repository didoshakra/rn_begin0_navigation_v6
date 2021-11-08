//GetStartedScr//https://www.kindacode.com/article/how-to-render-html-content-in-react-native/
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

const GetStartedScr = () => {
  return (
    <View style={styles.container}>
      <WebView
        // style={styles.webview}
        originWhitelist={['*']}
        source={{uri: 'https://reactnavigation.org/docs/getting-started/'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
});

export default GetStartedScr;
