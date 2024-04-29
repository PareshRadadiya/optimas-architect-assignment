import React, { ReactElement } from 'react';
import { useTabContext } from './Tabs';

type TabPropsType = {
	name: string;
	children: ReactElement;
};

const Tab = ({ name, children }: TabPropsType) => {
	const { activeTab, setActiveTab } = useTabContext();
	const isActive = activeTab === name;

	const handleOnClick = () => setActiveTab(name);

	const enhancedChildren = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child as ReactElement, {
				isActive: isActive,
				onClick: handleOnClick,
			});
		}
		return child;
	});

	return <>{enhancedChildren}</>;
};

export { Tab };
