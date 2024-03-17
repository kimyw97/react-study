import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.log(text);


  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{text}</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.weather} pagingEnabled={true}
                  indicatorStyle={'black'}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Clouds</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Clouds</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Clouds</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Clouds</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#049589'
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 68,
    fontWeight: '500'

  },
  weather: {
    backgroundColor: '#fff'
  },
  day: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center'
  },
  temp: {
    marginTop: 38,
    fontSize: 158
  },
  description: {
    marginTop: -30,
    fontSize: 60
  }
});
