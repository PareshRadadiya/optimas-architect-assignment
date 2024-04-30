import React, { ReactNode } from 'react';

type TabListProps = {
	children: ReactNode;
};

const TabList = ({ children }: TabListProps) => <div>{children}</div>;

export { TabList };
