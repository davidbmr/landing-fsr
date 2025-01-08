import React from "react";
import style from "./Main.module.css";
import whatsapp from "@/assets/utils/whatsapp.logo.svg";
import { CustomButton } from "@/components/custom/CustomButton/CustomButton";
import { MarqueeComponent } from "@/components/custom/Marquee/Marquee";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { ServiceCard } from "./components/ServiceCard/ServiceCard";

import kallpa from "./assets/clients/kallpa.svg";
import gerlpa from "./assets/clients/gerlpa.svg";
import sancharbel from "./assets/clients/sancharbel.svg";

import card_icon from "./assets/icons/card_icon.svg";
import card_img from "./assets/img/Card_img.svg";

import news1 from "./assets/news/news1.svg";
import news2 from "./assets/news/news2.svg";

import member1 from "./assets/team/member1.jpg";
import member2 from "./assets/team/member2.jpg";
import member3 from "./assets/team/member3.jpg";

import qualify from "./assets/icons/qualify.svg";
import quotation from "./assets/icons/quotation.svg";
export const Main = () => {
	return (
		<>
			<div className={style.first_section}>
				<div className={style.body}>
					<div>
						<div className={style.title_content}>
							<h1 className={style.title}>Lorem Ipsum is simply dummy</h1>
							<p className={style.description}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</p>
						</div>
						<div className={style.buttons}>
							<div className={style.contact_button}>
								<CustomButton text="Contáctanos" />
							</div>
							<div className={style.contact_ws}>
								<img src={whatsapp} height={72.67} width={72.67} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.second_section}>
				<div className={style.client__section}>
					<p>Conoce a</p>
					<div style={{ display: "flex", gap: "5px" }}>
						<span className={style.label_1}>Nuestros</span>
						<span className={style.label_2}>Clientes</span>
					</div>
				</div>
				<div className={style.marquee}>
					<MarqueeComponent options={options} />
				</div>
				<div className={style.cards}>
					<Card
						style={{ width: "526px", borderRadius: "25px" }}
						header={
							<div style={{ padding: "20px " }}>
								<h2
									style={{
										fontSize: "40px",
										fontWeight: "600",
										lineHeight: "48.41px",
										color: "#454545",
									}}
								>
									FSR
								</h2>
								<p
									style={{
										fontSize: "16px",
										fontWeight: "400",
										lineHeight: "19.36px",
										color: "#454545",
									}}
								>
									Asesoría & Gestiones
								</p>
							</div>
						}
						footer={
							<div style={{ padding: "10px" }}>
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
						<div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
							<p
								style={{
									fontSize: "24px",
									fontWeight: "400",
									lineHeight: "29.05px",
									fontFamily: "Inter",
									color: "#454545",
								}}
							>
								En FSR nos ocupamos de todas las Áreas Técnicas y Legales que competen al
								Saneamiento Físico Legal y al Desarrollo Inmobiliario y Arquitectónico.
							</p>
							<h2
								style={{
									fontSize: "20px",
									fontWeight: "600",
									lineHeight: "24.2px",
									color: "#1E1E1E",
								}}
							>
								Lorem Ipsum
							</h2>
							<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
								<div style={{ display: "flex", alignItems: "center" }}>
									<img src={card_icon} alt="" />
									<span>Lorem Ipsum is simply dummy</span>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<img src={card_icon} alt="" />
									<span>Lorem Ipsum is simply dummy</span>
								</div>
							</div>
						</div>
					</Card>
					<img src={card_img} className={style.card__img} />
				</div>
			</div>
			<div className={style.third__content}>
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
				<div className={style.button}>
					<CustomButton
						text="Contáctanos"
						width="324.31px"
						height="63.11px"
						additionalClassName={style.contact_button_2}
					/>
				</div>
			</div>
			<div className={style.fourth__content}>
				<div className={style.news__card}>
					<div className={style.news__content}>
						<div className={style.news__title}>
							<h2>Noticias y Actulizaciones importantes del mes</h2>
						</div>

						<div className={style.news__content__1}>
							<div className={style.news__paragraph}>
								<h3>Lorem Ipsum is simply</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								</p>
							</div>
							<div>
								<img src={news1} />
							</div>
						</div>

						<div className={style.news__content__2}>
							<div className={style.news__paragraph}>
								<h3>Lorem Ipsum is simply</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								</p>
							</div>
						</div>
						<div className={style.news__content__3}>
							<div className={style.news__paragraph}>
								<h3>Lorem Ipsum is simply</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								</p>
							</div>
						</div>
						<div className={style.news__content__4}>
							<div className={style.news__subcontent__1}>
								<div>
									<img src={news2} />
								</div>
								<div className={style.news__subcontent__paragraph}>
									<h3>Lorem Ipsum is simply</h3>
									<p>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									</p>
								</div>
							</div>
							<div className={style.news__subcontent__2}>
								<div>
									<img src={news2} />
								</div>
								<div className={style.news__subcontent__paragraph}>
									<h3>Lorem Ipsum is simply</h3>
									<p>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.client__section} style={{ padding: "90px 0px" }}>
					<p>Conoce mas sobre</p>
					<div style={{ display: "flex", gap: "5px" }}>
						<span className={style.label_1}>Nuestros</span>
						<span className={style.label_2}>Servicios</span>
					</div>
				</div>
				<div className={style.service__content}>
					<div className={style.card}>
						<ServiceCard
							title="Revisores Urbanos"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						/>
						<ServiceCard
							title="Revisores Urbanos"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						/>
						<ServiceCard
							title="Revisores Urbanos"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						/>
						<ServiceCard
							title="Revisores Urbanos"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						/>
					</div>
				</div>
				<div className={style.button} style={{ paddingTop: "50px" }}>
					<CustomButton text="Ver mas" additionalClassName={style.view__button} colorP="#09a8b0" />
				</div>
				<div className={style.teammate}>
					<div>
						<p className={style.teammate__paragraph}>Conoce a</p>
						<div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
							<span className={style.label_3}>Nuestro</span>
							<span className={style.label_4}>Equipo</span>
						</div>
						<div className={style.button} style={{ paddingTop: "50px" }}>
							<CustomButton
								text="Ver mas"
								additionalClassName={style.view__button}
								colorP="#09a8b0"
							/>
						</div>
					</div>
					<div className={style.team__gallery}>
						<img src={member2} className={style.team__img} />
						<img src={member3} className={style.team__img} />
						<img src={member1} className={style.team__img} />
					</div>
				</div>
				<div className={style.comments__section}>
					<div className={style.comment__card}>
						<div className={style.comments__title}>
							<div className={style.title__content}>
								<p>Opiniones de clientes</p>
								<h1>Algunos comentarios de nuestros clientes</h1>
							</div>
							<div>
								<Image src={qualify} />
							</div>
						</div>
						<div className={style.carrousell}>
							<div className={style.comment__child_card}>
								<Image src={quotation} />
								<div className={style.comment}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard
								</div>
								<div className={style.autor}>
									<div></div>
									<p>Adel Gannem</p>
								</div>
							</div>
							<div className={style.comment__child_card}>
								<Image src={quotation} />
								<div className={style.comment}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard
								</div>
								<div className={style.autor}>
									<div></div>
									<p>Gabriel Martinez</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
/**
 *  Falta componentetizar ciertas cards
 *  para legibilizar el codigo
 */
const options = [
	{ label: "", img: gerlpa },
	{ label: "", img: sancharbel },
	{ label: "", img: kallpa },
];
