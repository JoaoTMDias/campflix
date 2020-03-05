import React from "react";
import { Container } from "./styles";

export const Header = ({ nav }) => {
	return (
		<Container id="header" data-testid="component-header" className="header">
			<figure id="header-class" className="header__figure">
				<svg className="header__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 24">
					<path
						fill="var(--color-primary, hsl(359, 78%, 53%))"
						d="M1.35 22.26a5.31 5.31 0 01-1.35-4V6a5.88 5.88 0 011.35-4.1A5.06 5.06 0 015.27.44a5.22 5.22 0 013.92 1.4 5.39 5.39 0 011.35 3.92v2.29l-3.39.12V5.62c0-1.36-.6-2-1.79-2s-1.79.72-1.79 2.11v12.48c0 1.36.59 2 1.79 1.87s1.78-.84 1.78-2.18v-3.36l3.38-.22v3.06a6 6 0 01-1.36 4.06 5.89 5.89 0 01-3.91 1.82 4.61 4.61 0 01-3.9-1zM15.46.75h4.85c1.47 8.32 2.21 12.43 3.69 20.57l-3.58.24c-.26-1.63-.39-2.45-.65-4.1v.06l-4.06.26c-.27 1.68-.4 2.52-.66 4.2-1.33.11-2 .17-3.32.3C13.22 13.53 14 9.23 15.46.75zm3.89 14c-.64-4.1-1-6.16-1.58-10.3h-.07c-.63 4.16-.94 6.26-1.58 10.47zM25.75.74h5.11c.9 5.79 1.36 8.67 2.26 14.41h.07c.92-5.79 1.38-8.67 2.29-14.41h5.11v19.92l-3.39.08V5.6h-.06c-1 6.06-1.57 9.1-2.62 15.22l-3 .12c-1-6.07-1.56-9.12-2.59-15.26h-.06v15.38l-3.12.17c-.02-8.23-.01-12.3 0-20.49zM43.26.73h5.28a5.63 5.63 0 014 1.25 4.77 4.77 0 011.34 3.66v2a4.72 4.72 0 01-1.33 3.65 5.7 5.7 0 01-4 1.24h-1.7v8.08h-3.59V.73zm5.28 8.93a1.87 1.87 0 001.32-.42 2 2 0 00.44-1.45V5.44A2 2 0 0049.86 4a1.87 1.87 0 00-1.32-.43h-1.7v6.1zM55.83.73h9.47v2.89h-5.9V9.2c1.85 0 2.77 0 4.62.07v2.88l-4.6-.15v8.72c-1.43-.05-2.15-.06-3.59-.09.01-7.94.01-11.93 0-19.9zM67 .73h3.58V18.3c2.36.12 3.54.19 5.89.33v3c-3.79-.28-5.69-.4-9.48-.58.06-8.13.01-12.19.01-20.32zM78.23.74h3.58v21.31c-1.43-.13-2.15-.19-3.58-.3.02-8.4.01-12.6 0-21.01zM87.65 11.43C86.07 7.08 85.28 5 83.7.75h3.77c1 2.82 1.45 4.24 2.42 7.13H90c1-2.82 1.48-4.24 2.47-7.13h3.39a922.93 922.93 0 01-3.94 10.89c1.66 4.65 2.48 7 4.13 11.9-1.5-.19-2.26-.28-3.76-.45-1-3.24-1.56-4.83-2.61-8h-.06c-1.07 3-1.6 4.48-2.66 7.41l-3.38-.32c1.6-4.18 2.42-6.36 4.07-10.75z"
					/>
				</svg>
			</figure>
			{nav && (
				<nav className="header__navigation">
					<ul className="header__list">
						<li className="header__item">
							<a href="/" className="header__link header__link--active">
								Home
							</a>
						</li>
						<li className="header__item">
							<a href="/tv-shows" className="header__link">
								TV Shows
							</a>
						</li>
						<li className="header__item">
							<a href="/movies" className="header__link">
								Movies
							</a>
						</li>
						<li className="header__item">
							<a href="/movies" className="header__link">
								Latest
							</a>
						</li>
						<li className="header__item">
							<a href="/movies" className="header__link">
								My List
							</a>
						</li>
					</ul>
				</nav>
			)}
		</Container>
	);
};

Header.defaultProps = {
	nav: true,
};

export default Header;
