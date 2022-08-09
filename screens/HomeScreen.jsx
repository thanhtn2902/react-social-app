import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    let DATA = [
        {
            id: '1',
            title: 'Title 1'
        },
        {
            id: '2',
            title: 'Title 2'
        },
        {
            id: '3',
            title: 'Title 3'
        },
        {
            id: '4',
            title: 'Title 4'
        },
        {
            id: '5',
            title: 'Title 5'
        },
        {
            id: '6',
            title: 'Title 6'
        },
        {
            id: '7',
            title: 'Title 7'
        },
        {
            id: '8',
            title: 'Title 8'
        },
        {
            id: '9',
            title: 'Title 9'
        },
        {
            id: '10',
            title: 'Title 10'
        }
    ];
    let randomAvatar = 'https://i.pravatar.cc/300'

    function gotoProfile() {
        navigation.navigate('Profile Screen');
    }

    function gotoSingleTweet() {
        navigation.navigate('Tweet Screen');
    }

    const renderItem = ({item}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={() => gotoProfile()}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: randomAvatar
                    }}
                />
            </TouchableOpacity>
            <View style={{flex: 1}} >
                <TouchableOpacity style={styles.tweetFlex} onPress={() => gotoProfile()}>
                    <Text numberOfLines={1} style={styles.tweetName}>
                        {item.title}
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
                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet()}>
                    <Text style={styles.tweetContent}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates ipsa voluptate optio aut architecto blanditiis facilis soluta sit hic?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tweetFlex: {
        flexDirection: 'row'
    },
    tweetContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    avatar: {
        height: 42,
        width: 42,
        marginRight: 8,
        borderRadius: 21
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222'
    },
    tweetHandle: {
        marginHorizontal: 8,
        color: 'gray'
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
        lineHeight: 20
    }
})