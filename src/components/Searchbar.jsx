const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search Symptoms, Doctors, Specialists, Clinics"
        className="w-full p-2 border rounded"
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
  export default SearchBar;
  