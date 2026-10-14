import { CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Header() {
	return (
		<CardHeader>
			<CardTitle>
				<h1 className="text-3xl font-bold text-center">Weather</h1>
			</CardTitle>

			<CardDescription className="text-center">
				Current Weather Information
			</CardDescription>
		</CardHeader>
	);
}
