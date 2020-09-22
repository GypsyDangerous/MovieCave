import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";

const getTheme = theme => {
	switch (theme) {
		default:
			return {
				colors: {
					primary: "#292626",
					secondary: "#C96333",
					primaryText: "#AAAFAA",
					primaryDarkText: "#7C7C7C",
					secondaryText: "#292626",
				},
				fonts: ["Montserrat", "sans-serif"],
				fontSizes: {
					small: ".75rem",
					medium: "1.25rem",
					large: "2rem",
				},
			};
	}
};

const Theme = ({ theme, children }) => {
	const selectedTheme = useMemo(() => getTheme(theme), [theme]);

	return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default Theme;
