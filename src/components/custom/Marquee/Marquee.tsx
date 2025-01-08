import React from "react";
import style from "./Marquee.module.css";
import Marquee from "react-fast-marquee";

interface MarqueeOptionProps {
	label?: string;
	img: string;
}

interface MarqueeProps {
	options: MarqueeOptionProps[];
}

export const MarqueeComponent = ({ options }: MarqueeProps) => {
	return (
		<Marquee className={style.marquee} pauseOnHover gradient >
			{options.map((item, key) => (
				<div key={key} className={style.item}>
					<img src={item.img} alt={item.label} />
					<p>{item.label}</p>
				</div>
			))}
		</Marquee>
	);
};
