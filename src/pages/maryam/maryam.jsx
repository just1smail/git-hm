import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const API = "https://663493d49bb0df2359a1f861.mockapi.io/api/box";

const Maryam = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ name: '', avatar: '', data: '' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(API)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    setEditMode(false);
    setNewData({ name: '', avatar: '', data: '' });
  };

  const handleClickOpenEdit = (item) => {
    setOpen(true);
    setEditMode(true);
    setEditId(item.id);
    setNewData({ name: item.name, avatar: item.avatar, data: item.data });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      axios.put(`${API}/${editId}`, newData)
        .then(response => {
          setData(data.map(item => (item.id === editId ? response.data : item)));
          handleClose();
        })
        .catch(error => {
          console.error( error);
        });
    } else {
      axios.post(API, newData)
        .then(response => {
          setData([...data, response.data]);
          handleClose();
        })
        .catch(error => {
          console.error( error);
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`${API}/${id}`)
      .then(() => {
        setData(data.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof item.data === 'string' && item.data.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className='w-[90%] m-auto'>
      <div className='w-[100%] h-[160px] rounded-[40px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white'>
        <p className='ml-[40px] mt-[10px] pt-[15px] text-current'>Главная/Блог</p>
        <p className='ml-[40px] text-[50px] font-bold'>Блог</p>
      </div>
      <div className='w-[90%] m-auto flex justify-between items-center'>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleClickOpen} className='w-[10%]  text-[60px]'>+</button>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {editMode ? 'Edit' : 'Add'}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleFormSubmit}
          >
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={newData.name}
              onChange={handleInputChange}
            />
            <TextField
              name="avatar"
              label="Avatar URL"
              variant="outlined"
              value={newData.avatar}
              onChange={handleInputChange}
            />
            <TextField
              name="data"
              label="Data"
              variant="outlined"
              value={newData.data}
              onChange={handleInputChange}
            />
            <DialogActions>
              <Button type="submit" autoFocus>
                Save
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </BootstrapDialog>
      <div className='grid grid-cols-3 gap-10 mt-[70px] mb-[80px]'>
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div key={item.id} className='w-full h-auto rounded-[20px] bg-white shadow-lg'>
              <img className='w-full h-[260px] object-cover rounded-t-[20px]' src={item.avatar} alt={item.name} />
              <h1 className='text-xl font-bold mt-2 p-4'>{item.name}</h1>
              <div className='flex justify-between w-[90%]'>
                <p className='p-4'>{item.data}</p>
                <div>
                  <button
                    onClick={() => handleClickOpenEdit(item)}
                    className='mr-2'
                  >
                    <EditIcon color='primary' />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteOutlineIcon color='error' />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <div className='w-[100%] h-[200px] rounded-[20px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white flex justify-between items-center text-[40px] mt-8 mb-[50px]'>
        <p className='ml-[130px]'>Остались вопросы? Спросите нас в соцсетях!</p>
        <div className='flex items-center w-[20%]'>
          <img className='w-[40px] h-[40px]' src="src/assets/photo/Вайбер.png" alt="Viber" />
          <img className='w-[40px] h-[40px]' src="src/assets/photo/Вайбер.png" alt="Viber" />
          <img className='w-[40px] h-[40px]' src="src/assets/photo/Чат.png" alt="Chat" />
        </div>
      </div>
    </div>
  );
}

export default Maryam;
