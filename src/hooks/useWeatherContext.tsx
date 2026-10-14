import { getRouteApi, useNavigate } from "@tanstack/react-router";
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import type { Weather } from "@/data/schema/Weather";
import { raise } from "@/lib/utils";

const route = getRouteApi("/");

type WeatherContext = {
	inputRef: React.RefObject<HTMLInputElement | null>;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
	inputValue: string;
	errorMessage: string;
	setLocation: (location: string) => void;
	currentConditionText: Weather["current"]["condition"]["text"];
	currentConditionIcon: Weather["current"]["condition"]["icon"];
	locationName: Weather["location"]["name"];
	locationLatitude: Weather["location"]["lat"];
	locationLongitude: Weather["location"]["lon"];
	currentTemperature: Weather["current"]["temp_c"];
};

const WeatherContext = createContext<WeatherContext | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const navigate = useNavigate({ from: "/" });

	const focus = useCallback(
		(inputRef: React.RefObject<HTMLInputElement | null>) => {
			if (inputRef === null) return;
			inputRef.current?.focus();
		},
		[],
	);

	useEffect(() => {
		focus(inputRef);
	}, [focus]);

	const { weather } = route.useLoaderData() ?? raise("No loader data");

	console.log("WeatherProvider weather data:", weather);

	const setLocation = (location: string) => {
		if (!location || location.trim() === "") {
			setErrorMessage("Please enter a valid location.");
			return;
		}
		navigate({ search: () => ({ location }) });
	};

	return (
		<WeatherContext.Provider
			value={{
				inputRef,
				setInputValue,
				inputValue,
				errorMessage,
				setLocation,
				currentConditionText: weather?.current?.condition?.text ?? "",
				currentConditionIcon: weather?.current?.condition?.icon ?? "",
				locationName: weather?.location?.name ?? "",
				locationLatitude: weather?.location?.lat ?? "",
				locationLongitude: weather?.location?.lon ?? "",
				currentTemperature: weather?.current?.temp_c ?? "",
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};

const useWeatherContext = () => {
	const context = useContext(WeatherContext);
	if (!context) {
		throw new Error("useContext must be used within a WeatherContext.Provider");
	}
	return context;
};

export { useWeatherContext };
