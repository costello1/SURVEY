// src/components/Admin.js
import React, { useState } from 'react';
import { getStorage, ref, deleteObject, getDownloadURL } from 'firebase/storage';
import { saveAs } from 'file-saver';
import '../styles/Survey.css';

const Admin = () => {
  const [message, setMessage] = useState('');

  const handleClearAll = async () => {
    const storage = getStorage();
    const surveys = ['runningSurvey.xlsx', 'trekkingSurvey.xlsx', 'calcettoSurvey.xlsx', 'padelSurvey.xlsx', 'beachvolleySurvey.xlsx'];

    try {
      await Promise.all(surveys.map(async (survey) => {
        const fileRef = ref(storage, survey);
        await deleteObject(fileRef);
      }));
      setMessage('All survey files have been cleared.');
    } catch (error) {
      console.error('Error clearing files: ', error);
      setMessage('Error clearing files. Please try again.');
    }
  };

  const handleDownloadAll = async () => {
    const storage = getStorage();
    const surveys = ['runningSurvey.xlsx', 'trekkingSurvey.xlsx', 'calcettoSurvey.xlsx', 'padelSurvey.xlsx', 'beachvolleySurvey.xlsx'];

    try {
      await Promise.all(surveys.map(async (survey) => {
        const fileRef = ref(storage, survey);
        const url = await getDownloadURL(fileRef);
        saveAs(url, survey);
      }));
      setMessage('All survey files have been downloaded.');
    } catch (error) {
      console.error('Error downloading files: ', error);
      setMessage('Error downloading files. Please try again.');
    }
  };

  return (
    <div className="container admin-panel">
      <h1>Admin Panel</h1>
      <button onClick={handleClearAll}>Clear All Survey Files</button>
      <button onClick={handleDownloadAll}>Download All Survey Files</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Admin;
