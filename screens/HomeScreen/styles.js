import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fafafa',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRightText: {
        fontSize: 20,
        marginRight: 10,
    },
    headerRightIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    content: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#b00b69dd',
        width: '90%',
    },
    contentText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
