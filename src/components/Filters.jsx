const Filters = ({ filters, onFilterChange }) => (
    <div>
      <h4>Specialities</h4>
      {["Neurologist", "Oncologist", "Ayurveda", "Homeopath"].map((spec) => (
        <div key={spec}>
          <input type="checkbox" onChange={(e) => onFilterChange('speciality', spec, e.target.checked)} />
          {spec}
        </div>
      ))}
      <h4>Mode of Consultation</h4>
      <label><input type="radio" name="mode" onChange={() => onFilterChange('mode', 'video')} /> Video</label><br />
      <label><input type="radio" name="mode" onChange={() => onFilterChange('mode', 'clinic')} /> In-clinic</label>
    </div>
  );
  export default Filters;
  