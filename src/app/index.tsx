import { Image, FlatList, View, StyleSheet, Text } from "react-native";
import BottomNavbar from "../../components/BottomNavbar";
import Thumbnail from "../../components/Thumbnail";
import {ChatRow, ChatRowProp} from "../../components/ChatRow";
const iconPath = "https://picsum.photos/seed/c/300";
const friends = [
  {
    id: '1',
    img: iconPath
  }, {
    id: '2',
    img: iconPath
  }, {
    id: '3',
    img: iconPath
  }, {
    id: '4',
    img: iconPath
  }, {
    id: '5',
    img: iconPath
  },
]
const chatRows: ChatRowProp[] = [
  {
    img: "alice.jpg",
    main: "Alice Johnson",
    sub: "Are we still meeting at 3 PM?",
  },
  {
    img: "bob.jpg",
    main: "Bob Chen",
    sub: "I pushed the latest changes to GitHub.",
  },{
    img: "alice.jpg",
    main: "Alice Johnson",
    sub: "Are we still meeting at 3 PM?",
  },
  {
    img: "bob.jpg",
    main: "Bob Chen",
    sub: "I pushed the latest changes to GitHub.",
  },{
    img: "alice.jpg",
    main: "Alice Johnson",
    sub: "Are we still meeting at 3 PM?",
  },
  {
    img: "bob.jpg",
    main: "Bob Chen",
    sub: "I pushed the latest changes to GitHub.",
  },{
    img: "alice.jpg",
    main: "Alice Johnson",
    sub: "Are we still meeting at 3 PM?",
  },
  {
    img: "bob.jpg",
    main: "Bob Chen",
    sub: "I pushed the latest changes to GitHub.",
  },{
    img: "alice.jpg",
    main: "Alice Johnson",
    sub: "Are we still meeting at 3 PM?",
  },
  {
    img: "bob.jpg",
    main: "Bob Chen",
    sub: "I pushed the latest changes to GitHub.",
  },
  {
    img: "carol.jpg",
    main: "Carol Smith",
    sub: "Thanks for your help yesterday!",
  },
  {
    img: "david.jpg",
    main: "David Lee",
    sub: "Can you review my pull request?",
  },
  {
    img: "emma.jpg",
    main: "Emma Wilson",
    sub: "The design mockups are ready.",
  },
  {
    img: "frank.jpg",
    main: "Frank Martinez",
    sub: "Let's schedule a quick call tomorrow.",
  },
  {
    img: "grace.jpg",
    main: "Grace Kim",
    sub: "I found a bug in the login flow.",
  },
  {
    img: "henry.jpg",
    main: "Henry Brown",
    sub: "Lunch at noon?",
  },
  {
    img: "isabella.jpg",
    main: "Isabella Davis",
    sub: "The report has been submitted.",
  },
  {
    img: "jack.jpg",
    main: "Jack Taylor",
    sub: "Looking forward to the weekend!",
  },
];
let i = 0;
chatRows.map((chat) => {chat.id = i++})
export default function Index() {
  return (
    <View style={{ backgroundColor: '#0b0b11', height: '100%' }}>
      <View style={styles.pageWrapper}>
        <FlatList contentContainerStyle={styles.leftColumn}
          horizontal={false}
          numColumns={1}
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (<Thumbnail img={item.img} />)}
        />
        <View style={styles.main}>
          <View>
            <Text style={{ color: '#e5e6e9', margin: 10, fontSize: 20}}>Messages</Text>
            <View style={styles.top}>
              <Image source={{ uri: iconPath }} style={{ width: 30, height: 30 }} />
              <Image source={{ uri: iconPath }} style={{ width: 30, height: 30 }} />
              <Text style={styles.search}>Add Friends</Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            <Image source={{uri: iconPath}} style={{width: 80, height: 80, borderRadius: 20}} />
            <View style={{margin: 10}}>
              <Text style={{fontSize: 15, color:'#f3f3f4'}}>Title...blablabla</Text>
              <Text style={{color:'#8d8f9b'}}>sub... I don't know what this is for...</Text>
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.chats}
            showsVerticalScrollIndicator={false}
            data={chatRows}
            horizontal={false}
            keyExtractor={(item) => item.id?.toString() ?? 'impossible'}
            renderItem={({item}) => {
              return (<ChatRow img={iconPath} main={item.main} sub={item.sub}/>)
            }}
          />
        </View>

      </View>
      <BottomNavbar />
    </View>
  )
}

const styles = StyleSheet.create({
  leftColumn: {
    backgroundColor: '#0b0b11',
    // width: 70,
    // flex: 1
    // height: 800,
    // flexDirection: 'column', 
    // alignItems: 'flex-start', 
    // justifyContent: 'center'
  },
  pageWrapper: {
    flexDirection: 'row',
    width: 430,
    height: '100%'
    // flex: 1
  },
  main: {
    backgroundColor: '#16171e',
    // flex: 1,
    width: 350, 
    // height: '100%',
    padding: 10,
    gap: 10
  },
  top: {
    flexDirection: 'row',
    gap: 10, 
    padding: 10
  },
  search: {
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 25,
    color: '#e5e6e9',
    backgroundColor: '#353741',
    padding: 5,
    textAlign: 'center'
  },
  infoCard: {
    width: '100%', 
    height: 100, 
    backgroundColor: '#1f2027',
    flexDirection: 'row', 
    padding: 10, 
    alignItems: 'center',
    borderRadius: 25
  },
  chats: {

  }
})