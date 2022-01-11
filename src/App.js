import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, STyleSheet } from 'react-native';

const App = () => {
    const [numero, setNumero] = useState(0);

    function randomNumber() {
        const novoNumero = Math.floor(Math.random() * 10);

        setNumero(novoNumero);
    }

    return (
        <>
            <SafeAreaView style={style.container}>
                <Text style={style.number}>{numero}</Text>
                <TouchableOpacity onPress={randomNumber}> style={style.botao}
                    Gerar Número
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

/* Responsavel pela estilização */
const style = StyleSheet.create({
    container: {
        backgroundColor: '#F00',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#fff',
    },
    botao: {
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})

export default App;