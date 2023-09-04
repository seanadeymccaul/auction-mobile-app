import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import ScrollBar from '../components/ScrollBar';

function HomeScreen({navigation}) {

    return(
        <SafeAreaView>
            <Text style={{textAlign: 'center'}}>Home Screen</Text>
            <ScrollBar/>
        </SafeAreaView>
    )
}

export default HomeScreen;