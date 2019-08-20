import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class RadioButtons extends Component {
	state = {
		value: null,
	};

	render() {
		const { options } = this.props;
    const { value } = this.state;

		return (
			<View>
				{options.map((item, i) => {
					return (
						<View key={item.key} style={styles.buttonContainer}>
							<TouchableOpacity
								style={styles.circle}
								onPress={() => {
									this.setState({value: item.key});
                  this.props.click(item.text, item.number);
								}}
							>
								{value === item.key && <View style={styles.checkedCircle} />}
							</TouchableOpacity>
							<Text>{item.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
    marginBottom: 10
	},

	circle: {
		height: 30,
		width: 30,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#ACACAC',
		alignItems: 'center',
    justifyContent: 'center',
		marginRight: 10,
		marginLeft: 10
	},
  
	checkedCircle: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#333333',
	},
});