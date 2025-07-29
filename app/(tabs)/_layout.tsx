import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: ImageSourcePropType, title: string }) => {
  return (
    focused ? (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full h-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
      >
        <Image
          source={icon}
          tintColor={focused ? '#151312' : '#999'}
          className='size-5'
        />
        <Text
          className='text-secondary text-base font-semibold ml-2'
        >
          {title}
        </Text>
      </ImageBackground>
    ) : (
      <View
        className=' size-full justify-center items-center mt-4 rounded-full'
      >
        <Image
          source={icon}
          tintColor='#A8B5DB'
          className='size-5'
        />
      </View>
    )
  )
}

const _Layout: React.FC = () => {

  const TabsDetails = [
    {
      name: 'index',
      title: 'Home',
      icon: icons.home,
    },
    {
      name: 'search',
      title: 'Search',
      icon: icons.search
    },
    {
      name: 'saved',
      title: 'Saved',
      icon: icons.save
    },
    {
      name: 'profile',
      title: 'Profile',
      icon: icons.person
    },
  ]

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      {TabsDetails.map((tab) => {
        return (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  focused={focused}
                  icon={tab.icon}
                  title={tab.title}
                />
              ),
            }}
          />
        )
      })}
    </Tabs>
  )
}

export default _Layout