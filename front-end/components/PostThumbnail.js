import React from 'react';
import { Text, SafeAreaView, Image, Pressable } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";

function PostThumbnail() {

    return(

        <Pressable>

            <Card>

                <Card.Content>

                    <Title style={{textAlign: 'center'}}>Title</Title>

                    <Paragraph style={{textAlign: 'center'}}>Para</Paragraph>

                </Card.Content>
            
            </Card>
            
        </Pressable>

    )
}

export default PostThumbnail;