import React, { useEffect,useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {color} from 'react-native-reanimated';
;
import { urlFor } from "../sanity";
import {COLORS, FONTS, SIZES, icons, images} from '../constants';


const renderItem = () => {

    return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate('BookDetail', {
              book: item,
            })
          }>
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 150,
              height: 230,
              borderRadius: 20,
            }}
          />
  
          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.clock_icon}
              style={{
                width: 15,
                height: 15,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
              {item.lastRead}
            </Text>
  
            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 15,
                height: 15,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
  
}

export default renderItem