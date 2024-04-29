import React, { useState } from 'react';
import './Navigation.scss';

import GifButton from 'components/Button/GifButton';
import UserTie from 'assets/icons/icon_user_tie_.svg?react';
import TechIcon from 'assets/icons/alternate_tachometer.svg?react';
import BagIcon from 'assets/icons/bag.svg?react';
import CogIcon from 'assets/icons/cogs.svg?react';
import Button from '../Button/Button';

const Navigation = () => {
	const [active, setActive] = useState<string>('Users');
	const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(true);
	const handleSetActive = (item: string) => {
		setActive(item);
	};
	return (
		<nav className={`navigation ${!isNavigationOpen ? 'hide' : ''}`}>
			<div className="navigation__shape"></div>
			<ul className="navigation__list">
				<li className="navigation__item">
					<a href="#">
						<GifButton
							onClick={() => handleSetActive('Dashboard')}
							active={active === 'Dashboard'}
							icon={<TechIcon />}
							label="Dashboard"
						/>
					</a>
				</li>
				<li className="navigation__item">
					<a href="#">
						<GifButton
							onClick={() => handleSetActive('Users')}
							active={active === 'Users'}
							icon={<UserTie />}
							label="Users"
						/>
					</a>
				</li>
				<li className="navigation__item">
					<a href="#">
						<GifButton
							onClick={() => handleSetActive('Roles')}
							active={active === 'Roles'}
							label="Roles"
							icon={<BagIcon />}
						/>
					</a>
				</li>
				<li className="navigation__item">
					<a href="#">
						<GifButton
							onClick={() => handleSetActive('Settings')}
							active={active === 'Settings'}
							icon={<CogIcon />}
							label="Settings"
						/>
					</a>
				</li>
			</ul>
			<div
				onClick={() => setIsNavigationOpen(!isNavigationOpen)}
				className="navigation__toggle"
			>
				<div className="arrow"></div>
			</div>
		</nav>
	);
};

export default Navigation;
