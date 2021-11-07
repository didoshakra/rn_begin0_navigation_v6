//WebViewScr//https://www.kindacode.com/article/how-to-render-html-content-in-react-native/
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

const HTML = `
<h1>This Is A Heading</h1>
<h2>And below is my dog</h2>
<img src="https://www.kindacode.com/wp-content/uploads/2020/10/dog_sample.jpg" alt="My Dog"/>
<br/>
<hr/>
<br/>
<em style="textAlign: center;">Have a nice day with React Native</em>
<div>
  <p>This is a paragraph</p>
</div>
`;

const WebViewScr = () => {
  return (
    <View style={styles.container}>
      <WebView
        // style={{color:'red'}}
        originWhitelist={['*']}
        source={{ html: '<h1>This is a static HTML source!</h1>' }}
      />
      <WebView
        // style={styles.webview}
        originWhitelist={['*']}
        source={{html: HTML}}
        // source={{ html: '<h1>This is a static HTML source!</h1>' }}
        // source={{uri: 'https://reactnative.dev/'}}
      />
      <WebView
        // style={styles.webview}
        originWhitelist={['*']}
        // source={{html: HTML}}
        // source={{ html: '<h1>This is a static HTML source!</h1>' }}
        source={{uri: 'https://reactnative.dev/'}}
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

export default WebViewScr;
