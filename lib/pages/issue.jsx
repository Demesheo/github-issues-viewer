/** @jsx React.DOM */
var Comments = require('../components/comments')
  , Labels = require('../components/labels')
  , RecentTime = require('../components/recent-time')
  , utils = require('../utils')

var Issue = module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      issue: null
    }
  },
  render: function () {
    var issue = this.props.issue
      , user = issue.user

    return (
      <div className="page issue-page">
        <header className="issue-page__header">
          <h4 className="issue-header__main">
            <span className={"issue-page__state issue-state issue-state--" + issue.state}>
              {issue.state/* TODO capitalize? */}
            </span>
            <a className="issue-page__back" href={this.props.backLink}>Back</a>
            <a href={issue.html_url} className="issue-page__header__title">{'#' + issue.number + ' ' + issue.title}</a>
          </h4>
          <div className="issue-header__sub">
            <Labels className="issue-header__labels" labels={issue.labels}/>
            <a className="issue-page__user" href={user.html_url}>
              <img className="user__avatar"
                  src={user.avatar_url}/>
              <span className="user__login">{user.login}</span>
            </a>
            <RecentTime className="issue__time" time={issue.created_at}/>
          </div>
        </header>
        <section className="issue-page__body">
          {utils.processBody(issue.body)}
        </section>
        <Comments url={issue.comments_url} count={issue.comments}/>
      </div>
    )
  }
})
