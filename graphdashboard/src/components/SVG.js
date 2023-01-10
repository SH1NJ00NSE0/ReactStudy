import styled from "@emotion/styled";

const SnowManEyes = () => {
	return (
		<>
			<circle className="left-eye" cx={225} cy={175} r={10} fill={"black"} />
			<circle cx={275} cy={175} r={10} fill={"black"} />
		</>
	);
};

const SnowManBody = () => {
	return (
		<>
			<circle
				cx={250}
				cy={325}
				r={100}
				stroke={"black"}
				strokeWidth={5}
				fill={"white"}
			/>
			<circle
				cx={250}
				cy={175}
				r={75}
				stroke={"black"}
				strokeWidth={5}
				fill={"white"}
			/>
			<SnowManEyes />
			<SnowManNose />
		</>
	);
};

const SnowManHands = () => {
	return (
		<>
			<line
				x1={100}
				y1={250}
				x2={160}
				y2={280}
				stroke={"black"}
				strokeWidth={5}
			/>
			<line
				x1={400}
				y1={250}
				x2={340}
				y2={280}
				stroke={"black"}
				strokeWidth={5}
			/>
		</>
	);
};

const SnowManHat = () => {
	return (
		<>
			<rect
				x={265}
				y={-63}
				fill={"red"}
				width={75}
				height={50}
				transform={"rotate(25)"}
			/>
		</>
	);
};

const SnowManNose = () => {
	return (
		<>
			<polygon points="250,190 250,220 200,205" fill={"orange"} />
		</>
	);
};

const SnowManNameTag = () => {
	return (
		<>
			<text x={220} y={475} fontSize={24} fontWeight={500}>
				눈사람
			</text>
		</>
	);
};

const SnowMan = styled.svg`
	.left-eye {
		animation-duration: 0.3s;
		animation-name: blink;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-iteration-count: infinite;
		transform-origin: 225px 175px;
	}

	@keyframes blink {
		to {
			transform: scaleY(0.1);
		}
	}
`;

const SVG = () => {
	return (
		<SnowMan
			style={{
				width: "500px",
				height: "500px",
				backgroundColor: "#f9f9f9",
			}}>
			<SnowManHat />
			<SnowManBody />
			<SnowManHands />
			<SnowManNameTag />
		</SnowMan>
	);
};

export default SVG;
