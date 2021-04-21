import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';

const Rules = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>
			Другое
		</PanelHeader>
		<Group header={<Header mode="secondary">Правила</Header>}>
			<Div>
				<div class="SimpleCell__description">
					1.1 Если будет спам, то вероятнее всего вы попадете в чёрный список и не сможете использовать приложение.
					<br/>
					1.2 Мат, оскорбление и другое, будет учитываться как нарушение правил и будете внесены в чёрный список.
					<br/>
					1.3 Использование читов, багов, скриптов, будет учитываться как нечесная игра и будете забанены в игре.
				</div>
			</Div>
		</Group>
		<Group header={<Header mode="secondary">Важная информация</Header>}>
			<Div>
				<div class="SimpleCell__description">
					Вы можете поделится вашей историей или рассказать про ваш день.
					<br/>
					В течение 24 часов, вам придёт сообщение, где будет слово, которое описывает ваш рассказ.
					<br/>
					В день можно делится до 2 историй.
					<br/>
					Максимальное количество символов за один рассказ ~ 1500.
					<br/>
					Ваши истории АНОНИМЫ и доступны только для Администрации приложения.
					<br/>
					Хештег для видео в социальных сетях, где вы используете приложение:
					<br/>
					#HappyFoxNeydlis
				</div>
			</Div>
		</Group>
		<Tabbar>
			<TabbarItem>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Профиль
				</Button>
			</TabbarItem>
			<TabbarItem>
				<Button stretched size="l" mode="disabled">
					Другое
				</Button>
			</TabbarItem>
			<TabbarItem>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="lrb">
					Рейтинг
				</Button>
			</TabbarItem>
		</Tabbar>
	</Panel>
);

Rules.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Rules;
