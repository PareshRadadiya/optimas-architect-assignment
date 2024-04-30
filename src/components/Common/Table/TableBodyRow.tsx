import React, { ReactElement, ReactNode, useState } from 'react';

import ArrowDown from 'assets/icons/arrow-down.svg';
import { DetailsType } from 'constants/TableColumnConstant';
import TableRowExpander from '../../DetailsExpander/TableRowExpander';

type TableBodyRow = {
	children: ReactNode;
	collapsible: boolean;
	isOpen?: boolean;
	detail?: DetailsType;
	detailPanelColspan: number;
	index: number;
	currentOpenRow?: (index: number, isCollapsed: boolean) => void;
	renderDetails?: (detail: DetailsType) => ReactElement;
};

const TableBodyRow = ({
	children,
	detailPanelColspan,
	collapsible,
	detail,
	index,
	renderDetails,
	currentOpenRow,
}: TableBodyRow) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
		currentOpenRow?.(index, isCollapsed);
	};
	return (
		<>
			<tr
				className={`${
					isCollapsed ? 'border-bottom-none' : ''
				} table__body__row`}
			>
				{collapsible && (
					<td
						onClick={toggleCollapse}
						className="table__body__row__arrow"
					>
						<ArrowDown style={{ scale: isCollapsed ? '-1' : '' }} />
					</td>
				)}
				{children}
			</tr>

			{collapsible && detail && isCollapsed && (
				<tr>
					<td
						colSpan={
							collapsible
								? detailPanelColspan + 1
								: detailPanelColspan
						}
					>
						<TableRowExpander details={detail}>
							{renderDetails?.(detail)}
						</TableRowExpander>
					</td>
				</tr>
			)}
		</>
	);
};

export default TableBodyRow;
