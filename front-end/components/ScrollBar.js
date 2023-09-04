import React from 'react';
import { Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native';

function ScrollBar() {

    // State for refresh control

    return(

        <SafeAreaView>

            <ScrollView 
                contentContainerStyle={{paddingBottom:"56%"}}
            >

            <Text style={{textAlign: 'center'}}>Test Scroll Bar</Text>
        
        </ScrollView>
      </SafeAreaView>

    )
}

export default ScrollBar;