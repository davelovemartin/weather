import Location from "@/components/Location";
import WeatherConditions from "@/components/WeatherConditions";
import WeatherIcon from "@/components/WeatherIcon";
import { CardContent } from "./ui/card";
import WeatherForm from "./WeatherForm";

const WeatherWidget = () => {
	return (
		<CardContent>
			<WeatherIcon />
			<Location />
			<WeatherConditions />
			<WeatherForm />
		</CardContent>
	);
};

export default WeatherWidget;
