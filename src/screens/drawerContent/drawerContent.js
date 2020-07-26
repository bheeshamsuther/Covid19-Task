import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

export default function DrawerContent(props) {

  return (
    <View style={{flex: 1}}>
      <View style={styles.drawerContent}>
        
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
          
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
           <DrawerItem
           
            label="Country"
            onPress={() => {
              props.navigation.navigate('Country');
            }}
          />
         
          
        </Drawer.Section>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: '#FA4659',
    flexDirection: 'column',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color:"white"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
