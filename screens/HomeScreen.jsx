import { View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import TweetActions from '../components/Home/TweetActions'
import TweetContent from '../components/Home/TweetContent'
import TweetInfo from '../components/Home/TweetInfo'
import TweetImageProfile from '../components/Home/TweetImageProfile'
import { AntDesign } from '@expo/vector-icons'
import GlobalStyles from '../assets/style/GlobalStyles'

export default function HomeScreen({navigation}) {
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

    function gotoNewTweet() {
        navigation.navigate('New Tweet');
    }

    const renderItem = ({item}) => (
        <View style={styles.tweetContainer}>
            <TweetImageProfile navigation={navigation}/>
            <View style={{flex: 1}} >
                <TweetInfo item={item} navigation={navigation}/>
                <TweetContent navigation={navigation}/>
                <TweetActions />
            </View>
        </View>
    )
    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => (
                    <View style={GlobalStyles.tweetSeparator}></View>
                )}
            />
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => gotoNewTweet()}
            >
                <AntDesign
                    name='plus'
                    size={26}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tweetContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d9bf1',
        position: 'absolute',
        bottom: 20,
        right: 12
    }
})