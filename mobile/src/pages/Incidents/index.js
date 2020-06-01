/*os estilos são usados atraves do ".", meio q definindo a classe deles

*as views são como a div;

*o componente TouchableOpacity torna qualquer coisa clicavel com uma função dentro

* o FlatList é o componente q adiciona a barra de rolagem, onde ele tem o data q é uma array dizendo quantos elementos vão ser
renderizados e keyExtratcor q se refere o elemento unico em cada item

*o UseNavigation serve de navegação pra tela

*o UseEffect carrega os componentes para serem exibidos em tela quando eles sofrerem alteração

*/

import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
	const [incidents, setIncidents] = useState([]);
	const [total, setTotal] = useState(0);

	const [page, setPage] = useState(1);//estado para fazer o scroll infinito, ele armazena a mudança de pagina
	const [loading, setLoading] = useState(false);// estado utilizado para quando buscar dados novos


	const navigation = useNavigation();

	function navigateToDetail(incident) {
		navigation.navigate('Detail', { incident });//o navigate pode receber um segundo parametro informando os 
		//dados q vão carregados pra prox page
	}

	async function loadIncidents() {
		if (loading) {//serve para impedir q uma outra requisição de carregamento caso ja existe uma em andamento
			return;
		}

		if (total > 0 && incidents.length === total) {//para evitar q existe outra requisição quando chegar no numero total de casos
			return;
		}

		setLoading(true);

		const response = await api.get('incidents', {
			params: { page }
		});

		setIncidents([...incidents, ...response.data]);
		setTotal(response.headers['x-total-count']);
		setPage(page + 1);
		setLoading(false);
	}

	useEffect(() => {
		loadIncidents();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />
				<Text style={styles.headerText}>
					Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
			</View>

			<Text style={styles.title}>Bem-vindo!</Text>
			<Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

			<FlatList
				data={incidents}
				style={styles.incidentList}
				keyExtractor={incident => String(incident.id)}
				// showsVerticalScrollIndicator={false}
				onEndReached={loadIncidents}
				onEndReachedThreshold={0.2}
				renderItem={({ item: incident }) => (//a variavel item armazena os dados dos incidents
					<View style={styles.incident}>
						<Text style={styles.incidentProperty}>ONG:</Text>
						<Text style={styles.incidentValue}>{incident.name}</Text>

						<Text style={styles.incidentProperty}>CASO:</Text>
						<Text style={styles.incidentValue}>{incident.title}</Text>

						<Text style={styles.incidentProperty}>VALOR:</Text>
						<Text style={styles.incidentValue}>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL'
							}).format(incident.value)}
						</Text>

						<TouchableOpacity
							style={styles.detailsButton}
							onPress={() => navigateToDetail(incident)}
						>
							<Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
							<Feather name="arrow-right" size={16} color="#E02041" />
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}