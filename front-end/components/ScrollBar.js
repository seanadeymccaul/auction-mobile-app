import React from 'react';
import { Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import PostThumbnail from './PostThumbnail';

function ScrollBar() {

    // State for refresh control

        // Use the state
        const [refreshing, setRefreshing] = React.useState(false);

        // On refresh
        const onRefresh = React.useCallback(() => {
            setRefreshing(true);
            setTimeout(() => {
            setRefreshing(false);
            }, 2000);
        }, []);

    return(

        <SafeAreaView>

            <ScrollView 
                contentContainerStyle={{paddingBottom:"56%"}}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
            }>

            <PostThumbnail/>
        
            </ScrollView>
      </SafeAreaView>

    )
}

export default ScrollBar;