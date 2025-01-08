import { useEffect, useState } from "react";
import style from "./PrimeDataTable.module.css";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { MdBlock } from "react-icons/md";
import { Image } from "primereact/image";

import eye from "@/assets/datatable/onEye.svg";
import update from "@/assets/datatable/onUpdate.svg";
import { CheckBoxField } from "@/components/CheckBoxField/CheckBoxField";

const IconButton = ({ icon, onClick, className, style, img }) => {
	return (
		<Button className={className} style={style} type="button" icon={icon} onClick={onClick}>
			<Image src={img} width="28px" />
		</Button>
	);
};

export const PrimeDataTable = ({
	columns,
	data,
	onUpdate,
	onDelete,
	onEye,
	dataKey,
	customIcon,
	customAction,
	paginator = true,
}) => {
	const [dataTable, setDataTable] = useState(data);

	useEffect(() => {
		setDataTable(data);
	}, [data]);

	const buttonSuccess = (rowData) => (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<IconButton
				className={style.button}
				style={{
					display: "flex",
					justifyContent: "center",
					padding: "0",
					background: "none",
					border: "none",
				}}
				img={update}
				onClick={() => onUpdate(rowData)}
			/>
		</div>
	);

	const buttonDecline = (rowData) => (
		<div style={{ display: "flex", justifyContent: "center", padding: "0", margin: "0" }}>
			<IconButton
				className="p-button-danger p-button-rounded"
				style={{ width: "20px", height: "20px", padding: "0", margin: "5px" }}
				icon={<MdBlock size={16} />}
				onClick={() => onDelete(rowData)}
			/>
		</div>
	);

	const buttonEye = (rowData) => (
		<div style={{ display: "flex", justifyContent: "center", padding: "0", margin: "0" }}>
			<IconButton
				className={style.button}
				style={{
					display: "flex",
					justifyContent: "center",
					padding: "0",
					background: "none",
					border: "none",
				}}
				img={eye}
				onClick={() => onEye(rowData)}
			/>
		</div>
	);

	const customButton = (rowData) => (
		<div style={{ display: "flex", justifyContent: "center", padding: "0", margin: "0" }}>
			<IconButton
				className="p-button-rounded"
				style={{ width: "20px", height: "20px", padding: "0", margin: "5px" }}
				icon={customIcon}
				onClick={() => customAction(rowData)}
			/>
		</div>
	);

	return (
		<>
			<DataTable
				value={dataTable}
				paginator={paginator}
				rows={6}
				dataKey={dataKey}
				size="small"
				className={style.datatable}
				emptyMessage="No se han encontrado resultados."
			>
				<Column
					style={{ width: "40px", margin: "0", padding: "0" }}
					headerStyle={{
						background: "var(--primary-color-app)",
						color: "#fff",
						padding: "0px 15px",
					}}
					bodyStyle={{
						fontSize: "15px",
						color: "#1E1E1E",
						fontWeight: "400",
						padding: "25px 15px",
						margin: "0",
						border: "none",
						borderBottom: "1px solid #EEF0F4",
					}}
					header={<CheckBoxField />}
					body={<CheckBoxField />}
				/>

				{columns &&
					columns.map((column, index) => (
						<Column
							key={`${column.campo}-${index}`}
							field={column.campo}
							body={column.body}
							header={column.nombre}
							sortable
							headerStyle={{
								background: "none",
								color: "#707D8F",
								fontSize: "16px",
								fontWeight: "400",
								lineHeight: "26.63px",
								padding: "5px 30px",
							}}
							bodyStyle={{
								fontSize: "15px",
								color: "#707D8F",
								fontWeight: "400",
								padding: "25px 30px",
								margin: "0",
								border: "none",
								cursor: "pointer",
								borderBottom: "1px solid #EEF0F4",
							}}
							style={{
								fontSize: "11px",
							}}
							className={style.column__primeDataTable}
						/>
					))}
				{onEye && (
					<Column
						style={{ width: "40px", margin: "0", padding: "0" }}
						headerStyle={{
							background: "var(--primary-color-app)",
							color: "#fff",
						}}
						bodyStyle={{
							fontSize: "15px",
							color: "#1E1E1E",
							fontWeight: "400",
							padding: "25px 10px",
							margin: "0",
							border: "none",
							borderBottom: "1px solid #EEF0F4",
						}}
						body={buttonEye}
					/>
				)}
				{onUpdate && (
					<Column
						style={{ width: "40px", margin: "0", padding: "0" }}
						headerStyle={{
							background: "var(--primary-color-app)",
							color: "#fff",
						}}
						bodyStyle={{
							fontSize: "15px",
							color: "#1E1E1E",
							fontWeight: "400",
							padding: "25px 10px",
							margin: "0",
							border: "none",
							borderBottom: "1px solid #EEF0F4",
						}}
						body={buttonSuccess}
					/>
				)}

				{customIcon && customAction && (
					<Column
						style={{ width: "40px", margin: "0", padding: "0" }}
						headerStyle={{
							background: "var(--primary-color-app)",
							color: "#fff",
						}}
						bodyStyle={{
							fontSize: "15px",
							color: "#1E1E1E",
							fontWeight: "400",
							padding: "25px 10px",
							margin: "0",
							border: "none",
							borderBottom: "1px solid #EEF0F4",
						}}
						body={customButton}
					/>
				)}
				{onDelete && (
					<Column
						style={{ width: "40px", margin: "0", padding: "0" }}
						headerStyle={{
							background: "var(--primary-color-app)",
							color: "#fff",
						}}
						bodyStyle={{
							fontSize: "15px",
							color: "#1E1E1E",
							fontWeight: "400",
							padding: "25px 10px",
							margin: "0",
							border: "none",
							borderBottom: "1px solid #EEF0F4",
						}}
						body={buttonDecline}
					/>
				)}
			</DataTable>
		</>
	);
};
