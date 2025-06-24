import React, { useState, useEffect } from 'react';

const AssetForm = ({ initialData = null, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    assetName: '',
    assetType: '',
    assetId: '',
    purchaseDate: '',
    assignedTo: '',
    status: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.assetName ||
      !formData.assetType ||
      !formData.assetId ||
      !formData.purchaseDate ||
      !formData.assignedTo ||
      !formData.status
    ) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '16px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <h3>{initialData ? 'Edit Asset' : 'Add Asset'}</h3>

      <div style={{ marginBottom: '10px' }}>
        <label>Asset Name:</label><br />
        <input
          type="text"
          name="assetName"
          value={formData.assetName}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Asset Type:</label><br />
        <input
          type="text"
          name="assetType"
          value={formData.assetType}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Asset ID:</label><br />
        <input
          type="text"
          name="assetId"
          value={formData.assetId}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Purchase Date:</label><br />
        <input
          type="date"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Assigned To:</label><br />
        <input
          type="text"
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Status:</label><br />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Retired">Retired</option>
          <option value="Under Repair">Under Repair</option>
        </select>
      </div>

      <button type="submit" style={{ marginRight: '10px' }}>Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default AssetForm;
