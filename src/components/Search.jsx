var Search = (props) => (
  <form className="search-bar form-inline">
    <input className="form-control" type="text" onChange={_.debounce(props.queryMethod, 500)}/>
    <button className="btn hidden-sm-down" onSubmit={function() { event.preventDefault(); } }>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
