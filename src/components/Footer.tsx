import { CardFooter } from "./ui/card";

const Footer = () => (
	<CardFooter className="justify-center text-center">
		<small>
			powered by:{" "}
			<a href="https://www.weatherapi.com/" title="Free Weather API">
				WeatherAPI.com
			</a>
		</small>
	</CardFooter>
);

export default Footer;
