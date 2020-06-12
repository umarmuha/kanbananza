import { connect } from "react-redux";
import Lists from "../components/Lists";

const mapPropsToStore = (state) => {
	return {
		lists: state.lists.ids,
	};
};

export default connect(mapPropsToStore)(Lists);
