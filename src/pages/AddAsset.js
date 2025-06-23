import { useState } from 'react';
import { addAsset } from '../services/assetService';
import { useNavigate } from 'react-router-dom';

function AddAsset() {
  const [asset, setAsset] = useState({ name: '', status: '' });
  const navigate = useNavigate();

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
      <h2>Add Asset</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} className="form-control mb-2" />
        <input name="status" placeholder="Status" onChange={handleChange} className="form-control mb-2" />
        <button type="submit" className="btn btn-success">Add</button>
      </form>
    </div>
  );
}

export default AddAsset;
