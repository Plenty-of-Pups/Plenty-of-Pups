import React from 'react';
import { View } from 'react-native';
import PremiumCard from '../components/premiumCard';

function PremiumScreen(props) {
    return <View style={{
        backgroundColor: '#F8F4F1',
        padding: 20,
        paddingTop: 150,
        paddingBottom: 500,

    }}>
        <PremiumCard
            title="Premium features coming soon!"
        />
    </View>

};

export default PremiumScreen;



