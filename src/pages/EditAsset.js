import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAssetById, updateAsset } from '../services/assetService';

function EditAsset() {
  console.log("📍 AddAsset component rendered");

  const { id } = useParams();
  const navigate = useNavigate();
  const [asset, setAsset] = useState({ name: '', status: '' });

  useEffect(() => {
    getAssetById(id).then(res => setAsset(res.data));
  }, [id]);

  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAsset(id, asset);
    navigate('/');
  };

  return (
    <div className="container">
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
          <select
            name="status"
            value={asset.status}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select status</option>
            <option value="Available">Available</option>
            <option value="In Use">In Use</option>
            <option value="Under Repair">Under Repair</option>
          </select>
        </div>
        <button className="btn btn-primary">Update Asset</button>
      </form>
    </div>
  );
}

export default EditAsset;
