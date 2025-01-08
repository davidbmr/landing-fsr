import React, { ChangeEvent } from "react";
import style from "./TextBoxField.module.css";
import { InputText } from "primereact/inputtext";

interface TextBoxFieldProps {
	textLabel?: string;
	value: string | undefined;
	name: string;
	type?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	direction?: "row" | "column";
	disabled?: boolean;
	labelWidth?: string;
	containerStyle?: React.CSSProperties;
	labelWrap?: string;
	maxLength?: number | undefined;
	minLength?: number | undefined;
	toUpperCase?: boolean;
	containerWidth?: string;
	placeholder?: string;
}

export const TextBoxField = ({
	textLabel,
	value,
	name,
	type = "text",
	onChange,
	direction = "column",
	disabled = false,
	labelWidth = "100%",
	labelWrap,
	maxLength,
	minLength = 0,
	containerWidth = "",
	placeholder = "",
}: TextBoxFieldProps) => {
	const styles: React.CSSProperties = {
		width: labelWidth,
		fontSize: "16px",
		whiteSpace: labelWrap,
		fontWeight: "400"
	};
	const stylesContainer: React.CSSProperties = {
		width: containerWidth,
	};

	return (
		<div
			className={`${style.item__group} ${
				direction === "column" ? style.item__column : style.item__row
			}`}
			style={stylesContainer}
		>
			{textLabel ? <label style={styles}>{textLabel}</label> : <></>}

			<InputText
				className={style.input}
				id="name"
				value={value}
				name={name}
				type={type}
				onChange={onChange}
				autoComplete="off"
				disabled={disabled}
				maxLength={maxLength}
				minLength={minLength}
				placeholder={placeholder}
				
			/>
		</div>
	);
};
