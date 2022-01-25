import { FC, useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Menu } from "antd";

interface MenuBarProps {
	isServerInfo: boolean;
}

const MenuBar: FC<MenuBarProps> = (props) => {
	const { isServerInfo } = props;
	const { pathname } = useLocation();
	const selectedKey = useMemo(() => {
		switch (pathname) {
			case "/":
				return "quickstart";
			case "/tokens":
				return "tokens";
			case "/nfts":
				return "nfts";
			case "/portfolio":
				return "portfolio";
			default:
				return "";
		}
	}, [pathname]);

	return (
		<div
			style={{
				backgroundColor: "white",
				position: "sticky",
				top: 0,
				paddingLeft: "1.5rem",
				paddingRight: "1.5rem",
				zIndex: 3,
			}}
		>
			<Menu selectedKeys={[selectedKey]} mode="horizontal">
				<Menu.Item key="quickstart">
					<NavLink to="/">Quickstart</NavLink>
				</Menu.Item>
				{isServerInfo && (
					<>
						<Menu.Item key="tokens">
							<NavLink to="/tokens">Tokens</NavLink>
						</Menu.Item>
						<Menu.Item key="nfts">
							<NavLink to="/nfts">NFTs</NavLink>
						</Menu.Item>
						<Menu.Item key="portfolio">
							<NavLink to="/portfolio">Portfolio</NavLink>
						</Menu.Item>
					</>
				)}
			</Menu>
		</div>
	);
};

export default MenuBar;
