import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import ItemSeprator from "../../components/sperators/ItemSperator";
// import ItemExtractor from "../../components/extractors/ItemExtractor";



export default function HomeScreen({ navigation }) {
    const ItemExtractor = (item) => {
        return (
            <Text
                onPress={() =>
                    navigation.navigate(`${item.key}`, { item })
                }
                key={item.key}
                style={styles.content}>
                <Text
                    style={styles.contentText}
                >
                    {item.data}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                    {' '}: {item.romaji} {' '}
                </Text>
            </Text>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {
                        key: "mondai",
                        data: "日本語の問題",
                        romaji: "mondai",
                    },
                ]}
                renderItem={({ item }) => ItemExtractor(item)}
                keyExtractor={item => item.key}
                ItemSeparatorComponent={ItemSeprator}
            // refreshing={loading}
            // onRefresh={() => handleRefresh()}
            // onEndReachedThreshold={0.1}
            // onEndReached={() => {
            //     showToastWithGravityAndOffset('Loading more...');
            //     setOffset(offset + limit);
            //     dispatch(initialFetch(offset, limit));
            // }}
            // extraData={newsCount}
            />
        </View>
    );
}