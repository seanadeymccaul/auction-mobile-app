import React from 'react';
import { Text, SafeAreaView, Image, Pressable, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";

function PostThumbnail(props) {

    // Get Dimensions of Window
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    // Get Dimensions of Image
    const imageWidth = Image.resolveAssetSource(require("../assets/end.png")).width
    const imageHeight = Image.resolveAssetSource(require("../assets/end.png")).height

    return(

        <Pressable>

            <Card style={{display: 'block', width: windowWidth*0.95, backgroundColor: 'beige', marginRight: 'auto', marginLeft: 'auto', marginTop: windowHeight*0.02}}>

                <Card.Content>

                    <Title style={{textAlign: 'center', fontSize: 15}}>{props.title}</Title>

                    <Paragraph style={{textAlign: 'justify', marginBottom: 15, fontSize: 15}}>{props.para}</Paragraph>

                    <Card.Cover 
                    source={require("../assets/end.png")} 
                    resizeMode="cover" 
                    backgroundColor="white" 
                    style={{height:imageHeight*(windowWidth*0.95/imageWidth)}}
                    />

                </Card.Content>
            
            </Card>
            
        </Pressable>

    )
}

export default PostThumbnail;