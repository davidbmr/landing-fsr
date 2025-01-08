import React from "react";
import style from "./SelectField.module.css";

import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

interface SelectFieldProps {
	textLabel?: string;
	value: string | undefined | number | boolean;

	name: string;
	placeholder?: string;
	optionLabel?: string;
	optionValue?: string;
	onChange: (e: DropdownChangeEvent) => void;
	options: unknown[];
	direction?: "row" | "column";
	labelWidth?: string;
	disabled?: boolean;
	containerWidth?: string;
}

export const SelectField = ({
	textLabel,
	value,
	name,
	placeholder = "Seleccione una opción",
	optionLabel = "name",
	optionValue = "value",
	onChange,
	options,
	direction = "column",
	labelWidth = "100%",
	disabled = false,
	containerWidth = "100%",
}: SelectFieldProps) => {
	const styles: React.CSSProperties = {
		width: labelWidth,
		fontSize: "12px",
	};
	const stylesContainer: React.CSSProperties = {
		width: containerWidth,
	};

	return (
		<div
			className={`${direction == "column" ? style.column__item : style.row__item}`}
			style={stylesContainer}
		>
			{textLabel ? <label style={styles}>{textLabel}</label> : <></>}

			<Dropdown
				className={style.dropdown__selectfield}
				value={value}
				name={name}
				onChange={onChange}
				options={options}
				disabled={disabled || options.length === 0}
				optionLabel={optionLabel}
				optionValue={optionValue}
				placeholder={placeholder}
				emptyMessage={<p className={style.emptyMessage__text}>No hay resultados.</p>}
			/>
		</div>
	);
};
