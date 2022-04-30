import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={(excerises)}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name}</Text>
                )
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});