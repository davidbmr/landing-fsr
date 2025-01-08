import React from "react";
import style from "./ServiceCard.module.css";
import { Image } from "primereact/image";
import service from "./assets/service.svg";
interface ServiceCardProps {
	title: string;

	description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
	return (
		<div className={style.body}>
			<div className={style.card}>
				<div className={style.image}>
					<Image src={service} width="79.99px" height="79.99px" />
				</div>
				<div className={style.content}>
					<h2 className={style.title}>{title}</h2>
					<div className={style.divisor}></div>
					<p className={style.paragraph}>{description}</p>
				</div>
			</div>
		</div>
	);
};
