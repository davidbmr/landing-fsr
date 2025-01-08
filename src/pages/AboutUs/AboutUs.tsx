import React from "react";
import style from "./AboutUs.module.css";
import { CustomButton } from "@/components/custom/CustomButton/CustomButton";
import { Card } from "primereact/card";

import card_img from "@/assets/img/Card_img.svg";
import service_img from "@/assets/img/Service_img.svg";
export const AboutUs = () => {
	return (
		<div>
			<div className={style.first__content}>
				<div className={style.title}>
					<h1>Conoce mas sobre nosotros</h1>
					<p>
						Inicio <span> - Nosotros</span>
					</p>
				</div>
			</div>
			<div className={style.second__section}>
				<div className={style.card}>
					<div className={style.cards}>
						<Card
							className={style.first__card}
							style={{ width: "526px", borderRadius: "25px" }}
							header={
								<div style={{ padding: "40px 20px 50px" }}>
									<h2
										style={{
											fontSize: "40px",
											fontWeight: "600",
											lineHeight: "48.41px",
											color: "#454545",
										}}
									>
										¿Quiénes Somos?
									</h2>
								</div>
							}
							footer={
								<div style={{ padding: "15px 20px" }}>
									<CustomButton
										text="Contáctanos"
										backgroundButton="#09A8B0"
										radius="7px"
										height="39px"
										width="129px"
										sizeP="16px"
									/>
								</div>
							}
						>
							<div
								style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}
							>
								<p
									style={{
										fontSize: "24px",
										fontWeight: "400",
										lineHeight: "29.05px",
										color: "#454545",
									}}
								>
									FSR Asesoría y Gestiones S.A.C. está conformado por profesionales especializados
									en el Sector Inmobiliario, gestionando con éxito Proyectos arquitectónicos con
									rapidez y viabilidad en trámites municipales y/o registrales o el saneamiento
									técnico legal de inmuebles; en los distritos de Lima Metropolitana.
								</p>
							</div>
						</Card>
						<img src={card_img} className={style.img} />
					</div>
					<div className={style.content__card}>
						<img src={service_img} className={style.img} />
						<div className={style.paragraph}>
							<p>
								FSR nace hace 7 años, después que su socia fundadora, Fanny Salas Rojas, culminó una
								extensa experiencia en cargos gerenciales en la administración pública por más de 20
								años.
							</p>
							<p>
								Personas naturales como jurídicas necesitaban sanear sus propiedades o terrenos y
								ejecutar Proyectos arquitectónicos autorizados por las municipalidades distritales
								en el menor tiempo posible, evitando tanta burocracia en trámites largos y tediosos,
								y solucionar los problemas que se iban presentando en este proceso.
							</p>
						</div>
					</div>
					<div className={style.project__card}>
						<div className={style.legend}>
							<div className={style.content}>
								<h3>+400 Proyectos</h3>
								<p>
									En nuestros años de experiencia hemos realizado mas de 400 proyectos exitosamente.
								</p>
							</div>
							<div className={style.content}>
								<h3>+200 Clientes satisfechos</h3>
								<p>
									En nuestros años de experiencia hemos realizado mas de 400 proyectos exitosamente.
								</p>
							</div>
							<div className={style.content}>
								<h3>+7 Años</h3>
								<p>Contamos con mas de 7 años de experiencia.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
