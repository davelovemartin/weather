import Temperature from "@/components/Temperature";
import { useWeatherContext } from "@/hooks/useWeatherContext";

const WeatherConditions = () => {
	const { currentConditionText, currentConditionIcon } = useWeatherContext();
	return (
		<div className="flex items-center gap-1 flex-col">
			<img
				className="w-24 h-24"
				src={currentConditionIcon}
				alt={currentConditionText}
			/>
			<div className="flex gap-2 items-baseline">
				<Temperature />
				<p>{currentConditionText}</p>
			</div>
		</div>
	);
};

export default WeatherConditions;
