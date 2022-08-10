import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../assets/style/GlobalStyles'

export default function NewTweet({ navigation }) {
    const [tweet, setTweet] = useState('');

    function sendTweet() {
        navigation.navigate('Tab')
    }

    return (
        <View style={[GlobalStyles.container, styles.newTweetContainer]}>
            <View style={styles.tweetBtnContainer}>
                <Text style={tweet.length > 250 ? GlobalStyles.textDanger : GlobalStyles.textGray}>
                    Character left: {280 - tweet.length}
                </Text>
                <TouchableOpacity
                    style={[styles.tweetBtn, tweet.length === 0 ? styles.disabled : styles.enabled]}
                    onPress={() => sendTweet()}
                    disabled={tweet.length === 0}
                >
                    <Text style={
                        [
                            GlobalStyles.boldText,
                            GlobalStyles.textWhite
                        ]
                    }>
                        Tweet
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tweetBoxContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setTweet}
                    value={tweet}
                    placeholder="How do you feel today?"
                    placeholderTextColor="gray"
                    multiline
                    maxLength={280}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    newTweetContainer: {
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    tweetBtnContainer: {
        paddingVertical: 4,
        paddingHorizontal: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tweetBtn: {
        backgroundColor: '#33ccff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24
    },
    avatar: {
        height: 42,
        width: 42,
        marginRight: 8,
        marginTop: 10,
        borderRadius: 21
    },
    tweetBoxContainer: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
        lineHeight: 28,
        padding: 10
    },
    enabled: {
        opacity: 1,
    },
    disabled: {
        opacity: 0.5
    }
})