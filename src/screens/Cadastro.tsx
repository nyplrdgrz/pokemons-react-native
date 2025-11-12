import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from "axios";
import styles from './StylesCadastro';
import API_BASE from "../../apiConfig";

export function Cadastro({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const salvar = async () => {
    try {
      const payload = {
        nome: nome.trim(),
        tipo: tipo.trim(),
        peso: peso.trim(),
        altura: altura.trim(),
      };

      const headers: any = { "Content-Type": "application/json" };
      await axios.post(`${API_BASE}/api/pokemon`, payload, { headers });

      Alert.alert("Sucesso", "Pokemon cadastrado!");
      console.log("Pokemon cadastrado!");
      navigation.navigate("home");
    } catch (error: any) {
      Alert.alert("Erro", "Falha ao cadastrar Pokemon");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRE UM NOVO POKEMON</Text>

      <View style={styles.form}>
        <View style={styles.input}>
          <MaterialIcons name="catching-pokemon" size={30} color="#25374eff" />
          <TextInput style={styles.campos} placeholder="Nome" onChangeText={setNome}/>
        </View>

        <View style={styles.input}>
          <MaterialIcons name="catching-pokemon" size={30} color="#25374eff" />
          <TextInput style={styles.campos} placeholder="Tipo" onChangeText={setTipo}/>
        </View>

        <View style={styles.input}>
          <MaterialIcons name="catching-pokemon" size={30} color="#25374eff" />
          <TextInput style={styles.campos} placeholder="Altura (cm)" onChangeText={setAltura}/>
        </View>

        <View style={styles.input}>
          <MaterialIcons name="catching-pokemon" size={30} color="#25374eff" />
          <TextInput style={styles.campos} placeholder="Peso (kg)" onChangeText={setPeso}/>
        </View>

        <Pressable onPress={salvar} style={styles.botao}>
          <Text style={styles.botaoTexto}>Salvar Pokemon</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("home")} style={styles.voltar}>
          <Text style={styles.voltar}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}
