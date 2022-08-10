import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TweetInfo(props) {
    function gotoProfile() {
        props.navigation.navigate('Profile Screen');
    }
    return (
        <View>
            <TouchableOpacity style={styles.flexRow} onPress={() => gotoProfile()}>
                <Text numberOfLines={1} style={styles.tweetName}>
                    {props.item.title}
                </Text>
                <Text numberOfLines={1} style={styles.tweetHandle}>
                    @nathan99
                </Text>
                <Text numberOfLines={1} style={styles.tweetHandle}>
                    &middot;
                </Text>
                <Text numberOfLines={1} style={styles.tweetHandle}>
                    9m
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row'
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222'
    },
    tweetHandle: {
        marginHorizontal: 8,
        color: 'gray'
    },
})