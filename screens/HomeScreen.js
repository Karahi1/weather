import React, { useLayoutEffect, useState } from "react";
import StyleSheet from './../Styles';
import { AntDesign } from '@expo/vector-icons';
import News from "./News";

export default function HomeScreen({navigation}) {
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'lightblue'
            },
            headerRight: () => (
                <AntDesign
                    style={StyleSheet.navButton}
                        name="arrowright"
                        size={24}
                        onPress={() => navigation.navigate('Weather')}
                />
            )
        })
    }, [])

    return (
        <News />
    )
}
