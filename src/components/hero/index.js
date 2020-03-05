import React from "react";
import { Container } from "./styles";
import logo from "../../assets/images/the-witcher.webp";

export const Hero = () => {
	return (
		<Container id="hero" className="hero">
			<div className="hero__content">
				<figure className="hero__logo">
					<img src={logo} width={304} alt="The Witcher logo" />
				</figure>
				<div className="hero__buttons">
					<button type="button" className="hero__button" aria-label="Press ENTER to play this episode">
						<figure className="hero__button__icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M8 5v14l11-7z" fill="currentColor" />
							</svg>
						</figure>
						<span className="hero__button__title">Play</span>
					</button>
					<button type="button" className="hero__button" aria-label="Press ENTER to see more info">
						<figure className="hero__button__icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"
									fill="currentColor"
								/>
							</svg>
						</figure>
						<span className="hero__button__title">More info</span>
					</button>
				</div>
			</div>
			<div role="presentation" className="hero__gradient" />
			<img
				src="https://image.tmdb.org/t/p/original/bKETHQDD3QoIRTMOP4dfKwisL3g.jpg"
				role="presentation"
				width={2048}
				height={1152}
				loading="lazy"
				className="hero__background"
				alt="The witcher background"
			/>
		</Container>
	);
};

export default Hero;
