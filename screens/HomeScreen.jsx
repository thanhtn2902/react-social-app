import { View, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import TweetActions from '../components/Home/TweetActions'
import TweetContent from '../components/Home/TweetContent'
import TweetInfo from '../components/Home/TweetInfo'
import TweetImageProfile from '../components/Home/TweetImageProfile'

export default function HomeScreen() {
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

    const renderItem = ({item}) => (
        <View style={styles.tweetContainer}>
            <TweetImageProfile />
            <View style={{flex: 1}} >
                <TweetInfo item={item} />
                <TweetContent />
                <TweetActions />
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => (
                    <View style={styles.tweetSeparator}></View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tweetContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },
})