import { NavLink } from "react-router";
import Image from "../../assets/images/logo.svg";

interface Props {
	size?: number | string;
}
function Logo({ size = 50 }: Props) {
	return (
		<NavLink to="/">
			<img
				src={Image}
				style={{
					height: size,
					width: size,
					borderRadius: "40%",
					objectFit: "cover",
				}}
				alt="logo"
			/>
		</NavLink>
	);
}

export default Logo;
