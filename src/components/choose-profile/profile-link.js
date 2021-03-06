import React from "react";
import { Link } from "react-router-dom";

export const ProfileLink = ({ id, to, order, image, name, ariaLabel }) => {
	const { src, alt } = image;

	return (
		<Link
			id={id}
			to={to}
			aria-label={ariaLabel}
			data-testid="profile-link"
			className="profile-link"
			style={{
				"--order": `${order}`,
			}}
		>
			<figure className="profile-link__figure">
				<img className="profile-link__image" src={src} width={200} height={200} alt={alt} />
			</figure>
			<h3 className="profile-link__name">{name}</h3>
		</Link>
	);
};
