import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Lottie
          style={{flex: 1}}
          source={require('../assets/animations/confetti.json')}
          autoPlay
          loop
          resizeMode="cover"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Todo')}
        style={styles.addTaskButton}>
        <LinearGradient
          style={styles.addTaskButton}
          colors={['#789DBC', '#FFE3E3']}>
          <Text style={styles.addTaskText}>New Task, Who's In?</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        //onPress={() => navigation.navigate('Todo')}
        style={styles.resetButton}>
        <LinearGradient
          style={styles.resetButton}
          colors={['#7EACB5', '#FADFA1']}>
          <Text style={styles.resetText}>Reset</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fef3c7',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  addTaskButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  addTaskText: {
    color: '#1E3E62',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resetButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },

  resetText: {
    color: '#0B192C',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
