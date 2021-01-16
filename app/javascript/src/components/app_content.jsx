import React from "react"
import { Route, Switch, withRouter } from "react-router"

import ProductFeed from "./product_feed/product_feed"
import ProductNav from "./product_nav/product_nav"

import SearchResultsIndexContainer from "./search_results/search_results_index_container"

import SearchNav from "./search_results/search_nav.jsx"

const AppContent = () => {
  return (
    <div className="app-content">
      <div className="product-nav-container">
        <Switch>
          <Route path="/search" render={() => <SearchNav />} />
          <Route path="/" render={() => <ProductNav />} />
        </Switch>
      </div>
      <div className="product-feed-container">
        <Switch>
          <Route
            path="/search"
            render={() => <SearchResultsIndexContainer />}
          />
          <Route path="/" render={() => <ProductFeed />} />
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(AppContent)
