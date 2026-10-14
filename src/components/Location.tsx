import { useWeatherContext } from "@/hooks/useWeatherContext";

const Location = () => {
	const { locationName, locationLatitude, locationLongitude } =
		useWeatherContext();
	return (
		<div className="flex items-baseline gap-2 justify-center">
			<div className="text-2xl font-medium">{locationName}</div>
			<div className="text-sm font-medium text-gray-200">
				{locationLatitude} | {locationLongitude}
			</div>
		</div>
	);
};

export default Location;
