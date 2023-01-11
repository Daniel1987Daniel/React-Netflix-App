import "./AddAllMovies.css"

const AddAllMovies = (props) => {
  return (
    <button type="button" className="add-all-button" onClick={props.addMovies}>Add All</button>
  )
}

export default AddAllMovies