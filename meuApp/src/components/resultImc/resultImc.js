import React  from "react";
import { View, Text, TextInput, Button } from 'react-native';

export default function ResultImc(props) {
    return (
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}
