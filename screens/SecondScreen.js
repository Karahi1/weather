import React, { useLayoutEffect } from "react";
import StyleSheet from './../Styles';
import Position from "./Position";
import { AntDesign } from '@expo/vector-icons';

export default function SecondScreen({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
            headerLeft: () => (
                <AntDesign
                    style={StyleSheet.navButton}
                        name="arrowleft"
                        size={24}
                        onPress={() => navigation.navigate('Home')}
                />
            )
        })
    }, [])

    return (
        <Position/>
    )
}