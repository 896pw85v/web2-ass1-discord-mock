import {Image, View, StyleSheet} from "react-native";

type ThumbnailProp = {
    img: string
};
const Thumbnail = ({img}: ThumbnailProp) => {
    return (
        <View style={styles.thumb} >
            <Image source={{uri: img}} style={styles.thumbnailImage}/>
        </View>
    )
};

export default Thumbnail;

const styles = StyleSheet.create({
    thumbnailImage: {
        borderRadius: 15, 
        height: 50, 
        width: 50,
        margin: 'auto'
    }, 
    thumb: {
        width: 70, 
        height: 70
    }
});