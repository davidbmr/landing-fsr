import React, { ReactNode } from "react";
import style from "./CustomButton.module.css";

interface CustomButtonProps {
	icon?: string | ReactNode;
	text: string;
	shortcut?: string;
	backgroundButton?: string;
	height?: string;
	colorP?: string;
	sizeP?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	additionalClassName?: string;
	type?: "button" | "submit" | "reset";
	iconWidth?: number;
	width?: string;
	radius?: string;
}

export const CustomButton = ({
	icon,
	text,
	shortcut,
	backgroundButton = "#09A8B0",
	height = "55px",
	width = "192px",
	colorP = "#fff",
	sizeP,
	additionalClassName,
	onClick,
	type = "button",
	iconWidth,
	radius = "30px",
}: CustomButtonProps) => {
	const styles: React.CSSProperties = {
		background: backgroundButton,
		height: height,
		width: width,
		color: colorP,
		borderRadius: radius,
	};
	const stylesP: React.CSSProperties = {
		color: colorP,
		fontSize: sizeP,
	};

	const combinedClassNames = `${style.button__action} ${additionalClassName}`;

	return (
		<button className={combinedClassNames} style={styles} onClick={onClick} type={type}>
			<p className={style.button__text} style={stylesP}>
				{text} {shortcut ? `[${shortcut}]` : null}
			</p>
			{typeof icon === "string" && <img src={icon} alt="icono" width={iconWidth} />}
			{typeof icon === "object" && icon}
		</button>
	);
};
