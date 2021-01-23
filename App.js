

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
	Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from './components/Video'
import data from './data.json'

export default class App extends Component {
  render() {
    let video = this.props.data;
let i;

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./images/logo.png')} style={{ width: 98, height: 22 }} />
          <View style={styles.rightNav}>
            <TouchableOpacity>
          <Icon style={styles.navItem}name="search" size={25} color="gray"/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Icon style={styles.navItem}name="account-circle" size={25} color="gray" />
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
      <FlatList 
      showsHorizontalScrollIndicator={false}
      data={data.items}
      keyExtractor={(item) => item.id}
      renderItem={(video) => <Video data={video.item}/>}
      
      />
      
        </View>

      <View style={styles.tapBar}>

      <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} color="gray"/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} color="gray"/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25}color="gray" />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25} color="gray"/>
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 5
  },
  navIcon: {
    marginLeft: 25
  },
  tabItem:{
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
  },
  tapBar: {
    backgroundColor: 'white',
    height: 50,
    borderTopWidth: 0.5,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  body: {
    flex: 1,
  }

});
