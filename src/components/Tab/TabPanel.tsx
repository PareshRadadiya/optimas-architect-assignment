import { useTabContext } from './Tabs';

type TabPanelProps = {
	name: string;
	children: React.ReactNode;
};

const TabPanel = ({ name, children }: TabPanelProps) => {
	const { activeTab } = useTabContext();

	return activeTab === name ? <div role="tabpanel">{children}</div> : null;
};

export { TabPanel };
