import "./search.css";

const Search = () => {
  return (
    <div className="formSearch">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a city" />
      </form>
    </div>
  );
};
export default Search;
