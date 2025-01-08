import React from "react";
import style from "./Projects.module.css";
import { ProjectComponent } from "./components/ProjectComponent";
import desktop_01 from "@/assets/gallery/gallery-01.jpg";
import desktop_02 from "@/assets/desktop/desktop-02.svg";
import desktop_03 from "@/assets/desktop/desktop-03.svg";
import desktop_04 from "@/assets/desktop/desktop-04.svg";

export const Projects = () => {
	return (
		<div>
			<div className={style.first__content}>
				<div className={style.title}>
					<h1>Proyectos</h1>
					<p>
						Inicio <span> - Proyectos</span>
					</p>
				</div>
			</div>
			<div className={style.second__section}>
				<div className={style.card}>
					<ProjectComponent
						title="Proyecto Camino del Inca"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						cardImg={cardImg}
						location="Av. Caminos del Inca Cuadra 2 | Santiago de Surco"
						features={features}
					/>
					<ProjectComponent
						title="Proyecto QABAL - Av. Ayacucho"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						cardImg={cardImg}
						location="Av. Caminos del Inca Cuadra 2 | Santiago de Surco"
						features={features}
					/>
				</div>
			</div>
		</div>
	);
};
const features = {
	usage: "Vivienda Multifamiliar y Comercio.",
	floors: "17 Pisos",
	area: "625.60 m2",
};
const cardImg = [
	{
		itemImageSrc: desktop_01,
		thumbnailImageSrc: desktop_01,
		alt: "string",
	},
	{
		itemImageSrc: desktop_02,
		thumbnailImageSrc: desktop_02,
		alt: "string",
	},
	{
		itemImageSrc: desktop_03,
		thumbnailImageSrc: desktop_03,
		alt: "string",
	},
	{
		itemImageSrc: desktop_04,
		thumbnailImageSrc: desktop_04,
		alt: "string",
	},
];
