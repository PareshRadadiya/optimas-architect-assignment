import React from 'react';
import './Dashboard.scss';
import { Tab, TabPanel, Tabs } from 'components/Tab';
import Button from 'components/Button/Button';
import UserTabContent from './UserTabContent';

const Dashboard = () => {
	return (
		<div className="dashboard">
			<h1 className="dashboard__title">Admin</h1>
			<Tabs tabShow="user">
				<div className="dashboard__control">
					<Tab name="user">
						<Button type="button" size="large">
							User
						</Button>
					</Tab>
					<Tab name="userGroup">
						<Button type="button" size="large">
							User Group
						</Button>
					</Tab>
				</div>

				<TabPanel name="user">
					<UserTabContent />
				</TabPanel>

				<TabPanel name="userGroup">
					<h2>User Group</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Dashboard;
