import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight, // Adjust the marginTop to create space for the status bar
  },
});

function StatusBarLayout({children}) {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
        <View style={styles.container}>
          {children}
        </View>
      </SafeAreaView>
  );
}

export default StatusBarLayout