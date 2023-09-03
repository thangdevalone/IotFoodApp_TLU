import {Text,FlatList,View,TouchableOpacity,Image} from "react-native"
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import StatusBarLayout from "../../components/StatusBarLayout";
import { useState } from "react";


const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '6',
      userName: 'Christy Alex',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '7',
      userName: 'Christy Alex',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '8',
      userName: 'Christy Alex',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '9',
      userName: 'Christy Alex',
      userImg: require('../../assets/users/user1.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    }
  
  ];
  
  const MessagesScreen = ({navigation}) => {
    const [focusSearch, setFocusSearch] = useState(false)
    return (
        <StatusBarLayout>
            <View className={`px-[20px] items-center ${focusSearch ? 'opacity-80 bg-zinc-400':'bg-white'} border-0 `}>
              <View className={`pb-[10px] border-b border-neutral-400 w-[100%] border-solid z-10`}>
                <TextInput left={<TextInput.Icon icon="magnify" size={24}/>}
                        placeholder="Search"
                        className={"w-[100%] bg-gray-100 border-transparent h-11 z-0"}
                        theme={{
                            colors: {
                              primary:  'rgb(243 244 246)'  // Màu nhãn và đường viền
                            },
                            }}
                        outlineStyle={{borderColor: "rgb(243 244 246)"}}
                        onFocus={()=>setFocusSearch(true)}
                        onBlur={()=>setFocusSearch(false)}
                />
              </View>
                <FlatList 
                data={Messages}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        className="w-[100%]"
                        onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                    <View className="flex-row justify-between">
                        <View className= {"py-[15px]"}>
                        <Image source={item.userImg}  className={"w-[50px] h-[50px] rounded-full"}/>
                        </View>
                        <View className="flex-col justify-center  pl-0 ml-[10px] w-[300px] border-b-[0.5px] border-[#ccc] ">
                        <View className="flex-row mb-[5px] justify-between">
                            <Text className="text-sm font-bold text-black ">{item.userName}</Text>
                            <Text className="text-xs">{item.messageTime}</Text>
                        </View>
                        <Text className="text-base" numberOfLines={1} ellipsizeMode="tail" >{item.messageText}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                )}
                />
            </View>
      </StatusBarLayout>
    );
};


export default MessagesScreen;