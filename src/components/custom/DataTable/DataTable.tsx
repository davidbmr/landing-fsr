import React from "react";
import { PrimeDataTable } from "@/components/primeComponents/PrimeDataTable/PrimeDataTable";
import { HeaderDataTable } from "../HeaderDataTable/HeaderDataTable";

interface columns<T> {
	nombre: string;
	campo?: string;
	body?: (data: T) => React.ReactNode;
	widthColumn?: string;
}
interface DataTableProps<T> {
	isHeaderActive?: boolean;
	columns: columns<T>[];
	data: T[];
	onCreate?: () => void;
	onUpdate?: () => void;
	onDelete?: () => void;
	onEye?: () => void;
	onExport?: () => void;
	customIcon?: React.ReactNode;
	customAction?: (rowData: T) => void;
	children?: React.ReactNode;
	dataKey?: unknown;
	customButton?: string;
	onCustomButton?: () => void;
	customButtonDisabled?: boolean;
	paginator?: boolean;
}

export const DataTable = <T,>({
	isHeaderActive = true,
	columns,
	data,
	onCreate,
	onUpdate,
	onDelete,
	onEye,
	onExport,
	customIcon,
	customAction,
	children,
	dataKey,
	customButton,
	onCustomButton,
	customButtonDisabled,
	paginator,
}: DataTableProps<T>) => {
	return (
		<>
			{isHeaderActive ? (
				<HeaderDataTable
					onExport={onExport}
					onCreate={onCreate}
					customButton={customButton}
					onCustomButton={onCustomButton}
					customButtonDisabled={customButtonDisabled}
				/>
			) : null}
			{/* Tabla */}
			<PrimeDataTable
				columns={columns}
				data={data}
				onUpdate={onUpdate}
				onDelete={onDelete}
				onEye={onEye}
				customIcon={customIcon}
				customAction={customAction}
				dataKey={dataKey}
				paginator={paginator}
			/>

			{children ? <div>{children}</div> : null}
		</>
	);
};
