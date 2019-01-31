import React, { Component } from 'react';
import { Animated, Dimensions } from 'react-native'
import { StyleSheet, TouchableHighlight, Text, View, ParallaxScrollView, Image, ScrollView, Button, LayoutAnimation, TouchableWithoutFeedback, FlatList, TextInput, Easing, AsyncStorage, Platform, UIManager, TouchableOpacity } from 'react-native';
import data34 from './DataComponent34'
import data341 from './Data34-1Component'
let deviceWidth = Dimensions.get('window').width;
export default class App extends Component {
    constructor(props) {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

        this.offset = 0;

        this.state = {
            scrollOffset: new Animated.Value(0),
            titleWidth: 0,
            selected: null,
            count: false,
            showBigProfile:true

        };
    }
    onpress2 = () =>
        this.setState({
            count: !this.state.count
        })

    onpress = () =>
        this.setState({
            tuch: !this.state.tuch
        })

    // componentDidMount() {
    //     this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
    // }

    configureFile={


        duration:100,
        create:{
            type:'spring',
            springDamping:0.5,
            property:'scaleY',
            duration:100
        },
        update:{
            type:'spring',
            springDamping:0.5,
            property:'scaleY',
            duration:100
        },
        delete:{
            type:'spring',
            springDamping:0.5,
            property:'scaleY',
            duration:100
        },
        
    }


    fadeOut=()=>{
        LayoutAnimation.configureNext(this.configureFile)
        this.setState({showBigProfile:false})
     
    }

    fadeIn=()=>{
        this.setState({showBigProfile:true})
        
    }

    onScroll = e => {
        const scrollSensitivity = 4 / 3;
        const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
      
        this.state.scrollOffset.setValue(e.nativeEvent.contentOffset.y);
        if(offset>60){
            this.fadeOut()
            
        }else{
            this.fadeIn()
            

        }
        
    };

    // getListItems = count => {
    //     const items = [];
    //     let i = 0;

    //     while (i < count) {
    //         i++;

    //         items.push(
    //             <View
    //                 style={[
    //                     styles.listItem,
    //                     { backgroundColor: i % 2 === 0 ? '#eee5ff' : '#ceebfd' },
    //                 ]}>
    // <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
    //         </View>
    //     );
    // }

    //     return items;
    // };

    render() {
        const { scrollOffset } = this.state;
        const screenWidth = Dimensions.get('window').width;
let toppest = scrollOffset.interpolate({
    inputRange: [0, 500],
    outputRange: [120, 20],
    extrapolate: 'clamp',
    
})


let photoWidthHeight = scrollOffset.interpolate(
    {
        inputRange:[0,500],
        outputRange:[100,65],
        extrapolate:'clamp'
    }
)


let followWidthHeight = scrollOffset.interpolate(
    {
        inputRange:[0,500],
        outputRange:[100,65],
        extrapolate:'clamp'
    }
)




        return (
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.header,
                        {
                            paddingHorizontal: screenWidth * 0.05,
                            width: screenWidth,
                            height: scrollOffset.interpolate({
                                inputRange: [0, 2000],
                                outputRange: [180, 100],
                                extrapolate: 'clamp',
                                
                            }),


                        },
                    ]}>
                    {/* <Animated.Text
                        onLayout={e => {
                            if (this.offset === 0 && this.state.titleWidth === 0) {
                                const titleWidth = e.nativeEvent.layout.width;
                                this.setState({ titleWidth });
                            }
                        }}
                        style={{
                            fontWeight: 'bold',
                            fontSize: scrollOffset.interpolate({
                                inputRange: [0, 200],
                                outputRange: [26, 20],
                                extrapolate: 'clamp',
                            }),
                        }}>
                     Brad Beardman
          </Animated.Text> */}
                    {/*         
                    <Animated.View
                        style={{
                            width: scrollOffset.interpolate({
                                inputRange: [0, 200],
                                outputRange: [screenWidth * .8 - this.state.titleWidth,0],
                                extrapolate: 'clamp',
                            
                            }),
                        }}
                    /> */}

                    <Image
                        source={require('./asscet/city4.png')}
                        style={{ width: deviceWidth, height: 260, position: 'absolute' }}
                        resizeMode='cover'
                    />

                  


                </Animated.View>


                <Animated.View
                    style={[
                        styles.header2,
                        {
                            paddingHorizontal: screenWidth * 0.05,
                            width: screenWidth,
                            height: scrollOffset.interpolate({
                                inputRange: [0, 100],
                                outputRange: [125, 0],
                            
                                
                            }),


                        },
                    ]}>
                    {this.state.showBigProfile ? <Animated.View style={{backgroundColor: 'white' ,width:deviceWidth, height: scrollOffset.interpolate({
                                inputRange: [0, 100],
                                outputRange: [125, 0],
                                // extrapolate: 'clamp',
                                
                            }),}}>
                        
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10,marginTop:40 }}>Brad Beardman</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                            <Image
                                source={require('./asscet/locat2.png')}
                            />
                            <Text style={{ color: '#636B70' }}>San Fransisco,CA</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10 }}>
                            <Text style={{ marginLeft: 2 }}>1,209</Text>
                            <Text style={{ marginLeft: 2, color: '#636B70' }}>Following</Text>
                            <Text style={{ marginLeft: 8 }}>42,5k</Text>
                            <Text style={{ marginLeft: 2, color: '#636B70' }}>Followers</Text>
                        </View> 

                    </Animated.View> : null }
                </Animated.View> 

                <View style={{ height: 30, }}>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>

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

                <ScrollView
                    style={{ flex: 1, width: '100%' }}
                    contentContainerStyle={{ width: '100%' }}
                    onScroll={this.onScroll}
                    scrollEventThrottle={20}>
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

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',width:360,top:toppest,position:'absolute',}}>
                            <Animated.Image
                                source={require('./asscet/smoky.png')}
                                style={{  width: photoWidthHeight, height: photoWidthHeight, borderRadius: 50, borderWidth: 2, borderColor: 'white'}}
                            />
                            

                            <TouchableHighlight style={{ width: followWidthHeight, height: followWidthHeight, backgroundColor: '#ff80df', borderRadius: 25, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Follow</Text>
                            </TouchableHighlight>
                </Animated.View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    header: {
        backgroundColor: 'whitesmoke',
        borderBottomWidth: 1,
        borderColor: 'gainsboro',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 8,
    },
    header2: {
        borderColor: 'gainsboro',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',

    },
    listItem: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
