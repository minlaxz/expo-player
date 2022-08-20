import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function N1Screen({ navigator }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.contentText}>This is N1 問題</Text>
            </View>
        </View>
    );
}