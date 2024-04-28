import React, { useState } from 'react';
import './Footer.scss';
import GridIcon from 'assets/icons/grid.svg?react';
import RadioGif from 'assets/gif/radio.gif';
import HudGif from 'assets/gif/hud.gif';
import RoleButton from '@/components/Button/RoleButton';

import UserTie from 'assets/icons/icon _user_tie_.svg?react';
import UserTenant from 'assets/icons/tenant_app_icon.svg?react';

const Footer = () => {
	const [navigationActive, setNavigationActive] = useState<string>('ADMIN');

	const handleRoleClick = (role: string) => {
		setNavigationActive(role);
	};
	return (
		<footer className="footer">
			<div className="footer__grid-menu">
				<img
					className="footer__grid-menu__gif"
					src={RadioGif}
					alt="gif"
				/>
				<a href="#">
					<GridIcon />
				</a>
			</div>
			<ul className="footer__navigation">
				<li className="footer__navigation__role-button-container">
					<RoleButton
						onClick={() => handleRoleClick('ADMIN')}
						active={navigationActive === 'ADMIN'}
						role="ADMIN"
						icon={<UserTie />}
					/>
				</li>

				<li className="footer__navigation__role-button-container">
					<RoleButton
						onClick={() => handleRoleClick('OFFICER')}
						active={navigationActive === 'OFFICER'}
						role="OFFICER"
						icon={<UserTenant />}
					/>
				</li>
			</ul>
			<div className="footer__hud-gif">
				<img src={HudGif} alt="hud gif" />
			</div>
		</footer>
	);
};

export default Footer;
