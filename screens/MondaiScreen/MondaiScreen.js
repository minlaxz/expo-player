import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import ItemSeprator from "../../components/sperators/ItemSperator";


export default function MondaiScreen({ navigation }) {
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
            </Text>
        )
    }
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={[
                        {
                            key: "n5mondai",
                            data: "問題 N5",
                        },
                        {
                            key: "n4mondai",
                            data: "問題 N4",
                        },
                        {
                            key: "n3mondai",
                            data: "問題 N3",
                        },
                        {
                            key: "n2mondai",
                            data: "問題 N2",
                        },
                        {
                            key: "n1mondai",
                            data: "問題 N1",
                        },
                    ]}
                    renderItem={({ item }) => ItemExtractor(item)}
                    keyExtractor={item => item.key}
                    ItemSeparatorComponent={ItemSeprator}
                />
            </View>
        </View>
    );
}