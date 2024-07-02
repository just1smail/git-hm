import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Faruh = () => {

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [Edit,setEdit] = useState("")
  const [Edit1,setEdit1] = useState("")
  const [Edit2,setEdit2] = useState("")

  const [Add,setAdd] = useState("")
  const [Add1,setAdd1] = useState("")
  const [Add2,setAdd2] = useState("")

  const [Idx,setIdx] = useState("")


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      <List>
        <input type="text" placeholder='img' value={Edit} onChange={(e)=>{setEdit(e.target.value)}} />
        <input type="text" placeholder='name' value={Edit1} onChange={(e)=>{setEdit1(e.target.value)}} />
        <input type="text" placeholder='desc' value={Edit2} onChange={(e)=>{setEdit2(e.target.value)}} /><br/>
        <button onClick={()=>{EditUser(Idx)}}>Edit</button>
      </List>
    </Box>
  );

  const toggleDrawer1 = (newOpen) => () => {
    setOpen1(newOpen);
  };

  const DrawerList1 = (
    <Box sx={{ width: 250 }} role="presentation" >
      <List>
        <input type="text" placeholder='img' value={Add} onChange={(e)=>{setAdd(e.target.value)}} />
        <input type="text" placeholder='name' value={Add1} onChange={(e)=>{setAdd1(e.target.value)}} />
        <input type="text" placeholder='desc' value={Add2} onChange={(e)=>{setAdd2(e.target.value)}} /><br/>
        <button onClick={()=>{AddUser()}}>Add</button>
      </List>
    </Box>
  );

  async function AddUser() {
    try {
      const {data} = await axios.post(`${"https://6647422551e227f23ab1afe6.mockapi.io/exam"}`,{
        img: Add,
        name: Add1,
        desc: Add2
      })
      getData()
    } catch (error) {
      console.error(error);
    }
  }

  async function EditUser(id) {
    try {
      const {data} = await axios.put(`${"https://6647422551e227f23ab1afe6.mockapi.io/exam"}/${id}`,{
        img: Edit,
        name: Edit1,
        desc: Edit2
      })
      getData()
    } catch (error) {
      console.error(error);
    }
  }

  const [Todo,setData] = useState([])

  async function getData() {
    try {
      const {data} = await axios.get("https://6647422551e227f23ab1afe6.mockapi.io/exam")
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getData()
  },[])

  async function Del(id) {
    try {
      const {data} = await axios.delete(`${"https://6647422551e227f23ab1afe6.mockapi.io/exam"}/${id}`)
      getData()
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <div>
       <div className="bg-gradient-to-r from-purple-500 to-blue-400 p-8 rounded-lg w-[90%] m-auto mt-[100px] mb-[70px]">
        <a href="/" className="text-xl text-white">Главная</a> / <span className='text-white'>Как покупать</span>
      <h1 className="text-5xl text-white font-bold mb-2">Научим покупать в Великобритании!</h1>
      <p className="text-2xl text-white mb-4">и экономить до 70%</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-2xl hover:bg-green-600">
        Получить адрес в UK
      </button>
    </div>

<div className='ml-[80px]'>
  <p className='text-3xl font-[700]'>Покупать в Великобритании очень просто</p>
  <p className='text-lg w-[610px]'>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</p>
  <div>

  <div>
      <Button onClick={()=>{setOpen1(true)}}>Add</Button>
      <Drawer open={open1} onClose={toggleDrawer1(false)}>
        {DrawerList1}
      </Drawer>
    </div>
    {Todo.map((el)=>{
      return(
        <div className='flex ml-[40px] items-center justify-around mt-[40px] mb-[50px]' key={el.id}>
          <img src={el.img} alt="" />
          <div>
            <h3 className="text-2xl font-bold mb-2">{el.name}</h3>
            <p className="text-lg mb-4 w-[800px]">{el.desc}</p>
            <button onClick={()=>{Del(el.id)}}>Delete</button>
            <div>
      <Button onClick={()=>{setOpen(true),setEdit(el.img),setEdit1(el.name),setEdit2(el.desc),setIdx(el.id)}}>Edit</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
          </div>
        </div>
      )
    })}
  </div>
</div>


    <div className="bg-gradient-to-r from-purple-500 to-blue-400 p-8 rounded-lg flex justify-center gap-[60px] items-center w-[90%] m-auto mb-[100px] mt-[100px]">
      <p className="text-xl text-white font-bold mb-4">Остались вопросы? Спросите нас в соцсетях!</p>
      <div className="flex space-x-4">
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300">
        </a>
        <a href="viber://chat" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300">
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300">
        </a>
      </div>
    </div>
    </div>
  )
}

export default Faruh