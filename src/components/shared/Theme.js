import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";

const getTheme = theme => {
	switch (theme) {
		default:
			return {
				colors: {
					primary: {
                        normal: "#222b31",
                        light: "#515151",
                        dark: "#191c1f",
                        text: "white"
                    },
                    secondary: {
                        normal: "#ff424f",
                        light: "#FF525E",
                        dark: "#f7313f",
                        text: "black"
                    }
				},
				fonts: ["poppins", "sans-serif"],
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
