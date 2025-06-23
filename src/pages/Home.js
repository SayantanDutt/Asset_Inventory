import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssets, deleteAsset } from '../services/assetService';

function Home() {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAssets()
      .then((res) => {
        setAssets(res.data);
      })
      .catch((err) => {
        console.error("Error fetching assets:", err);
      });
  }, []);

  const handleDelete = async (id) => {
    await deleteAsset(id);
    setAssets(assets.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h2 className="mb-4">Asset Inventory</h2>

      {assets.length === 0 ? (
        <p>No assets found.</p>
      ) : (
        <div className="row">
          {assets.map((asset) => (
            <div className="col-md-4 mb-4" key={asset.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{asset.name}</h5>
                  <p className="card-text">
                    <strong>Status:</strong>{" "}
                    <span
                      className={`badge ${
                        asset.status === "Available"
                          ? "bg-success"
                          : asset.status === "In Use"
                          ? "bg-primary"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {asset.status}
                    </span>
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                      
                          <button className="btn btn-success" onClick={() => navigate('/add')}>
                              + Add Asset
                              </button>
                          </div>

                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => navigate(`/edit/${asset.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(asset.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
