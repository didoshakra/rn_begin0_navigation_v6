//RenderHtml.js//https://www.kindacode.com/article/how-to-render-html-content-in-react-native/
import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';

import HTML from 'react-native-render-html';

const CONTENT = `
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

const RenderHtml = () => {
  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <HTML source={{html: CONTENT}} contentWidth={contentWidth} />
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

export default RenderHtml;
