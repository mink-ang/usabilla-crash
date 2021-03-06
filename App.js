/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import usabilla from 'usabilla-react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    usabilla.initialize("47b06c69-d8f2-433d-9e70-dcd4914b230f");
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Button
              title="Send event"
              onPress={() => {
                usabilla.sendEvent('show');
              }}
            />
            <Button
              title="Reset campaign"
              onPress={() => {
                usabilla.resetCampaignData();
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  }
});

export default App;
