import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StartMeetingPage = ({ navigation, route }) => {
  const { meetingCode } = route.params;

  return (
    <LinearGradient
      colors={['#ffffff', '#767676']} // Gradient colors
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Image source={require('../assets/R.png')} style={styles.logo} />
        <Text>Start Meeting Page</Text>
        <Text>Meeting Code: {meetingCode}</Text>
        
        {/* Button to navigate to CreatePoll.js */}
        <TouchableOpacity onPress={() => navigation.navigate('CreatePoll')} style={styles.button}>
          <Text>Create Poll</Text>
        </TouchableOpacity>

        {/* Home Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Image
            source={require('../assets/homegear.png')}
            style={styles.homeButtonImage}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Adjust as needed
    height: 150, // Adjust as needed
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  homeButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  homeButtonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default StartMeetingPage;
