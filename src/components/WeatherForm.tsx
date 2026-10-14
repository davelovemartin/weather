import { useWeatherContext } from "@/hooks/useWeatherContext";
import LocationButton from "./LocationButton";
import LocationInput from "./LocationInput";

const WeatherForm = () => {
	const { inputRef, setInputValue, setLocation, inputValue, errorMessage } =
		useWeatherContext();

	return (
		<div>
			<LocationInput
				inputRef={inputRef}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setInputValue(e.target.value)
				}
			/>
			<LocationButton
				onClick={() => setLocation(inputValue)}
				title="check weather"
			/>
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	);
};

export default WeatherForm;
