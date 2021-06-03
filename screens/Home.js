
import React from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity,FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const OptionItem = ({ bgColor, icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 60, height: 60 }]}>
                <LinearGradient
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }]}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = ({ navigation }) => {
    const [foods, setfoods] = React.useState([
        {
            id: 0,
            name: "Beef Burger",
            img: images.burger,
        },
        {
            id: 1,
            name: "Pizza",
            img: images.pizza,
        },
        {
            id: 2,
            name: "Tacos",
            img: images.tacos,
        },
        {
            id: 3,
            name: "Cashew nut salad",
            img: images.cashew_nut_salad,
        },
    ]);

    function renderfoods(item, index) {
        var foodstyle = {};

        if (index == 0) {
            foodstyle = { marginLeft: SIZES.padding, }
        }

        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...foodstyle }}
                onPress={() => { navigation.navigate("FoodDetail") }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 15
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}>
                <Image
                    source={images.homeBanner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 15,
                    }}
                />
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.dessert}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Dessert"
                        onPress={() => { console.log("Dessert") }}
                    />
                    <OptionItem
                        icon={icons.fast_food}
                        bgColor={['#fddf90', '#fcda13']}
                        label="Fast Food"
                        onPress={() => { console.log("Fast Food") }}
                    />
                    <OptionItem
                        icon={icons.salad}
                        bgColor={['#e973ad', '#da5df2']}
                        label="Salad"
                        onPress={() => { console.log("Salad") }}
                    />
                    <OptionItem
                        icon={icons.drinks}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label="Drinks"
                        onPress={() => { console.log("Drinks") }}
                    />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Popular Food Items</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={foods}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderfoods(item, index)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Home;
