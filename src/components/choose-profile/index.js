import React from "react";
import { Container } from "./styles";
import { ProfileLink } from "./profile-link";
import { USERS } from "../../data/users";

export const ChooseProfile = () => {
	/**
	 * Renders the profile links of each user
	 *
	 * @returns {JSX.Element}
	 */
	function renderProfileLinks() {
		const list = USERS.map((user, index) => (
			<ProfileLink
				key={user.id}
				id={user.id}
				order={index}
				to={user.to}
				name={user.name}
				image={user.image}
				ariaLabel={user.label}
			/>
		));
		return (
			<ul
				className="choose-profile__buttons"
				style={{
					"--length": `${USERS.length}`,
				}}
			>
				{list}
			</ul>
		);
	}

	return (
		<Container id="choose-profile" className="choose-profile">
			<h2>Who's watching?</h2>

			<nav className="choose-profile__content">{renderProfileLinks()}</nav>
		</Container>
	);
};

export default ChooseProfile;
