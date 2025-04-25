import React, { useEffect, useState } from 'react';
import { getDoctors } from '../src/api/doctor.js'; // ✅ Correct import path (relative to App.jsx)
import DoctorCard from '../src/components/Doctorcard.jsx';
import Filters from '../src/components/Filters.jsx';
import SearchBar from '../src/components/Searchbar.jsx';
import SortOptions from '../src/components/Sortoption.jsx';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const data = await getDoctors({ search, ...filters, sort });
      setDoctors(data || []);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [search, filters, sort]);

  const handleFilterChange = (key, value, checked) => {
    setFilters(prev => ({
      ...prev,
      [key]: checked ? value : undefined,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full p-4 border-r bg-gray-50">
        <SearchBar onSearch={setSearch} />
        <SortOptions onSort={setSort} />
        <Filters filters={filters} onFilterChange={handleFilterChange} />
      </div>

      {/* Main Content */}
      <div className="md:w-3/4 w-full p-4">
        {loading ? (
          <p>Loading doctors...</p>
        ) : doctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          doctors.map(doc => <DoctorCard key={doc.id} doctor={doc} />)
        )}
      </div>
    </div>
  );
};

export default App;
