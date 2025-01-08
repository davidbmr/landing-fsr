import React from "react";
import style from "./CheckBoxField.module.css";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface CheckBoxFieldProps {
	textLabel: string;
	value: boolean;
	name: string;
	onChange: (e: CheckboxChangeEvent) => void;
	direction?: "row" | "column";
	reverseDirection?: boolean;
	size?: number;
}

export const CheckBoxField = ({
	textLabel,
	value,
	name,
	onChange,
	size,
	direction,
	reverseDirection,
}: CheckBoxFieldProps) => {
	const styles: React.CSSProperties = {
		fontSize: "12px",
		whiteSpace: "nowrap",
	};
	return (
		<div
			className={`${style.item__group} ${
				direction === "column" ? style.item__column : style.item__row
			} ${reverseDirection ? style.item__reverse : ""}`}
		>
			<label style={styles}>{textLabel}</label>

			<Checkbox
				value={value}
				name={name}
				onChange={onChange}
				size={size}
				checked={value}
				style={{ display: "flex", justifyContent: "flex-start", width: "fit-content" }}
			/>
		</div>
	);
};
