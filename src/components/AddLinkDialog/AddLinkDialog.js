import React from 'react';

const AddLinkDialog = () => {
  return (
    <div className="add-link-dialog">
      <h2>Add a Link</h2>
      <label for="new-link">Enter the link URL</label>
      <input type="text" id="new-link" />
    </div>
  );
}

export default AddLinkDialog;
