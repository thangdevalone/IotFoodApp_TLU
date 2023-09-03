import {Text,View} from "react-native"
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import {useState,useEffect,useCallback} from "react"
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";

function ChatScreen() {
    const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])


const options = {
  method: 'GET',
  url: 'https://words-definitions-dictionary-and-data-api.p.rapidapi.com/en/regard',
  headers: {
    'X-RapidAPI-Key': 'cf6e6dd200msh3823dbaa2b1142cp1bcc9ejsndff8895de759',
    'X-RapidAPI-Host': 'words-definitions-dictionary-and-data-api.p.rapidapi.com'
  }
};
useEffect(()=>{
  const CallApi = async () => {
try {
	const response = await axios.request(options);
	console.log(response.data);
  const data = response.data;
  console.log("dien qua");
  data.map(item => 
    item.meanings.map(mean=> console.log(mean.definitions))
    );

  
} catch (error) {
	console.error(error);
}
}
CallApi();
})

 

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <Icon name='angle-double-down' size={22} color='#333' />
    );
  }
    return (<GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />);
}

export default ChatScreen;