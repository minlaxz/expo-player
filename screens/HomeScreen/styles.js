import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%',
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
        flex: 1,
        padding: 10,
        margin: 10,
    },
    contentText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fafafa',
        alignSelf: 'stretch'
    }
});
