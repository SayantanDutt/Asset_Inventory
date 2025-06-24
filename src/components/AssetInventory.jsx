import React, { useState } from 'react';
import AssetForm from './AssetForm';
import './AssetInventory.css';

const AssetInventory = () => {
  const [assets, setAssets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editAsset, setEditAsset] = useState(null);

  // 🔍 Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

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

  // 📊 Summary counts
  const totalAssets = assets.length;
  const activeCount = assets.filter((a) => a.status === 'Active').length;
  const retiredCount = assets.filter((a) => a.status === 'Retired').length;
  const repairCount = assets.filter((a) => a.status === 'Under Repair').length;

  // 🔍 Filtered list
  const filteredAssets = assets.filter((asset) => {
    const matchesSearch =
      asset.assetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.assetId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.assignedTo.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === '' || asset.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container">
      <h2>Asset Inventory</h2>

      {/* 🟦 Summary Cards */}
      <div className="summary-cards">
        <div className="card blue">Total: {totalAssets}</div>
        <div className="card green">Active: {activeCount}</div>
        <div className="card orange">Retired: {retiredCount}</div>
        <div className="card red">Under Repair: {repairCount}</div>
      </div>

      {/* 🔍 Filters */}
      <div className="filters" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by name, ID, or assignee"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: 1 }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Retired">Retired</option>
          <option value="Under Repair">Under Repair</option>
        </select>
      </div>

      <button onClick={handleAdd}>Add Asset</button>

      {showForm && (
        <AssetForm
          initialData={editAsset}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}

      {filteredAssets.length === 0 ? (
        <p>No assets found.</p>
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
            {filteredAssets.map((asset) => (
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
