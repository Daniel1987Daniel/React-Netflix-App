import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
  return (
    <button type="button" className="all-delete-button" onClick={props.deleteMovies}>Delete all</button>
  )
}

export default AllDeleteButton