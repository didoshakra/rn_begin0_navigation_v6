// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, WebView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {WebView} from 'react-native-webview';
import WebViewScr from './screens/WebViewScr';
import RenderHtml from './screens/RenderHtml';
import GetStartedScr from './screens/GetStartedScr';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          // flex: 1,
          height: 60,
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'yellow',
        }}>
        <Text style={{fontSize: 22, color: 'red'}}>
          React Native Navigation v6
        </Text>
        <Text
          style={{fontSize: 15, color: 'blue'}}
          onPress={() => navigation.navigate('Geting started')}>
          //https://reactnavigation.org/docs/getting-started/
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 22, color: 'red'}}>Home Screen</Text>
        {/* <View style={{flexDirection:'row'}}> */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            title="To Details"
            onPress={() => navigation.navigate('Details')}
          />
          <Button
            title="Web-ViewScr"
            onPress={() => navigation.navigate('Web-ViewScr')}
          />
          <Button
            title="Render-Html"
            onPress={() => navigation.navigate('Render-Html')}
          />
        </View>
      </View>
    </View>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 22, color: 'red'}}>Details Screen</Text>
      <Button
        title="Go to Details... again/ New screen"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="To first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Web-ViewScr" component={WebViewScr} />
        <Stack.Screen name="Render-Html" component={RenderHtml} />
        <Stack.Screen name="Geting started" component={GetStartedScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
