import React from 'react';

const AddLinkButton = ({ openDialog }) => {
  return (
    <button type="button" className="add-button" onClick={openDialog}>Add Link</button>
  );
}

export default AddLinkButton;
