import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import WeatherWidget from "@/components/WeatherWidget";
import { WeatherProvider } from "@/hooks/useWeatherContext";

const fetchWeather = createServerFn({ method: "GET" })
	.inputValidator((data: { location: string }) => data)
	.handler(async ({ data }) => {
		console.log("fetchWeather, location:", data.location);
		const url = process.env.WEATHER_API_BASE_URL;
		const key = process.env.WEATHER_API_KEY;
		if (!url || !key) {
			throw new Error("Weather API base URL or key is not defined");
		}
		const response = await fetch(
			`${url}/current.json?key=${key}&q=${encodeURIComponent(data.location)}&aqi=no`,
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch weather: ${response.statusText}`);
		}

		return response.json();
	});

export const Route = createFileRoute("/")({
	component: App,
	validateSearch: (search: Record<string, unknown>) => {
		return {
			location: (search.location as string) || "Bristol",
		};
	},
	loaderDeps: ({ search: { location } }) => ({ location }),
	loader: async ({ deps: { location } }) => {
		console.log("Loader called with location:", location);
		const weatherData = await fetchWeather({ data: { location } });
		return { weather: weatherData };
	},
});

function App() {
	return (
		<WeatherProvider>
			<WeatherWidget />
		</WeatherProvider>
	);
}
