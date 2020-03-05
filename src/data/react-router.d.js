import { array, arrayOf, bool, func, number, object, oneOf, oneOfType, shape, string } from "prop-types";

export const location = shape({
	hash: string.isRequired,
	key: string, // only in createBrowserHistory and createMemoryHistory
	pathname: string.isRequired,
	search: string.isRequired,
	state: oneOfType([array, bool, number, object, string]), // only in createBrowserHistory and createMemoryHistory
});

export const history = shape({
	action: oneOf(["PUSH", "REPLACE", "POP"]).isRequired,
	block: func.isRequired,
	canGo: func, // only in createMemoryHistory
	createHref: func.isRequired,
	entries: arrayOf(location), // only in createMemoryHistory
	go: func.isRequired,
	goBack: func.isRequired,
	goForward: func.isRequired,
	index: number, // only in createMemoryHistory
	length: number,
	listen: func.isRequired,
	location: location.isRequired,
	push: func.isRequired,
	replace: func.isRequired,
});

export const match = shape({
	isExact: bool,
	params: object.isRequired,
	path: string.isRequired,
	url: string.isRequired,
});

const routeShape = {
	path: string,
	exact: bool,
	strict: bool,
	sensitive: bool,
	component: func,
};
routeShape.routes = arrayOf(shape(routeShape));

export const route = shape(routeShape);

export default {
	location,
	history,
	match,
	route,
};
