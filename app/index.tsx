import React from 'react';
import { Text, View } from "react-native";

const Index: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center"
      style={{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
      <Text className=" text-2xl text-red-500">Welcome hello</Text>
    </View>
  );
}

export default Index