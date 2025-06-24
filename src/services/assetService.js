export const getAssets = () =>
  Promise.resolve({
    data: [
      { id: 1, name: 'Laptop', status: 'In Use' },
      { id: 2, name: 'Monitor', status: 'Available' },
      { id: 3, name: 'keyboards', status: 'in repairing' }
    ]
  });

export const deleteAsset = (id) => Promise.resolve({ data: { success: true } });
export const addAsset = (asset) =>
  Promise.resolve({ data: { ...asset, id: Date.now() } });

export const getAssetById = (id) =>
  Promise.resolve({ data: { id, name: 'Monitor', status: 'In Use' } });

export const updateAsset = (id, asset) =>
  Promise.resolve({ data: { ...asset, id } });
