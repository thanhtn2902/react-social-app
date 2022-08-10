import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import GlobalStyles from '../../assets/style/GlobalStyles'


export default function TweetActions() {
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const shareIcon = () => {
        return Platform.OS === 'ios' ? 'share-apple' : 'share-google'
    }
    return (
        <View style={styles.tweetEngagement}>
            <TouchableOpacity style={GlobalStyles.flexRow}>
                <EvilIcons
                    name="comment"
                    size={22}
                    color="gray"
                    style={{ marginRight: 2 }}
                />
                <Text style={styles.textGray}>{randomIntFromInterval(1, 1000)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[GlobalStyles.flexRow, styles.ml14]}>
                <EvilIcons
                    name="retweet"
                    size={22}
                    color="gray"
                    style={{ marginRight: 2 }}
                />
                <Text style={styles.textGray}>{randomIntFromInterval(1, 1000)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[GlobalStyles.flexRow, styles.ml14]}>
                <EvilIcons
                    name="heart"
                    size={22}
                    color="gray"
                    style={{ marginRight: 2 }}
                />
                <Text style={styles.textGray}>{randomIntFromInterval(1, 1000)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[GlobalStyles.flexRow, styles.ml14]}>
                <EvilIcons
                    name={shareIcon()}
                    size={22}
                    color="gray"
                    style={{ marginRight: 2 }}
                />
                <Text style={styles.textGray}>{randomIntFromInterval(1, 1000)}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },
    textGray: {
        color: 'gray'
    },
    ml14: {
        marginLeft: 14
    }
})