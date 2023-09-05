import React, {useState} from 'react';
import { Text, SafeAreaView, Image, Pressable, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";

function PostThumbnail(props) {

    // Get Dimensions of Window
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    // Get dimensions of remote image using state
    const [ remoteDimensions, setRemoteDimensions ] = useState([1,1])
    Image.getSize(props.url, (width, height) => { setRemoteDimensions([width,height]) });


    return(

        <Pressable>

            <Card style={{display: 'block', width: windowWidth*0.95, backgroundColor: 'beige', marginRight: 'auto', marginLeft: 'auto', marginTop: windowHeight*0.02, paddingBottom: 10}}>

                <Card.Content>

                    <Title style={{textAlign: 'center', fontSize: 15, paddingTop: -10}}>{props.title}</Title>

                    <Paragraph style={{textAlign: 'justify', marginBottom: 15, fontSize: 15}}>{props.para}</Paragraph>

                    <Card.Cover 
                    source={{uri:props.url}} 
                    resizeMode="cover" 
                    backgroundColor="white" 
                    style={{height:remoteDimensions[1]*(windowWidth*0.95/remoteDimensions[0])}}
                    />

                </Card.Content>
            
            </Card>
            
        </Pressable>

    )
}

export default PostThumbnail;