import { Image, StyleSheet, Text, View } from 'react-native';

export type ChatRowProp = {
    img: string, main: string, sub: string, id?: number
}

export const ChatRow = ({ img, main, sub }: ChatRowProp) => {
    return (
        <View style={styles.row}>
            <Image source={{ uri: img }} style={styles.pp} />
            <View style={styles.title}>
                <Text style={styles.main}>{main}</Text>
                <Text style={styles.sub}>{sub}</Text>
            </View>
        </View>
    )
}

export default ChatRow;

const styles = StyleSheet.create({
    row: {
        padding: 5,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    pp: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    title: {
        flex: 1
    },
    main: {
        fontSize: 15,
        color: '#f5f5f6',
        fontWeight: 'bold'
    },
    sub: {
        fontSize: 10,
        color: '#ecedee'
    }

}
)