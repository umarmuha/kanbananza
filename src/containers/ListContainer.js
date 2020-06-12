// import { connect } from "react-redux";
// import List from "../components/List";

// const mapPropsToStore = (state, ownProps) => {
// 	return {
// 		list: state.lists.entities[ownProps.listId],
// 	};
// };

// export default connect(mapPropsToStore)(List);

import { connect } from "react-redux";
import List from "../components/List";

const mapStateToProps = (state, ownProps) => {
	return { list: state.lists.entities[ownProps.listId] };
};

export default connect(mapStateToProps)(List);
