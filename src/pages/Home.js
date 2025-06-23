import { useEffect, useState } from 'react';
import { getAssets, deleteAsset } from '../services/assetService';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAssets().then((res) => setAssets(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteAsset(id);
    setAssets(assets.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h2>Asset Inventory</h2>
      <button onClick={() => navigate('/add')}>Add Asset</button>
      <ul>
        {assets.map((a) => (
          <li key={a.id}>
            {a.name} - {a.status}
            <button onClick={() => navigate(`/edit/${a.id}`)}>Edit</button>
            <button onClick={() => handleDelete(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
