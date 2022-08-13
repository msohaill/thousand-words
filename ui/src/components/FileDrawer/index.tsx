import { ExpandMore, PhotoCameraBack } from '@mui/icons-material';
import { Paper } from '@mui/material';
import { useState } from 'react';
import './style.scss';

// eslint-disable-next-line no-unused-vars
const FileDrawer = ({ handleUpload }: { handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    if (open) {
      document.getElementsByClassName('drawer')[0].classList.add('slide');
      (document.getElementsByClassName('drawer-open') as HTMLCollectionOf<HTMLElement>)[0].style.cursor = 'auto';
      setDrawerOpen(true);
    } else {
      document.getElementsByClassName('drawer')[0].classList.remove('slide');
      (document.getElementsByClassName('drawer-open') as HTMLCollectionOf<HTMLElement>)[0].style.cursor = 'pointer';
      setDrawerOpen(false);
    }
  };

  return (
    <div className='drawer-container'>
      <Paper className='drawer' elevation={9}>
        {drawerOpen ? <ExpandMore className='drawer-close' onClick={() => toggleDrawer(false)} /> : null}
        <div className='drawer-open' onClick={() => toggleDrawer(true)}>
          <PhotoCameraBack />
          <p>Add a thousand words</p>
        </div>
        <input type='file' id='image-upload' multiple={false} accept='image/*' onChange={handleUpload} hidden />
        <label id='image-upload-label' htmlFor='image-upload'>
          Upload
        </label>
      </Paper>
    </div>
  );
};

export default FileDrawer;
