import React, { useState, createContext, useContext } from 'react';

interface TabContextType {
	activeTab: string;
	setActiveTab: (name: string) => void;
}

const TabContext = createContext<TabContextType | null>(null);

type TabsProps = {
	children: React.ReactNode;
	tabShow: string;
};

const Tabs = ({ children, tabShow }: TabsProps) => {
	const [activeTab, setActiveTab] = useState<string>(tabShow);

	return (
		<TabContext.Provider value={{ activeTab, setActiveTab }}>
			{children}
		</TabContext.Provider>
	);
};

export const useTabContext = () => {
	const context = useContext(TabContext);
	if (!context) {
		throw new Error('useTabContext must be used within a Tabs provider');
	}
	return context;
};

export { Tabs };
