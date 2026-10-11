"use client";
import {Text, StyleSheet, View, Image, Pressable, Alert} from "react-native";
const iconPath = "https://picsum.photos/seed/c/300";

const BottomNavbar = () => {
    return(
    // The onpress alert itself is not working, therefore the the fallbacks. 
    <Pressable onPress={() => {Alert.alert("Alert Button pressed. "); console.log("Alert Button pressed"); window.alert('Alert Button pressed(This is a fallback for web. ')}} style={styles.bar}>
        <Nav desc="Home" icon={iconPath} />
        <Nav desc="Notification" icon={iconPath} />
        <Nav desc="You" icon={iconPath} />
    </Pressable>
)
}

type NavProp = {
    desc: string, 
    icon: any
}

const Nav = ({desc, icon}: NavProp) => (
    
        <View style={styles.nav}>
            <Image source={{uri: icon}} alt="Icon" style={styles.navIcon} />
            <Text style={styles.desc}>{desc}</Text>
        </View>
    
);

export default BottomNavbar;

const styles = StyleSheet.create({
    bar: {
        width: 430, 
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 5, 
        position: 'fixed', 
        bottom: 0,
        backgroundColor: '#282932'
    },
    navIcon: {
        height: 20, 
        width: 20, 
    }, 
    desc: {
        fontSize: 10,
        margin: 'auto',
        color: '#c8c9cf'
    },
    nav: {
        height: 40, 
        width: 60, 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center', 
    }, 
    
})