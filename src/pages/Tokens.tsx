import { FC } from "react";
import { Table, Avatar, Tag } from "web3uikit";

const Tokens: FC = () => {
	return (
		<Table
			columnsConfig="80px 450px 450px 450px"
			data={[
				[
					<Avatar isRounded theme="image" />,
					"Moralis Magi",
					<Tag color="blue" text="Nft Collection" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"My Cool Nft",
					<Tag color="red" text="Lazy Nft" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"Magi Cool Topen",
					<Tag color="yellow" text="Pack" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"My Marketplace",
					<Tag color="red" text="Nft Marketplace" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"Owl Magi",
					<Tag color="purple" text="Bundle" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"Owl Nft",
					<Tag color="green" text="Token" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"Ape Yacht",
					<Tag color="blue" text="Nft Collection" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"Charzard",
					<Tag color="red" text="Bundle" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"Magi",
					<Tag color="green" text="Token" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"Moralis Magi",
					<Tag color="blue" text="Nft Collection" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"My Cool Nft",
					<Tag color="red" text="Lazy Nft" />,
					"0x18...130e",
				],
				[
					<Avatar isRounded theme="image" />,
					"Magi Cool Topen",
					<Tag color="yellow" text="Pack" />,
					"0x18...130e",
				],
			]}
			header={["", <span>Name</span>, <span>Type</span>, ""]}
			maxPages={3}
			// onPageNumberChanged={function noRefCheck() {}}
			pageSize={5}
		/>
	);
};

export default Tokens;
