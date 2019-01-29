import React from 'react'
import Moment from 'moment'
import {Text, View} from 'react-native'

export default (props)=>(
	<View >
		<Text>
			{props.sender} {Moment(props.timestamp).fromNow()}
		</Text>
		<Text>
			{props.text}
		</Text>		
	</View>
)


