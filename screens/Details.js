import React, { useState, useEffect } from "react";
import StyleSheet from './../Styles';
import { Text, View, Image } from 'react-native';

export default function Details({route}) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (route.params?.news) {
            setTitle(route.params.news.title);
            setImage(route.params.news.urlToImage);
            setDescription(route.params.news.description);
        }
    }, [route.params?.news])

    return (
        <View style={StyleSheet.containerOneNews}>
            <Text style={StyleSheet.title}>{title}</Text>
            {image.length > 0 &&
                <View style={StyleSheet.imageWrapper}>
                    <Image
                        style={StyleSheet.image}
                        source={{
                            uri: image,
                        }}
                    />
                </View>
            }
            <Text>{description}</Text>
        </View>
    )
}
