import { create } from "zustand";

interface AuthState {
	token: string | null;
	login: (token: string) => void;
	logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
	token: localStorage.getItem("token"),
	login: (newToken: string) => {
		localStorage.setItem("token", newToken);
		set({ token: newToken });
	},
	logout: () => {
		localStorage.removeItem("token");
		set({ token: null });
	},
}));

export default useAuthStore;
