import React from 'react';
import { useLocation } from 'react-router-dom';

// Sample data to search in
const websiteData = [
  { id: 1, title: "Library Introduction", content: "Welcome to our Library website." },
  { id: 2, title: "Search Books", content: "Find books, articles, and resources." },
  { id: 3, title: "English Program", content: "Learn English courses and programs." },
  { id: 4, title: "Korean Culture", content: "Discover Korean history and culture." },
  { id: 5, title: "AI Search", content: "Use AI to enhance your search experience." },
  { id: 6, title: "FAQ", content: "Frequently asked questions about our library services." },
];

function SearchResultPage() {
  const location = useLocation();

  // Helper function to get the query param
  const getQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('q') || ''; // Get "q" parameter
  };

  const query = getQuery().toLowerCase();

  // Filter data based on query
  const filteredData = websiteData.filter(
    item =>
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results for: "{query}"</h2>

      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map(item => (
            <li key={item.id} style={{ marginBottom: '15px' }}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
}

export default SearchResultPage;
