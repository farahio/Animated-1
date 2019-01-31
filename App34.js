import React, { Component } from 'react';
import { Animated, Dimensions } from 'react-native'
import { StyleSheet, TouchableHighlight, Text, View,ParallaxScrollView, Image, ScrollView, Button, LayoutAnimation, TouchableWithoutFeedback, FlatList, TextInput, Easing, AsyncStorage, Platform, UIManager, TouchableOpacity } from 'react-native';
import data34 from './DataComponent34'
import data341 from './Data34-1Component'

const HEADER_EXPANDED_HEIGHT = 380
const HEADER_COLLAPSED_HEIGHT = 120
const { width: SCREEN_WIDTH } = Dimensions.get('screen')
let deviceWidth = Dimensions.get('window').width;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


const { width } = Dimensions.get('window');



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tuch: false,
            fadeIn: new Animated.Value(0),
            selected: null,
            count: false,
            scrollY: new Animated.Value(0)
        }
    }
    fadeIn = () => {
        this.state.fadeIn.setValue(0);
        Animated.timing(
            this.state.fadeIn,
            {
                toValue: 0,
                duration: 2500,
            }
        ).start()
        this.setState({
            tuch: !this.state.tuch
        })
    }

    onpress2 = () =>
        this.setState({
            count: !this.state.count
        })

    onpress = () =>
        this.setState({
            tuch: !this.state.tuch
        })
    render() {
        const headerTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        const heroTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
            extrapolate: 'clamp',
        })
      
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>





                   <Animated.View style={{ height: headerHeight}}>
                        <Animated.View style={{ opacity: headerTitleOpacity }}>

                            <View style={{ flex: 1.5 }}>
                                <Image
                                    source={require('./asscet/city4.png')}
                                    style={{ width: deviceWidth, height: 225, position: 'absolute', opacity: .8}}
                                />
                                <View style={{ flexDirection: 'row', marginTop: 70, justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Image
                                        source={require('./asscet/smoky.png')}
                                        style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: 'white', marginLeft: 20 }}
                                    />
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>Brad Beardman</Text>
                                        <Text style={{ fontSize: 10, color: 'white' }}>42,5k Followers</Text>
                                    </View>
                                    <View style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: 50, marginRight: 20 }}>
                                        <Image
                                            source={require('./asscet/userfollow.png')}
                                            style={{ width: 40, height: 40, }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View style={{ fontSize: 30, height: headerHeight}} >

                            <View>
                                <Animated.View style={{height: headerHeight}}>
                                <Image
                                    source={require('./asscet/city4.png')}
                                    style={{ width: deviceWidth, height: 250, position: 'absolute', }}
                                    resizeMode='cover'
                                />
                                </Animated.View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Image
                                        source={require('./asscet/smoky.png')}
                                        style={{ width: 90, height: 90, borderRadius: 45, borderWidth: 2, borderColor: 'white', marginTop: 190, marginLeft: 15 }}
                                    />
                                    
                                    <View style={{ width: 100, height: 40, backgroundColor: '#ff80df', borderRadius: 25, marginTop: 230,marginRight:15, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Follow</Text>
                                    </View>
                                   </View>

                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Brad Beardman</Text>
                                    <View style={{ flexDirection: 'row', marginLeft: 10,}}>
                                        <Image
                                            source={require('./asscet/locat2.png')}
                                        />
                                        <Text style={{ color: '#636B70' }}>San Fransisco,CA</Text>
                                    
                                    </View>
                                   <View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>
                                    <Text style={{ marginLeft: 2 }}>1,209</Text>
                                    <Text style={{ marginLeft: 2, color: '#636B70' }}>Following</Text>
                                    <Text style={{ marginLeft: 8 }}>42,5k</Text>
                                    <Text style={{ marginLeft: 2, color: '#636B70' }}>Followers</Text>
                                    </View>
                            
                            </View>
                        </Animated.View>

                    </Animated.View>
                    <View style={{ height: 30,}}>

                        <View style={{ flexDirection: 'row', backgroundColor:'white'}}>

                            <FlatList
                                data={data34}
                                horizontal={true}
                                keyExtractor={item => item.id}
                                extraData={this.state.selected}
                                renderItem={({ item }) =>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <TouchableHighlight underlayColor={'white'} onPress={this.fadeIn} style={{ width: 100, height: 30, alignItems: 'center' }}


                                            onPress={() => this.setState({ selected: item.id })}>

                                            {
                                                this.state.selected !== item.id ?
                                                    <Animated.View style={{ width: 90, height: 30, justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderBottomWidth: 2 }}>
                                                        <Text style={{ fontSize: 10, color: '#636B70' }}>{item.title}</Text>
                                                    </Animated.View>
                                                    :
                                                    <Animated.View style={{ width: 90, height: 30, justifyContent: 'center', alignItems: 'center', borderColor: '#ff4dd2', borderBottomWidth: 2 }}>
                                                        <Text style={{ fontSize: 10, color: 'black', borderColor: 'red', borderBottomWidth: 1 }}>{item.title}</Text>
                                                    </Animated.View>
                                            }



                                        </TouchableHighlight>

                                    </View>

                                }

                            />

                        </View>

                    </View>


                    <View style={{ flex: 8, }}>



                        <ScrollView 
                            onScroll={Animated.event(
                                [{
                                    nativeEvent: {
                                        contentOffset: {
                                            y: this.state.scrollY
                                        }
                                    }
                                }])}
                            scrollEventThrottle={16}>
                            <View style={{ flex: 1, }}>

                                <FlatList
                                    data={data341}
                                    keyExtractor={item => item.nameimage}
                                    extraData={this.state.count}
                                    renderItem={({ item }) =>


                                        <View style={{ flex: 3.3, backgroundColor: '#fff' }}>
                                            <View style={{ flex: 2.5, }}>
                                                <Image
                                                    source={item.imagecover}
                                                    style={{ width: deviceWidth, height: 230, position: 'absolute' }}
                                                />
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 212, marginLeft: 5 }}>
                                                    <Image
                                                        source={require('./asscet/locat.png')}
                                                        style={{ width: 10, height: 10 }}
                                                    />
                                                    <Text style={{ color: '#B0BBC2', fontSize: 10 }}>{item.locat}</Text>

                                                </View>
                                                <View style={{ flex: 1, }}>
                                                    <View style={{ flex: .7, }}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
                                                            <View style={{ flexDirection: 'row' }}>


                                                                <TouchableHighlight underlayColor={'rgba(100,100,100,0)'} onPress={this.onpress2} style={{ width: 20, height: 20, marginLeft: 10 }}>
                                                                    {!this.state.count ?

                                                                        <Animated.View>

                                                                            <Image
                                                                                source={require('./asscet/likeblack.png')}
                                                                                style={{ width: 20, height: 20, }}
                                                                            />
                                                                        </Animated.View>
                                                                        :
                                                                        <Animated.View>
                                                                            <Image
                                                                                source={require('./asscet/likeme.png')}
                                                                                style={{ width: 20, height: 20 }}
                                                                            />
                                                                        </Animated.View>
                                                                    }
                                                                </TouchableHighlight>

                                                                {/* 

                                                            <Image
                                                                source={require('./asscet/likeblack.png')}
                                                                style={{ width: 20, height: 20, marginLeft: 10 }}
                                                            /> */}
                                                                <Image
                                                                    source={require('./asscet/comment.png')}
                                                                    style={{ width: 20, height: 20, marginLeft: 10 }}
                                                                />
                                                            </View>
                                                            <Text style={{ marginRight: 10, color: '#bfbfbf', fontSize: 13 }}>{item.date}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: .8, }}>
                                                        <View style={{ marginLeft: 13, marginTop: 10 }}>
                                                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.titliview}</Text>
                                                            <Text style={{ fontSize: 12, color: '#333333' }}>{item.nameimage}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ height: 35, marginTop: 10, }}>
                                                        <View>
                                                            <Text style={{ color: '#bfbfbf', marginLeft: 13, fontSize: 12 }}>View Comments</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>

                                        </View>
                                    }
                                />

                            </View>



                        </ScrollView>
                    </View>


                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    countoff: {

    },
    count: {

    },
    _highlight: {
        backgroundColor: '#efefef'
    },
    _highlightselected: {
        backgroundColor: '#fff'
    }


})