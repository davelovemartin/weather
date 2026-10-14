import type React from "react";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

interface LocationInputProps {
	inputRef: React.ForwardedRef<HTMLInputElement>;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocationInput = ({ inputRef, onChange }: LocationInputProps) => (
	<Field>
		<FieldLabel>Location</FieldLabel>
		<Input ref={inputRef} type="text" name="location" onChange={onChange} />
	</Field>
);

export default LocationInput;
