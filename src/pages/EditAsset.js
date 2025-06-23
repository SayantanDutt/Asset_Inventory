import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAssetById, updateAsset } from '../services/assetService';

function EditAsset() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [asset, setAsset] = useState({ name: '', status: '' });

  useEffect(() => {
    getAssetById(id)
      .then((res) => {
        setAsset(res.data);
      })
      .catch((err) => {
        console.error('Error fetching asset:', err);
      });
  }, [id]);

  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAsset(id, asset);
      navigate('/');
    } catch (err) {
      console.error('Error updating asset:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Asset</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={asset.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            name="status"
            value={asset.status}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Asset
        </button>
      </form>
    </div>
  );
}

export default EditAsset;
