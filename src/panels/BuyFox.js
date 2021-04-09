import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const BuyFox = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Магазин</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Выбор</Header>}>
			<Div>
				<Button stretched size="m" mode="secondary" onClick={go} data-to="home">
					Купить Лисичек
				</Button>
			</Div>
			<Div>
				<Button stretched size="m" mode="secondary" onClick={go} data-to="home">
					Продать Лисичек
				</Button>
			</Div>
			<Div>
				<Button stretched size="m" mode="secondary" onClick={go} data-to="home">
					Купить Ягоды
				</Button>
			</Div>
			<Div>
				<Button stretched size="m" mode="secondary" onClick={go} data-to="home">
					Обмен Лисичек
				</Button>
			</Div>
			<Div>
				<Button stretched size="m" mode="secondary" onClick={go} data-to="home">
					Бартер Лисичками
				</Button>
			</Div>
		</Group>
	</Panel>
);

BuyFox.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default BuyFox;
