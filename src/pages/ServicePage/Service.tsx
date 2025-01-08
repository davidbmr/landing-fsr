import React from "react";
import style from "./Service.module.css";
import { Card } from "primereact/card";

import service__01 from "@/assets/img/Service-01.png";
export const Service = () => {
	return (
		<div>
			<div className={style.first__content}>
				<div className={style.title}>
					<h1>Conoce todos nuestros Servicios</h1>
					<p>
						Inicio <span> - Servicios</span>
					</p>
				</div>
			</div>
			<div className={style.second__section}>
				<div className={style.card}>
					<div className={style.content}>
						<Card
							style={{ width: "526px" }}
							className={style.service__card}
							header={<h1> Servicios de Saneamiento Físico Legal - Elaboración de Expedientes</h1>}
						>
							<ul className={style.card__contentList}>
								<li className={style.card__list}>Habitaciones Urbanas.</li>
								<li className={style.card__list}>Rectificación de Linderos.</li>
								<li className={style.card__list}>Declaratoria de Fábrica e Independización.</li>
								<li className={style.card__list}>Subdivisión de Lotes.</li>
								<li className={style.card__list}>Regulaciones de Obra.</li>
								<li className={style.card__list}>Acumulaciones de Lotes.</li>
								<li className={style.card__list}>
									Estudio de Títulos de propiedad, en aspectos técnicos-legales y registrales.
								</li>
							</ul>
						</Card>
						<img src={service__01} className={style.img} />
					</div>

					<Card className={style.second__service__card}>
						<div className={style.card__flex}>
							<img
								src={service__01}
								width="526px"
								height="378.71px"
								className={style.img__rounded}
							/>
							<div className={style.card__management}>
								<h1>Asesoría Técnico Legal en Gestión de Proyectos inmobiliarios</h1>
								<ul className={style.card__content}>
									<li className={style.card__list}>
										Optimización del terreno con el certificado de parámetros urbanísticos y la
										aplicación de normativa nacional,provincial y distrital para la mayor
										rentabilidad del proyecto.
									</li>
									<li className={style.card__list}>
										Celeridad en procesos a nivel municipal, registral y ministerial aplicando
										nuestra experiencia y criterios.
									</li>
								</ul>
							</div>
						</div>
					</Card>

					<div className={style.card__flex}>
						<div className={style.card__management}>
							<h1>Servicios de Asesoría Técnico Legal en gestión de proyectos inmobiliarios</h1>
							<p>En materia de: </p>
							<ul className={style.card__content}>
								<li className={style.card__list}>Anteproyectos.</li>
								<li className={style.card__list}>
									Proyectos con comisión técnica y revisores urbanos.
								</li>
								<li className={style.card__list}>
									Conformidad de obra y declaratoria de edificación.
								</li>
								<li className={style.card__list}>Nulidad de licencias de edificación.</li>
							</ul>
						</div>
						<img src={service__01} width="363.93px" height="363.93px" className={style.img} />
					</div>

					<Card className={style.second__service__card}>
						<div className={style.card__flex}>
							<img
								src={service__01}
								width="526px"
								height="378.71px"
								className={style.img__rounded_02}
							/>
							<div className={style.card__management}>
								<h1>Conoce mas sobre los Revisores Urbanos</h1>
								<ul className={style.card__content}>
									<li className={style.card__list}>
										Optimización del terreno con el certificado de parámetros urbanísticos y la
										aplicación de normativa nacional,provincial y distrital para la mayor
										rentabilidad del proyecto.
									</li>
									<li className={style.card__list}>
										Celeridad en procesos a nivel municipal, registral y ministerial aplicando
										nuestra experiencia y criterios.
									</li>
								</ul>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};
