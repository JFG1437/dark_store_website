import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 0) {
        try {
          const response = await fetch(`http://localhost:3001/api/search?term=${query}`);
          const data = await response.json();
          setSuggestions(data);
        } catch (error) {
          console.error('Search error:', error);
        }
      }
    };
    
    const timer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search for an area (e.g., Airoli, Borivali...)"
        className="w-full p-4 text-lg rounded-xl shadow-md border border-gray-200 focus:ring-4 focus:ring-blue-200 focus:border-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      {suggestions.length > 0 && (
        <div className="mt-2 bg-white rounded-xl shadow-md overflow-hidden">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-0"
              onClick={() => navigate(`/results/${suggestion}`)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};