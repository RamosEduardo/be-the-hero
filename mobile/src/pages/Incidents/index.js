import React from  'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo-01.svg';

import styles from './style';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>
                Bem-Vindo
            </Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>

            <View style={styles.incidentsList}>
                <View style={styles.incidents}>
                    <Text style={styles.incidentProperty}>
                        ONG:
                    </Text>
                    <Text style={styles.incidentValue}>
                        APAD
                    </Text>

                    <Text style={styles.incidentProperty}>
                        CASO:
                    </Text>
                    <Text style={styles.incidentValue}>
                        Catiorinho morrido
                    </Text>

                    <Text style={styles.incidentProperty}>
                        VALOR: 
                    </Text>
                    <Text style={styles.incidentValue}>
                        R$ 120,00
                    </Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => {}}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver Mais
                        </Text>
                        <Feather name="arrow-right" size={16} color='#9700F9' />
                    </TouchableOpacity>
                </View>

                <View style={styles.incidents}>
                    <Text style={styles.incidentProperty}>
                        ONG:
                    </Text>
                    <Text style={styles.incidentValue}>
                        APAD
                    </Text>

                    <Text style={styles.incidentProperty}>
                        CASO:
                    </Text>
                    <Text style={styles.incidentValue}>
                        Catiorinho morrido
                    </Text>

                    <Text style={styles.incidentProperty}>
                        VALOR: 
                    </Text>
                    <Text style={styles.incidentValue}>
                        R$ 120,00
                    </Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => {}}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver Mais
                        </Text>
                        <Feather name="arrow-right" size={16} color='#9700F9' />
                    </TouchableOpacity>
                </View>

                <View style={styles.incidents}>
                    <Text style={styles.incidentProperty}>
                        ONG:
                    </Text>
                    <Text style={styles.incidentValue}>
                        APAD
                    </Text>

                    <Text style={styles.incidentProperty}>
                        CASO:
                    </Text>
                    <Text style={styles.incidentValue}>
                        Catiorinho morrido
                    </Text>

                    <Text style={styles.incidentProperty}>
                        VALOR: 
                    </Text>
                    <Text style={styles.incidentValue}>
                        R$ 120,00
                    </Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => {}}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver Mais
                        </Text>
                        <Feather name="arrow-right" size={16} color='#9700F9' />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}