import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TweetContent(props) {
    function gotoSingleTweet() {
        props.navigation.navigate('Tweet Screen');
    }
    return (
        <View>
            <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet()}>
                <Text style={styles.tweetContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates ipsa voluptate optio aut architecto blanditiis facilis soluta sit hic?
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
        lineHeight: 20
    },
})