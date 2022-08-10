import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, FlatList } from 'react-native'
import React from 'react'
import GlobalStyles from '../assets/style/GlobalStyles'
import { EvilIcons } from '@expo/vector-icons'

export default function ProfileScreen() {
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

    const renderItem = ({ item }) => (
        <View style={{ marginVertical: 20 }}>
            <Text>{item.title}</Text>
        </View>
    )

    const profileHeader = () => (
        <View style={GlobalStyles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: 'https://source.unsplash.com/random'
                }}
            />
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                />
                <TouchableOpacity style={styles.followBtn}>
                    <Text style={[GlobalStyles.boldText, GlobalStyles.textWhite]}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={GlobalStyles.sectionContainer}>
                <Text style={[styles.profileName, GlobalStyles.boldText]}>Nathan June</Text>
                <Text style={[styles.profileHandle, GlobalStyles.textGray]}>@nathan1206</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text>Python, Golang, Javascript, Laravel, VueJS, React Native, Senior Backend Developer. Do cool stuff everyday!</Text>
            </View>
            <View style={[styles.extraInfoContainer, GlobalStyles.flexRow]}>
                <EvilIcons name="location" size={24} color="gray" />
                <Text style={GlobalStyles.textGray}>Ho Chi Minh City, Vietnam</Text>
            </View>
            <View style={[styles.extraInfoContainer, GlobalStyles.flexRow]}>
                <TouchableOpacity
                    style={GlobalStyles.flexRow}
                    onPress={() => Linking.openURL('https://google.com')}
                >
                    <EvilIcons name="link" size={24} color="gray" />
                    <Text style={styles.linkColor}>google.com</Text>
                </TouchableOpacity>
                <View style={[GlobalStyles.flexRow, GlobalStyles.ml16]}>
                    <EvilIcons name="calendar" size={24} color="gray" />
                    <Text style={GlobalStyles.textGray}>Join March 2020</Text>
                </View>
            </View>

            <View style={styles.extraInfoContainer}>
                <View style={GlobalStyles.flexRow}>
                    <Text style={GlobalStyles.boldText}>500</Text>
                    <Text style={styles.followItemLabel}>Following</Text>
                </View>
                <View style={[GlobalStyles.flexRow, GlobalStyles.ml16]}>
                    <Text style={GlobalStyles.boldText}>1,206</Text>
                    <Text style={styles.followItemLabel}>Followers</Text>
                </View>
            </View>

            <View style={styles.separator}></View>
        </View>
    )

    return (
        <FlatList
            style={GlobalStyles.container}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
                <View style={GlobalStyles.tweetSeparator}></View>
            )}
            ListHeaderComponent={profileHeader}
        />
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: 800,
        height: 120
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        marginTop: -44
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: 'white',
    },
    followBtn: {
        backgroundColor: '#0f1418',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24
    },
    nameContainer: {
        paddingHorizontal: 10,
        paddingVertical: 2
    },
    profileName: {
        fontSize: 22
    },
    profileHandle: {
        marginTop: 1
    },
    extraInfoContainer: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 12
    },
    descriptionContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    linkColor: {
        color: '#1d9bf1'
    },
    followItemLabel: {
        marginLeft: 4
    },
    separator: {
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
        marginTop: 15
    }
})