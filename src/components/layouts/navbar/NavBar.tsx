import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";

import { data } from "./data/routes";
import Logo from "@/assets/logo.svg";
import menu_horizonal from "@/assets/utils/horizontal_menu.svg";
export const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > window.innerHeight * 0.1;

			setScrolled(isScrolled);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const navbar = document.querySelector(`.${style.navbar}`);
			if (navbar && !navbar.contains(event.target as Node)) {
				setIsVisible(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	const handleClick = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className={style.responsive}>
			{window.innerWidth <= 1024 && (
				<div className={style.menu}>
					<button style={{ border: "none", background: "none" }} onClick={handleClick}>
						<img src={menu_horizonal} height={30} width={30} />
					</button>
				</div>
			)}
			<div
				className={`${style.navbar} ${
					scrolled ? style.scrolled : window.innerWidth <= 1024 ? style.responsive__navbar : ""
				} ${isVisible ? style.show : ""}`}
			>
				<div className={style.body}>
					<img src={Logo} height={89} width={241} />
					<div className={style.content}>
						{data.map((item, key) => (
							<a key={key} href={item.href} className={style.elements}>
								{item.title}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
