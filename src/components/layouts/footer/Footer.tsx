import React from "react";
import style from "./Footer.module.css";
import { Card } from "primereact/card";
import { TextBoxField } from "@/components/custom/TextBoxField/TextBoxField";
import PrimeTextArea from "@/components/primeComponents/PrimeTextArea/PrimeTextArea";
import { CustomButton } from "@/components/custom/CustomButton/CustomButton";
import { Image } from "primereact/image";

import instagram__01 from "@/assets/icons/instagram_01.svg";
import facebook__01 from "@/assets/icons/facebook__01.svg";
import linkedin__01 from "@/assets/icons/linkedin_01.svg";
import instagram__02 from "@/assets/icons/instagram_02.svg";
import facebook__02 from "@/assets/icons/facebook_02.svg";
import linkedin__02 from "@/assets/icons/linkedin_02.svg";
import X from "@/assets/icons/X.svg";

export const Footer = () => {
	return (
		<div className={style.Footer}>
			<div className={style.body}>
				<div className={style.title}>
					<h1>Cuéntanos como podemos ayudarte</h1>
					<div className={style.divisor}></div>
					<div className={style.icons}>
						<Image src={instagram__01} />
						<Image src={facebook__01} />
						<Image src={linkedin__01} />
					</div>
				</div>
				<Card className={style.form__card}>
					<form className={style.form}>
						<TextBoxField textLabel="Titulo" name="" value="" onChange={() => {}} />
						<div className={style.inputs}>
							<TextBoxField textLabel="Nombre" name="" value="" onChange={() => {}} />

							<TextBoxField textLabel="Apellidos" name="" value="" onChange={() => {}} />
						</div>
						<div className={style.inputs}>
							<TextBoxField textLabel="Email" name="" value="" onChange={() => {}} />
							<TextBoxField textLabel="Empresa" name="" value="" onChange={() => {}} />
						</div>
						<PrimeTextArea value={""} name={""} onChange={() => {}} textLabel="Mensaje" />

						<CustomButton text="Enviar" radius="8px" additionalClassName={style.button} />
					</form>
				</Card>
			</div>
			<div className={style.extra}>
				<div className={style.company}>
					<h1>FSR</h1>
					<h3>Asesoría & Gestiones</h3>
					<p>Todos los derechos reservadors 2024</p>
				</div>
				<div className={style.contact}>
					<label>Contactanos</label>
					<p>(+51) 555 555 555</p>
					<p>JohnDoe@gmail.com</p>
				</div>
				<div className={style.social}>
					<p>Síguenos</p>
					<div className={style.media__icons}>
						<Image src={facebook__02} width="13.6px" height="25.9px" />
						<Image src={linkedin__02} width="24.68px" height="23.31px" />
						<Image src={X} width="22.64px" height="23.31px" />
						<Image src={instagram__02} width="25.9px" height="25.9px" />
					</div>
				</div>
			</div>
		</div>
	);
};
