import React, { Component } from 'react';
import { Text } from 'react-native';
import {Container, Content, Card, CardItem, Button} from 'native-base';

export default class Task extends Component{
	render(){
		return(
			<Container>
				<Content>
					<Card>
						<CardItem>
							<Text>
								{this.state}
							</Text>
							<Button>Accept</Button>
							<Button>Decline</Button>
						</CardItem>
					</Card>
				</Content>
			</Container>
			);
	}
}