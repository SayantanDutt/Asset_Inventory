import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addAsset } from '../services/assetService';

function AddAsset() {
  const navigate = useNavigate();
  const [asset, setAsset] = useState({ name: '', status: '' });

  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAsset(asset);
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="mb-4">Add New Asset</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Asset Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={asset.name}
            onChange={handleChange}
            placeholder="Enter asset name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={asset.status}
            onChange={handleChange}
            required
          >
            <option value="">Select status</option>
            <option value="Available">Available</option>
            <option value="In Use">In Use</option>
            <option value="Under Repair">Under Repair</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">Add Asset</button>
      </form>
    </div>
  );
}

export default AddAsset;
