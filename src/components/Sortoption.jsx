const SortOptions = ({ onSort }) => (
    <div>
      <h4>Sort by</h4>
      <label><input type="radio" name="sort" onChange={() => onSort('price')} /> Price: Low-High</label><br />
      <label><input type="radio" name="sort" onChange={() => onSort('experience')} /> Experience</label>
    </div>
  );
  export default SortOptions;
  