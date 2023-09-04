import React from 'react';
import { Text, SafeAreaView, Image, Pressable } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";

function PostThumbnail(props) {

    return(

        <Pressable>

            <Card>

                <Card.Content>

                    <Card.Cover source={require("../assets/logo.png")} resizeMode="contain" backgroundColor="white" />

                    <Title style={{textAlign: 'center'}}>{props.title}</Title>

                    <Paragraph style={{textAlign: 'center'}}>{props.para}</Paragraph>

                </Card.Content>
            
            </Card>
            
        </Pressable>

    )
}

export default PostThumbnail;