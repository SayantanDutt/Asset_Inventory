// MOCK DATA for frontend testing
const dummyAssets = [
  { id: 1, name: 'Laptop', status: 'In Use' },
  { id: 2, name: 'Monitor', status: 'Available' },
  { id: 3, name: 'Projector', status: 'Under Repair' }
];

export const getAssets = () => Promise.resolve({ data: dummyAssets });
export const getAssetById = (id) =>
  Promise.resolve({ data: dummyAssets.find((a) => a.id === parseInt(id)) });
export const addAsset = (asset) => Promise.resolve({ data: { ...asset, id: Date.now() } });
export const updateAsset = (id, updatedAsset) =>
  Promise.resolve({ data: { ...updatedAsset, id: parseInt(id) } });
export const deleteAsset = (id) => Promise.resolve({ data: { success: true } });
