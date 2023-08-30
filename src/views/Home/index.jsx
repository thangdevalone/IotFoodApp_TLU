import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Banner from './components/Banner';
import {colorDF1, colorDF2} from '../../utils/colors';
import Suggest from './components/Suggest';
import Swiper from 'react-native-swiper';
import foodsApis from '../../api/foodsApi';
import ResDetail from './components/ResDetail';
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight, // Adjust the marginTop to create space for the status bar
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 6,
    top: -20,
    width: '80%',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
    zIndex: 1,
  },
  iconContainer2: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    justifyContent: 'center',
    paddingRight: 5,
    zIndex: 1,
  },
  icon: {
    marginRight: 10,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    color: '#374151',
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 8,
    paddingLeft: 45,
    paddingRight: 30, // To create space for the icon
  },
});
function Home() {
  const [recRestaurants, setRecRestaurants] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      try {
        const res = await foodsApis.getRecommendRestaurant();
        setRecRestaurants(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <ScrollView className="bg-white">
        <View className="h-[30vh] max-h-[250px] min-h-[200px]">
          <Banner />
        </View>

        <View style={styles.centerContent}>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={24}
                color={colorDF2}
                style={styles.icon}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Bạn muốn ăn gì bây giờ?"
              placeholderTextColor={colorDF1}
            />
            <View style={styles.iconContainer2}>
              <MaterialIcons name="search" size={24} color={colorDF1} />
            </View>
          </View>
        </View>

        <View className="px-[20px]">
          <Suggest />
          <Text
            className="font-semibold my-3 "
            style={{color: colorDF1, fontSize: 22}}>
            Quán ăn đề xuất
          </Text>
          {recRestaurants && (
            <ScrollView horizontal={true}>
              {recRestaurants.map(item => (
                <ResDetail item={item} key={item.id} />
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
