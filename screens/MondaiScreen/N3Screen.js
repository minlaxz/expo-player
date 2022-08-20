import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function N3Screen({ navigator }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.contentText}>This is N3 問題</Text>
            </View>
        </View>
    );
}