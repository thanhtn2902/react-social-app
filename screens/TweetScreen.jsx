import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Entypo, EvilIcons } from '@expo/vector-icons'
import GlobalStyles from '../assets/style/GlobalStyles'

export default function TweetScreen({ navigation }) {
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const shareIcon = () => {
        return Platform.OS === 'ios' ? 'share-apple' : 'share-google'
    }
    function gotoProfile() {
        navigation.navigate('Profile Screen');
    }

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={GlobalStyles.flexRow} onPress={() => gotoProfile()}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://i.pravatar.cc/300'
                        }}
                    />
                    <View>
                        <Text style={GlobalStyles.boldText}>Nathan June</Text>
                        <Text style={styles.tweetHandle}>@nathan1206</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="grey" />
                </TouchableOpacity>
            </View>
            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum dolor quidem harum quo fuga sapiente reprehenderit quis eaque! Quisquam!
                </Text>
            </View>
            <View style={styles.tweetEngagement}>
                <View style={GlobalStyles.flexRow}>
                    <Text style={[GlobalStyles.boldText, GlobalStyles.engagementFontSize]}>{randomIntFromInterval(1, 400)}</Text>
                    <Text style={[styles.tweetEngagementLabel, GlobalStyles.engagementFontSize]}>Retweets</Text>
                </View>
                <View style={[GlobalStyles.flexRow, styles.ml16]}>
                    <Text style={[GlobalStyles.boldText, GlobalStyles.engagementFontSize]}>{randomIntFromInterval(1, 500)}</Text>
                    <Text style={[styles.tweetEngagementLabel, GlobalStyles.engagementFontSize]}>Quotes</Text>
                </View>
                <View style={[GlobalStyles.flexRow, styles.ml16]}>
                    <Text style={[GlobalStyles.boldText, GlobalStyles.engagementFontSize]}>{randomIntFromInterval(1, 5000)}</Text>
                    <Text style={[styles.tweetEngagementLabel, GlobalStyles.engagementFontSize]}>Likes</Text>
                </View>
            </View>
            <View style={[styles.tweetEngagement, styles.spaceAround]}>
                <TouchableOpacity style={GlobalStyles.flexRow}>
                    <EvilIcons
                        name="comment"
                        size={32}
                        color="gray"
                        style={{ marginRight: 2 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.flexRow, styles.ml14]}>
                    <EvilIcons
                        name="retweet"
                        size={32}
                        color="gray"
                        style={{ marginRight: 2 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.flexRow, styles.ml14]}>
                    <EvilIcons
                        name="heart"
                        size={32}
                        color="gray"
                        style={{ marginRight: 2 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.flexRow, styles.ml14]}>
                    <EvilIcons
                        name={shareIcon()}
                        size={32}
                        color="gray"
                        style={{ marginRight: 2 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    avatar: {
        height: 50,
        width: 50,
        marginRight: 8,
        borderRadius: 30
    },
    tweetHandle: {
        marginTop: 3,
        color: 'gray'
    },
    tweetContentContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetContent: {
        fontSize: 20,
        lineHeight: 30
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetEngagementNumb: {
        fontWeight: 'bold'
    },
    tweetEngagementLabel: {
        color: 'gray',
        marginLeft: 4
    },
    ml16: {
        marginLeft: 16
    },
    ml14: {
        marginLeft: 14
    },
    spaceAround: {
        justifyContent: 'space-around'
    }
})