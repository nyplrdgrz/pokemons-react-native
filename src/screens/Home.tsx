import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import API_BASE from "../../apiConfig";

import styles from './Styles';
import axios from 'axios';

export function Home({ navigation }: any){
    const [pokemons, setPokemons] = useState<any[]>();

    useEffect(()=>{
        axios
            .get(`${API_BASE}/api/pokemon`)
            .then((res) => setPokemons(res.data))
            .catch((err) => console.error("Erro ao carregar os pokemons:", err));
    },[]);

     function navToCadastro() {
        navigation.navigate("cadastro");
    }

    return(
        <View style={styles.container}>
            <View style={styles.title}><MaterialCommunityIcons name="pokemon-go" size={35} color="white"/>
            <Text style={styles.title}>Pokedex</Text>
            </View>
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.stylize}>
                                <View style={styles.faixa}></View>
                                <View style={[styles.faixa, styles.faixa2]}></View>
                        </View>

                        <MaterialIcons name="catching-pokemon" size={40} color="#rgba(46, 187, 237, 1)" />
                        <View style={{ flex: 1, justifyContent: "space-evenly", marginLeft: 10 }}>
                            <Text style={[styles.nome, { fontWeight: "bold" }]}>{item.nome} #{item.id}</Text>
                            <Text style={styles.tipo}>Tipo: {item.tipo}</Text>
                        </View>
                        <View>
                            <Text style={styles.altura}>Altura: {item.altura} cm</Text>
                            <Text style={styles.peso}>Peso: {item.peso} kg</Text>
                        </View>
                    </View>
                )}
            />

            <Pressable style={styles.adicionarNovo} onPress={navToCadastro}>
                <MaterialIcons name="add-circle-outline" size={35} color="white" />
                <Text style={styles.adicionarNovo}>Adicionar pokemon</Text>
            </Pressable>   
        </View>
    );
}
