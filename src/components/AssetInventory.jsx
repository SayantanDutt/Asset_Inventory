import React, { useState } from 'react';
import './AssetInventory.css';
import AssetForm from './AssetForm';
import './AssetInventory.css'; // We’ll create this file

const AssetInventory = () => {
  const [assets, setAssets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editAsset, setEditAsset] = useState(null);

  const handleAdd = () => {
    setEditAsset(null);
    setShowForm(true);
  };

  const handleEdit = (asset) => {
    setEditAsset(asset);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditAsset(null);
  };

  const handleFormSubmit = (data) => {
    if (editAsset) {
      const updatedAssets = assets.map((item) =>
        item.assetId === data.assetId ? data : item
      );
      setAssets(updatedAssets);
    } else {
      setAssets([...assets, data]);
    }
    setShowForm(false);
    setEditAsset(null);
  };

  // Summary counts
  const totalAssets = assets.length;
  const activeCount = assets.filter(a => a.status === 'Active').length;
  const retiredCount = assets.filter(a => a.status === 'Retired').length;
  const repairCount = assets.filter(a => a.status === 'Under Repair').length;

  return (
    <div className="container">
      <h2>Asset Inventory</h2>

      {/* Summary cards */}
      <div className="summary-cards">
        <div className="card blue">Total Assets: {totalAssets}</div>
            <div className="card green">Active: {activeCount}</div>
                <div className="card orange">Retired: {retiredCount}</div>
                    <div className="card red">Under Repair: {repairCount}</div>
        </div>


      <button onClick={handleAdd}>Add Asset</button>

      {showForm && (
        <AssetForm
          initialData={editAsset}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}

      {assets.length === 0 ? (
        <p>No assets found. Add one!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Type</th>
              <th>ID</th>
              <th>Purchase Date</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.assetId}>
                <td>{asset.assetName}</td>
                <td>{asset.assetType}</td>
                <td>{asset.assetId}</td>
                <td>{asset.purchaseDate}</td>
                <td>{asset.assignedTo}</td>
                <td>{asset.status}</td>
                <td>
                  <button onClick={() => handleEdit(asset)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssetInventory;
