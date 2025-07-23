import React from 'react';
import { Button } from 'react-native-paper';

export default function TlcButton() { 
    return (
        <Button mode="contained" onPress={() => console.log('Pressed')}>
        Press me
        </Button>
    );
}