import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#25374eff",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
  },
  form: {
    width: "100%",
    alignItems:"center",
    marginTop: 20,
  },
  input: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  campos: {
    flex: 1,
    fontSize: 18,
    color: "#aaa",
    paddingVertical: 10,
    marginLeft: 10,
  },
  botao: {
    width: '25%',
    alignItems: 'center',
    backgroundColor: "#rgba(255, 255, 255, 1)",
    paddingVertical: 14,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    color: "#25374eff",
    fontSize: 20,
    fontWeight: 'bold',
  },
  voltar: {
    textDecorationLine: "underline",
    marginTop: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
});

export default styles;
