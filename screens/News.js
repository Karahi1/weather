import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import StyleSheet from './../Styles';

const URL= 'https://newsapi.org/v2';
const APIKEY = 'f133acc08ab0465588722c5f1725a6eb';

export default function News({navigation}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const criteria = 'top-headlines?country=us&category=business';
        const address = URL + '/' + criteria + '&apikey=' + APIKEY;
        fetch(address)
        .then(res => res.json())
        .then(
            (result) => {
                setError(null);
                setIsLoaded(true);
                setItems(result.articles);
            }, (error) => {
                setError(error);
                setIsLoaded(true);
                setItems([]);
            }
        )
    }, [])

    if (error) {
        return (
            <View style={StyleSheet.containerNews}>
                <Text>{error.message}</Text>
            </View>
        );
    }
    else if (!isLoaded) {
        return (
            <View style={StyleSheet.containerNews}>
                <Text>Loading...</Text>
            </View>
        )
    }
    else {
        return (
            <View style={StyleSheet.containerNews}>
                <ScrollView>
                    {items.map(item => (
                        <Pressable key={item.title} onPress={() => navigation.navigate('Details')}>                       
                            <View style={StyleSheet.news}>
                                <Text style={StyleSheet.title}>{item.title}</Text>
                                <View style={StyleSheet.imageWrapper}>
                                    <Image
                                        style={StyleSheet.thumbnail}
                                        source={{
                                            uri: item.urlToImage,
                                        }}
                                    />
                                </View>
                            </View>
                        </Pressable>                       
                    ))}
                </ScrollView>
            </View>
        )
    }
}