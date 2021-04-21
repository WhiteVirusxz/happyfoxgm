import React from 'react'
import PropTypes from 'prop-types'
var DataB = require('../SchemaM');

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'
import Header from '@vkontakte/vkui/dist/components/Header/Header'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Group from '@vkontakte/vkui/dist/components/Group/Group'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar'
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar'
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem'
const Hamount = DataB.history
const HDamount = DataB.historypday

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>HappyFox</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Аккаунт</Header>}>
			<Div>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<div class="SimpleCell__description">
				Рассказано историй: {`${Hamount}`}
			</div>
			<div class="SimpleCell__description">
				Осталось рассказов на сегодня: {`${HDamount}`}
			</div>
			</Div>
		</Group>}
		<Group header={<Header mode="secondary">Выбор</Header>}>
			<Div>
				<Button stretched size="s" mode="secondary">
					Просмотр Рекламы
				</Button>
				<Footer>
					Просмотр рекламы даёт +1 к рассказам на сегодня.
				</Footer>
			</Div>
		</Group>
		<Group header={<Header mode="secondary">Другое</Header>}>
			<Div>
				<Button stretched size="s" mode="disabled">
					Скопировать ссылку приглашения
				</Button>
			</Div>
		</Group>
		<Group>
		<Tabbar>
			<TabbarItem>
				<Button stretched size="l" mode="disabled">
					Профиль
				</Button>
			</TabbarItem>
			<TabbarItem>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="rules">
					Другое
				</Button>
			</TabbarItem>
			<TabbarItem>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="lrb">
					Рейтинг
				</Button>
			</TabbarItem>
		</Tabbar>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		id: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
