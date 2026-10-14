import { z } from "zod";

export const WeatherSchema = z.object({
	location: z.object({
		country: z.string(),
		lat: z.number(),
		localtime: z.string(),
		localtime_epoch: z.number(),
		lon: z.number(),
		name: z.string(),
		region: z.string(),
		tz_id: z.string(),
	}),
	current: z.object({
		temp_c: z.number(),
		condition: z.object({
			text: z.string(),
			icon: z.string(),
		}),
	}),
});

export type Weather = z.infer<typeof WeatherSchema>;
