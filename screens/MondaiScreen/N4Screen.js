import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function N4Screen({ navigator }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.contentText}>This is N4 問題</Text>
            </View>
        </View>
    );
}