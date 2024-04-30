import React from 'react';
import './Header.scss';

import Indicator from '@/components/Common/Indicator/Indicator';
import Avatar from '@/components/Common/Avatar/Avatar';

import Logo from 'assets/logo2.png';
import LockGif from 'assets/gif/lock.gif';
import BellIcon from 'assets/icons/bell.svg?react';
import AvatarImg from 'assets/avatar.jpg';

import Navigation from '@/components/Common/Navigation/Navigation';

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<a href="#">
					<img src={Logo} alt="Logo" />
				</a>
			</div>

			<Navigation />

			<ul className="header__user-panel">
				<li className="header__user-panel__notification">
					<img className="lock-gif" src={LockGif} alt="gif" />
					<div className="header__user-panel__notification">
						<a href="#">
							<Indicator
								shape="circle"
								show={true}
								size="medium"
								status="pending"
							>
								<BellIcon />
							</Indicator>
						</a>
					</div>
				</li>
				<li>
					<a href="#">
						<Avatar src={AvatarImg} />
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
