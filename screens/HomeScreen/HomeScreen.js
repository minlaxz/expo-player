import { View, Text, Button, FlatList } from "react-native";
import styles from "./styles";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.contentText}>Hola, Nunna 😜</Text>
            </View>
            <FlatList
                data={[
                    { key: "N5" },
                    { key: "N4" },
                    { key: "N3" },
                    { key: "N2" },
                    { key: "N1" },
                ]}
                renderItem={({ item }) => (
                    <Button
                        style={styles.button}
                        title={item.key}
                        onPress={() => {
                            navigation.navigate(`${item.key}Screen`), { title: item.key, }
                        }}
                    />
                )}
            />
        </View>
    );
}