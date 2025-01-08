import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";
import { Main } from "@/pages/main/Main";
import { NavBar } from "@/components/layouts/navbar/NavBar";
import { Footer } from "@/components/layouts/footer/Footer";
import { AboutUs } from "@/pages/AboutUs/AboutUs";
import { Projects } from "@/pages/ProjectsPage/Projects";
import { Service } from "@/pages/ServicePage/Service";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<div className={style.body}>
				<div className={style.navbar}>
					<NavBar />
				</div>
				<Routes>
					<>
						<Route path="/inicio" element={<Main />} />
						<Route path="/About-us" element={<AboutUs />} />
						<Route path="/Service" element={<Service />} />
						<Route path="/Projects" element={<Projects />} />

						<Route path="/*" element={<Navigate to="/inicio" />} />
					</>
				</Routes>

				<Footer />
			</div>
		</BrowserRouter>
	);
}
