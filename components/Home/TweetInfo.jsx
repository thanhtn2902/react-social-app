import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from '../../assets/style/GlobalStyles';

export default function TweetInfo(props) {
    function gotoProfile() {
        props.navigation.navigate('Profile Screen');
    }
    return (
        <View>
            <TouchableOpacity style={GlobalStyles.flexRow} onPress={() => gotoProfile()}>
                <Text numberOfLines={1} style={GlobalStyles.boldText}>
                    {props.item.title}
                </Text>
                <Text numberOfLines={1} style={styles.tweetHandle}>
                    @nathan1206
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
    tweetHandle: {
        marginHorizontal: 8,
        color: 'gray'
    },
})