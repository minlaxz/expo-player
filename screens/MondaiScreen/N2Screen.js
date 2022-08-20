import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function N2Screen({ navigator }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.contentText}>This is N2 問題</Text>
            </View>
        </View>
    );
}