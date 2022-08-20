import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function N5Screen({ navigator }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.contentText}>This is N5 問題</Text>
            </View>
        </View>
    );
}