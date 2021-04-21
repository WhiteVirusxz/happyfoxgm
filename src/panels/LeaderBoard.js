import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';

const LB = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Рейтинг</PanelHeader>
    {fetchedUser &&
    <Group header={<Header mode="secondary">Лидеры</Header>}>
      <Div>
        <Tabs>
          Игрок
        </Tabs>
        <Tabs>
          <Cell
            before={fetchedUser.photo_100 ? <Avatar src={fetchedUser.photo_100}/> : null}
            description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
          >
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        </Tabs>
      </Div>
    </Group>}
    <Tabbar>
			<TabbarItem>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Профиль
				</Button>
			</TabbarItem>
			<TabbarItem>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="rules">
					Другое
				</Button>
			</TabbarItem>
			<TabbarItem>
				<Button stretched size="l" mode="disabled">
					Рейтинг
				</Button>
			</TabbarItem>
		</Tabbar>
  </Panel>
);

LB.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
    photo_100: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default LB;
