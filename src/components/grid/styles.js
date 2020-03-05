import styled from "styled-components";

export const GridContainer = styled.div`
	--columns: ${props => props.small};

	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	grid-gap: var(--column-gap);

	@media all and (min-width: 48rem) {
		--columns: ${props => props.medium};
	}

	@media all and (min-width: 87.5rem) {
		--columns: ${props => props.large};
	}
`;
