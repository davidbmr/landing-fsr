import React, { useRef } from "react";
import style from "./ProjectComponent.module.css";
import { Card } from "primereact/card";
import { Galleria } from "primereact/galleria";

import locationIcon from "@/assets/utils/location.icon.svg";

import icon_01 from "./assets/icon-01.svg";
import icon_02 from "./assets/icon-02.svg";
import icon_03 from "./assets/icon-03.svg";

interface ImageItem {
	itemImageSrc: string;
	thumbnailImageSrc: string;
	alt?: string;
}
interface FeaturesItem {
	usage: string;
	area: string;
	floors: string;
}
interface ProjectComponentProps {
	cardImg: ImageItem[];
	title: string;
	description: string;
	location: string;
	features: FeaturesItem;
}
export const ProjectComponent = ({
	cardImg,
	title,
	description,
	location,
	features,
}: ProjectComponentProps) => {
	const galleria = useRef<Galleria | null>(null);

	const itemTemplate = (item: ImageItem) => {
		return (
			<img src={item.itemImageSrc} alt={item?.alt} style={{ width: "100%", display: "block" }} />
		);
	};

	const thumbnailTemplate = (item: ImageItem) => {
		return <img src={item.thumbnailImageSrc} alt={item?.alt} style={{ display: "block" }} />;
	};

	const handleImageClick = () => {
		galleria?.current?.show();
	};

	return (
		<div className={style.body}>
			<div className={style.cards}>
				<Card
					className={style.card__component}
					header={
						<div className={style.card__title}>
							<h1>{title}</h1>
						</div>
					}
				>
					<div className={style.card__content}>
						<h2>Descripción</h2>
						<hr />
						<p>{description}</p>
						<div className={style.location}>
							<img src={locationIcon} alt="" />
							<p>{location}</p>
						</div>
					</div>
				</Card>
				<Galleria
					ref={galleria}
					value={cardImg}
					numVisible={9}
					style={{ maxWidth: "80%" }}
					circular
					fullScreen
					showItemNavigators
					showThumbnails={false}
					item={itemTemplate}
					thumbnail={thumbnailTemplate}
				/>
				<div className={style.img}>
					<img
						className={style.img}
						src={cardImg[0]?.itemImageSrc || ""}
						alt="Open Gallery"
						onClick={handleImageClick}
					/>
				</div>
			</div>
			<div className={style.features}>
				<div className={style.feature}>
					<img src={icon_01} alt="" width={"82.4px"} height={"82.4px"} />
					<h2>Uso</h2>
					<p>{features.usage}</p>
				</div>
				<div className={style.feature}>
					<img src={icon_02} alt="" width={"82.4px"} height={"82.4px"} />
					<h2>Área de Terreno</h2>
					<p>{features.area}</p>
				</div>
				<div className={style.feature}>
					<img src={icon_03} alt="" width={"82.4px"} height={"82.4px"} />
					<h2>Pisos</h2>
					<p>{features.floors}</p>
				</div>
			</div>
		</div>
	);
};
