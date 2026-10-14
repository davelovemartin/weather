import { useWeatherContext } from "@/hooks/useWeatherContext";

const Temperature = () => {
	const { currentTemperature } = useWeatherContext();
	return (
		<div className="text-3xl font-bold">
			{currentTemperature}
			<span className="text-sm">°C</span>
		</div>
	);
};

export default Temperature;
