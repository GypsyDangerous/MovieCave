import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children, activeClassName }) => {
	const router = useRouter();
	let className = children.props.className || "";
	if (router.asPath === href) {
		className = `${className}${activeClassName || ""}`;
	}

	return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
