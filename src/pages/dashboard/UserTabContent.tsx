import React from 'react';

import { Tab, TabPanel, Tabs } from 'components/Tab';
import IconButton from 'components/Button/IconButton';
import BookIcon from 'assets/icons/book.svg?react';
import TickCircle from 'assets/icons/tickcircle.svg?react';
import PlusIcon from 'assets/icons/plus.svg?react';

import Table from 'components/Table/Table';

import {
	DetailsType,
	TableColumnConstant,
} from 'constants/TableColumnConstant';
import { TABLE_DATA } from '@/data/TableData';

import RowDetails from 'components/common/RowDetails';
import Button from 'components/Button/Button';

const UserTabContent = () => {
	const headers = TABLE_DATA.header.map((item) => {
		return {
			id: item,
			name: TableColumnConstant[item].displayName,
		};
	});
	const row = TABLE_DATA.row;

	const renderDetails = (details: DetailsType) => {
		return <RowDetails details={details} />;
	};

	return (
		<Tabs tabShow="definitions">
			<div className="dashboard__control">
				<Tab name="definitions">
					<IconButton
						prefix={<BookIcon />}
						type="button"
						size="large"
					>
						Definitions - 58
					</IconButton>
				</Tab>
				<Tab name="pending">
					<IconButton
						prefix={<TickCircle />}
						type="button"
						size="large"
					>
						Pending
					</IconButton>
				</Tab>
				<div className="dashboard__control__dropdown">
					<IconButton
						prefix={<PlusIcon />}
						variant="primary"
						size="thin-simple"
					>
						Add User
					</IconButton>
				</div>
			</div>

			<TabPanel name="definitions">
				<Table
					isSearchableHeader={true}
					row={row}
					headers={headers}
					isRowCollapsible={true}
					renderDetails={renderDetails}
				/>
			</TabPanel>

			<TabPanel name="pending">
				<h2>Pending</h2>
			</TabPanel>
		</Tabs>
	);
};

export default UserTabContent;
