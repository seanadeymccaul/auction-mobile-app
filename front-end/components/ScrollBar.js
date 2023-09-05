import React from 'react';
import { Text, SafeAreaView, ScrollView, RefreshControl, Image } from 'react-native';
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
            url="https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg"
            title={"title " + item}
            para={"post content " + item}
            />

        )

    return(

        <SafeAreaView>

            <ScrollView 
                contentContainerStyle={{paddingBottom:25, paddingTop:5}}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
            }>

            {thumbnails}

            <Image style={{width:180,height:180,marginRight:'auto',marginLeft:'auto', marginTop: 25, marginBottom:20}} source={require("../assets/end.png")}></Image>

            <Text style={{textAlign: 'center', fontSize: 25}}>That's all for now!</Text>
            
            </ScrollView>

      </SafeAreaView>

    )
}

export default ScrollBar;