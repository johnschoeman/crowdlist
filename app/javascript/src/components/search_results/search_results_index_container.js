import { connect } from "react-redux"
import { withRouter } from "react-router"
import SearchResultsIndex from "./search_results_index"

const mapStateToProps = (state, ownProps) => {
  let products = state.entities.searchResults.products.by_id
  let productIds = state.entities.searchResults.products.all_ids
  let users = state.entities.searchResults.users.by_id
  let userIds = state.entities.searchResults.users.all_ids

  return {
    products,
    productIds,
    users,
    userIds,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    test: "test",
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResultsIndex)
)

