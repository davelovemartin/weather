import { Button } from "./ui/button";

interface LocationButtonProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	title: string;
}

const LocationButton = ({ onClick, title }: LocationButtonProps) => (
	<Button onClick={onClick} size="xs" className="mt-4 w-full">
		{title}
	</Button>
);

export default LocationButton;
