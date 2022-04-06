import { StyleSheet, Dimensions } from "react-native";


const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const PINK = "#F17C87";
const DARK_GRAY = "#363636";
const BLACK = "#000000";
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({

	// COMPONENT - PROFILE ITEM
	containerProfileItem: {
		flex: 1,
		backgroundColor: WHITE,
		paddingHorizontal: 30,
		paddingBottom: 250,
		margin: 0,
		borderRadius: 50,
		marginTop: -60,
		shadowOpacity: 0.1,
		shadowRadius: 20,
		shadowColor: BLACK,
		shadowOffset: { height: 10, width: 10 }
		
	},

	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 20,
		textAlign: "center"
	},
	descriptionProfileItem: {
		color: GRAY,
		textAlign: "center",
		paddingBottom: 30,
		fontSize: 13
	},
	info: {
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center"
	},
	dogInfo: {
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	
	infoContent: {
		color: GRAY,
		fontSize: 15,
	},
	dogInfoContent: {
		color: GRAY,
		fontSize: 15,
	},
	bioContent: {
		top: 10,
		color: PINK,
		fontSize: 20,
	},
	dogContent: {
		color: PINK,
		fontSize: 18,
	},
	dogName: {
		bottom: -50,
		left: 165,
		color: BLACK,
		fontSize: 20,
	},

	// CONTAINER - PROFILE
	containerProfile: { marginHorizontal: 0 },
	photo: {
		flex: 1,
		width: DIMENSION_WIDTH,
		height: 600
	},
	backIcon: {
		flexDirection: "row",
		position: "absolute",
		top: 50,
		left: 15,
	},
	circle: {
		left: 110,
		bottom:-50,
		width: 150,
		height: 150,
		borderRadius: 150 / 2,
	  },
	  genderIcon: {
		bottom: 25,
		left: 220,
		width: 20,
		height: 20,
		//borderRadius: 20 / 2,
	  }

	
});
