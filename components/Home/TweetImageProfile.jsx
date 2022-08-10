import { View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function TweetImageProfile(props) {
    const randomAvatar = 'https://i.pravatar.cc/300'

    function gotoProfile() {
        props.navigation.navigate('Profile Screen');
    }
    return (
        <View>
            <TouchableOpacity onPress={() => gotoProfile()}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: randomAvatar
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    avatar: {
        height: 42,
        width: 42,
        marginRight: 8,
        borderRadius: 21
    },
})