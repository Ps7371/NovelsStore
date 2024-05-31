
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
import renderItem from './renderItem';
function renderMyBookSection(item) {
 
  return (
    <View style={{}}>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 19,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{...FONTS.h2, color: COLORS.white}}>My Book</Text>

        <TouchableOpacity onPress={() => console.log('See More')}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.lightGray,
              alignSelf: 'flex-start',
              textDecorationLine: 'underline',
            }}>
            see more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Books */}
      <View style={{ marginTop: SIZES.padding}}>
      {item?.map(items => (
          <renderItem
            key={item._id}
            id={item._id}
       item={items}
          />
        ))}
      </View>
    </View>
  );
}


const FeaturedRow = ({item}) => {
    return (
       <View>{renderMyBookSection(item)}</View>
      );
}

export default FeaturedRow