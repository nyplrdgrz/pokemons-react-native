import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20,
        backgroundColor: "#fd4141ff" 
    },
    center: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
     },
    title: { 
        flexDirection: "row", 
        fontSize: 25, 
        fontWeight: "bold", 
        marginBottom: 12,
        color: "white"
    },
    card: { 
        flexDirection: "row", 
        backgroundColor: "#rgba(221, 245, 247, 1)",
        borderRadius: 15,
        borderBottomColor:"white",
        justifyContent: "space-between", 
        padding: 15, 
        marginBottom: 5,  
        overflow: "hidden",
        borderBottomWidth:1
    },
    stylize: { 
        position: "absolute",
        alignSelf: "flex-end",
        height: "100%",
        flexDirection: "row"
    },
    faixa: { 
        width: 15,
        height: '200%',
        justifyContent: "flex-end",
        backgroundColor: "#rgba(46, 187, 237, 1)",
        transform: [{ rotate: "-50deg" }],
    },
    faixa2: { 
        marginLeft: -15,
    },
    nome: { 
        color: "#rgba(46, 187, 237, 1)",
        fontSize: 25
    },
    tipo: { 
        color: "#rgba(46, 187, 237, 1)",
        fontStyle: "italic",
        fontWeight: "500"
    },
    altura: {
        margin: 3,
        color: "#rgba(46, 187, 237, 1)",
        fontSize: 18,
        fontWeight: "bold"
    },
    peso: {
        margin: 2,
        color: "#rgba(46, 187, 237, 1)",
        fontStyle: "italic",
        fontSize: 15,
        fontWeight: "bold"
    },
    adicionarNovo: {
        flexDirection: "row",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        padding: 10
    },
});

export default styles;