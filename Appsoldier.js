import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, Animated } from 'react-native';
import data3cover from './DataComponentsoldiercover'

const { width } = Dimensions.get('window');


export default class Slideshow extends React.Component {
  scrollX = new Animated.Value(0)

  render() {
    let position = Animated.divide(this.scrollX, width);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          
          style={{ width, height: width }}
          >
          <ScrollView
            horizontal={true}
            pagingEnabled={true} 
            showsHorizontalScrollIndicator={false}
          
            onScroll={Animated.event( 
              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] 
            )} 
            scrollEventThrottle={16} 
            >
            {data3cover.map((source, i) => {
              return ( 
                  <View key={i} >
                <Image
                  
                  style={{ width, height: width }}
                  source={source.image}
                  
                />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{ flexDirection: 'row' }} 
          >
          {data3cover.map((_, i) => { 
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3], 
   
              extrapolate: 'extend' 
            });
            return (
              <Animated.View 
                key={i} 
                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}