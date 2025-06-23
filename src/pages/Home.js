import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssets, deleteAsset } from '../services/assetService';

function Home() {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("✅ Home.js mounted");
    getAssets()
      .then((res) => {
        console.log("Assets fetched:", res.data);
        setAssets(res.data);
      })
      .catch((err) => {
        console.error("Error fetching assets:", err);
      });
  }, []);

  return (
    <div>
      <h2>Asset List</h2>
      {assets.length === 0 ? (
        <p>No assets found.</p>
      ) : (
        <ul className="list-group">
          {assets.map((asset) => (
            <li key={asset.id} className="list-group-item d-flex justify-content-between">
              <span>{asset.name} - {asset.status}</span>
              <div>
                <button className="btn btn-sm btn-warning me-2" onClick={() => navigate(`/edit/${asset.id}`)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteAsset(asset.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
