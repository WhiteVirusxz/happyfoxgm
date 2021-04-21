import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import { AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Smongoconnect from'./Mongocon';
exports.FindDATA = FindDATA

import Home from './panels/Home';
import Rules from './panels/Rules';
import LB from './panels/LeaderBoard';
import FindDATA from './FindDataUser';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	//Mongodb connect
	Smongoconnect
	//FindData
	FindDATA

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Rules id='rules' go={go} />
					<LB id="lrb" fetchedUser={fetchedUser} go={go} />
					<FindDataUser fetchedUser={fetchedUser} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
