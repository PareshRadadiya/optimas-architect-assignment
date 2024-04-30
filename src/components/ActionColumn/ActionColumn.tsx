import React from 'react';

import './ActionColumn.scss';

import EditIcon from 'assets/icons/edit-3.svg';
import LinkIcon from 'assets/icons/link.svg';

const ActionColumn = () => {
	return (
		<div className="action-column">
			<span className="action-column__view">View</span>
			<div className="action-column__action-wrapper">
				<button className="action-column__action-wrapper__action">
					<EditIcon />
					<span>Edit</span>
				</button>
				<a href="#" className="action-column__action-wrapper__action">
					<LinkIcon />
					<span>Link</span>
				</a>
			</div>
		</div>
	);
};

export default ActionColumn;
