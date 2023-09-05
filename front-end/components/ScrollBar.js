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

        // Create a dummy list of objects
        const dummyData = [
            {
                key: 0,
                url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg",
                title: "Sept 5 2023",
                para: "Whiskers, a regal Siamese, checked into the cat hotel with an air of sophistication. His refined tastes include gourmet treats and daily massages."
            },
            {
                key: 1,
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/767px-Cat_November_2010-1a.jpg",
                title: "Sept 2 2023",
                para: "Missy, a fluffy calico, charmed everyone with her playful antics. She's the life of the party, organizing nightly games for fellow feline guests."
            },
            {
                key: 2,
                url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg",
                title: "Aug 28 2023",
                para: "Midnight, a sleek black cat, prefers the quiet corner. A mysterious aura surrounds him, and he's often found gazing out the window at the moon."
            },
            {
                key: 3,
                url: "https://i.pinimg.com/736x/1e/48/74/1e4874d6bc77f3bc45d5218b725f07ec.jpg",
                title: "Aug 14 2023",
                para: "Tiger, a ginger tabby, loves the limelight. He's the hotel's resident Instagram star, striking poses for the camera and flaunting his luxurious coat."
            },
            {
                key: 4,
                url: "https://images.squarespace-cdn.com/content/v1/53d40acae4b00000003f5e7c/1628679307553-H92EWPRWOUHF1CJ92PHB/skootybed.jpg",
                title: "Aug 12 2023",
                para: "Marmalade, an orange tabby, is a gourmet enthusiast. She demands a diverse menu, sampling every dish and providing valuable feedback."
            },
            {
                key: 5,
                url: "https://www.petsworld.in/blog/wp-content/uploads/2014/09/funny-cat.jpg",
                title: "Aug 8 2023",
                para: "Ollie, the mischievous tuxedo cat, is an escape artist. He keeps the staff on their toes with his cunning attempts to explore beyond the hotel's confines."
            }
        ]
        
        // Map list to a list of thumbnails component
        const thumbnails = dummyData.map((item) =>

            <PostThumbnail
            key={item.key}
            url={item.url}
            title={item.title}
            para={item.para}
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