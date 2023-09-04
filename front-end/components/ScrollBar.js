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

    // Create the list of thumbnails

        // Create a dummy list
        const dummyList = [1, 2, 3, 4, 5, 6, 7];
        
        // Map list to a list of thumbnails component
        const thumbnails = dummyList.map((item) =>

            <PostThumbnail
            key={item}
            image="../assets/logo.png"
            title={"title " + item}
            para={"post content " + item}
            />

        )

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

            {thumbnails}

            </ScrollView>

      </SafeAreaView>

    )
}

export default ScrollBar;