import { HOMEPAGE_URL } from "../constants/index";
import ProfilePicJoao from "../assets/images/profile-1-joao.png";
import ProfilePicMickael from "../assets/images/profile-2-joao.png";
import ProfilePicLuis from "../assets/images/profile-3-joao.png";
import ProfilePicCelso from "../assets/images/profile-4-joao.png";

export const USERS = [
	{
		id: "0f04ab1c-1f33-4896-9a82-f08a206f7fbe",
		to: HOMEPAGE_URL,
		name: "João",
		image: {
			src: ProfilePicJoao,
			alt: "Profile picture",
		},
		label: "Choose João's profile",
	},
	{
		id: "31f7e325-801d-4305-bd5b-d2d29c8f2ef4",
		to: HOMEPAGE_URL,
		name: "Mickael",
		image: {
			src: ProfilePicMickael,
			alt: "Profile picture",
		},
		label: "Choose Mickael's profile",
	},
	{
		id: "f32dd5d6-6ad5-4469-b9cf-de6b6517d1f9",
		to: HOMEPAGE_URL,
		name: "Luís",
		image: {
			src: ProfilePicLuis,
			alt: "Profile picture",
		},
		label: "Choose Luis's profile",
	},
	{
		id: "462c053e-ec01-44b6-8fee-020dad249e2f",
		to: HOMEPAGE_URL,
		name: "Celso",
		image: {
			src: ProfilePicCelso,
			alt: "Profile picture",
		},
		label: "Choose Celso's profile",
	},
];
