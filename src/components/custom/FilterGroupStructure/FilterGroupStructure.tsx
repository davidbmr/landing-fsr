import React from "react";
import style from "./FilterGroupStructure.module.css";
import { Image } from "primereact/image";
import search from "./assets/search.svg";
interface Props {
	children: React.ReactNode;
	onPostFilter: () => void;
}

export const FilterGroupStructure = ({ children, onPostFilter }: Props) => {
	return (
		<div className={style.filterGroupStructure__container}>
			{children}
			<button
				title={"Buscar"}
				className={`${style.button_filter} ${style.button}`}
				onClick={onPostFilter}
				type="button"
			>
				<Image src={search} />
			</button>
		</div>
	);
};
