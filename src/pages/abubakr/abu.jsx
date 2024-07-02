import axios from "axios";
import React, { useEffect, useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import TextField from "@mui/material/TextField";

const API = "https://6651bde420f4f4c4427894da.mockapi.io/card";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Abu = () => {
  const options = [
    {
      id: 1,
      name: "ПОЧТА РОССИИ",
      duration: "10-14 дней",
      cost: "от £27.00",
      total: "£41.99",
      icon: "📬", // Placeholder for icon
    },
    {
      id: 2,
      name: "EMS ПОЧТА РОССИЯ",
      duration: "9-12 дней",
      cost: "от £40.00",
      total: "£54.55",
      icon: "🚀", // Placeholder for icon
    },
    {
      id: 3,
      name: "ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ",
      duration: "10-14 дней",
      cost: "от £13.00",
      total: "£90.50",
      icon: "📦", // Placeholder for icon
    },
  ];

  const [data, setData] = useState([]);
  const [country, setCountry] = useState("Russia");
  const [city, setCity] = useState("");
  const [index, setIndex] = useState("");
  const [weight, setWeight] = useState("");
  const [additionalService, setAdditionalService] = useState("");
  let [idX, setIdX] = useState("");
  let [idX1, setIdX1] = useState("");
  let [addImg, setAddImg] = useState("");
  let [addName, setAddName] = useState("");
  let [addDesc, setAddDesc] = useState("");
  let [addPrice, setAddPrice] = useState("");
  let [editImg, setEditImg] = useState("");
  let [editName, setEditName] = useState("");
  let [editDesc, setEditDesc] = useState("");
  let [editPrice, setEditPrice] = useState("");

  let [search,setSearch] = useState("");

  async function getData() {
    try {
      let { data } = await axios.get(API);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      let { data } = await axios.delete(`${API}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  async function addUser() {
    try {
      let { data } = await axios.post(`${API}`, {
        name: addName,
        des: addDesc,
        price: addPrice,
        img: addImg,
      });

      getData();
      setAddName("");
      setAddDesc("");
      setAddPrice("");
      setAddImg("");
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser() {
    try {
      let { data } = await axios.put(`${API}/${idX1}`, {
        name: editName,
        desc: editDesc,
        price: editPrice,
        img: editImg,
      });
      getData();
    } catch (error) {
      console.log(error);
    }
  }


    async function searchUser(search) {
      try {
        const { data } = await axios.get(`${API}?name=${search}`);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen1(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <TextField
        value={addImg}
        onChange={(e) => {
          setAddImg(e.target.value);
        }}
        sx={{ marginLeft: "10px", marginTop: "20px" }}
        id="outlined-basic"
        label="img"
        variant="outlined"
      />
      <TextField
        value={addName}
        onChange={(e) => {
          setAddName(e.target.value);
        }}
        sx={{ marginLeft: "10px", marginTop: "20px" }}
        id="outlined-basic"
        label="name"
        variant="outlined"
      />
      <TextField
        value={addDesc}
        onChange={(e) => {
          setAddDesc(e.target.value);
        }}
        sx={{ marginLeft: "10px", marginTop: "20px" }}
        id="outlined-basic"
        label="desc"
        variant="outlined"
      />
      <TextField
        value={addPrice}
        onChange={(e) => {
          setAddPrice(e.target.value);
        }}
        sx={{ marginLeft: "10px", marginTop: "20px" }}
        id="outlined-basic"
        label="price"
        variant="outlined"
      />
      <div className="flex items-center justify-between px-[30px] mt-[20px]">
        <Button
          onClick={() => {
            addUser(), setOpen1(false);
          }}
          variant="contained"
        >
          Add
        </Button>
        <Button
          sx={{ bgcolor: "red" }}
          onClick={() => {
            setOpen1(false);
          }}
          variant="contained"
        >
          Cansel
        </Button>
      </div>
    </Box>
  );

  const [open2, setOpen2] = useState(false);

  const toggleDrawer2 = (newOpen) => () => {
    setOpen2(newOpen);
  };

  const DrawerList2 = (
    <Box sx={{ width: 250 }} role="presentation">
      <TextField
        value={editImg}
        onChange={(e) => {
          setEditImg(e.target.value);
        }}
        sx={{ marginLeft: "10px", marginTop: "20px" }}
        id="outlined-basic"
        label="img"
        variant="outlined"
      />
      <TextField
        value={editName}
        onChange={(e) => {
          setEditName(e.target.value);
        }}
        sx={{ marginLeft: "10px", marginTop: "20px" }}
        id="outlined-basic"
        label="name"
        variant="outlined"
      />
      <TextField
        value={editDesc}
        onChange={(e) => {
          setEditDesc(e.target.value);
        }}
        sx={{ marginLeft: "10px", marginTop: "20px" }}
        id="outlined-basic"
        label="desc"
        variant="outlined"
      />
      <TextField
        value={editPrice}
        onChange={(e) => {
          setEditPrice(e.target.value);
        }}
        sx={{ marginLeft: "10px", marginTop: "20px" }}
        id="outlined-basic"
        label="price"
        variant="outlined"
      />
      <div className="flex items-center justify-between px-[30px] mt-[20px]">
        <Button
          onClick={() => {
            editUser(), setOpen2(false);
          }}
          variant="contained"
        >
          save
        </Button>
        <Button
          sx={{ bgcolor: "red" }}
          onClick={() => {
            setOpen2(false);
          }}
          variant="contained"
        >
          Cansel
        </Button>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={open1}>{DrawerList}</Drawer>

      <Drawer open={open2}>{DrawerList2}</Drawer>

      <React.Fragment>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Are you sure"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure to delete this card?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                deleteUser(idX), setOpen(false);
              }}
            >
              Yes
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <div className="w-[95%] h-[210px] bg-[url('../../../public/img/layout-img/backround.png')] m-auto rounded-3xl mt-[100px] py-[50px] px-[60px]">
        <p className="text-[20px] text-[#FFFFFF] mb-[10px] font-mono">
          Главная / Цены
        </p>
        <p className="text-[#FFFFFF] text-[50px] font-mono font-[600]">
          Услуги доставки из Великобритании
        </p>
      </div>

      <div className="flex items-center justify-between px-[40px] mt-[150px] mb-[60px]">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            value={search}
            onChange={(e) => {
              setSearch(e.target.value), searchUser(search);
            }}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>

        <Button
          onClick={() => {
            setOpen1(true);
          }}
          variant="contained"
        >
          Add New
        </Button>
      </div>
      <div className="flex items-center flex-wrap justify-evenly">
        {data.map((el) => (
          <div
            className="w-[30%] h-[500px] mb-[30px] bg-[white] shadow-lg border rounded-lg"
            key={el.id}
          >
            <img className="w-[100%] h-[60%] rounded-lg" src={el.avatar} />{" "}
            <h1 className="text-[#1F2428] text-[30px] ml-[20px] mt-[15px] mb-[10px] font-mono font-[600]">
              {el.name}
            </h1>
            <p className="text-[grey] text-[20px] font-mono ml-[20px] mb-[10px] mt-[10px] font-[600]">
              {el.desc}
            </p>
            <div className="flex items-center justify-between px-[20px]">
              <button className="bg-[aqua] text-[white] px-[30px] py-[7px] rounded-sm mt-[10px] font-mono font-[600]">
                {el.price}
              </button>

              <div>
                <button
                  onClick={() => {
                    setOpen2(true), setEditImg(el.avatar);
                    setEditDesc(el.desc);
                    setEditName(el.name);
                    setEditPrice(el.price), setIdX1(el.id);
                  }}
                >
                  <EditNoteIcon />
                </button>
                <button
                  onClick={() => {
                    setOpen(true), setIdX(el.id);
                  }}
                  className="text-[red] ml-[10px]"
                >
                  <DeleteOutlineIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-[100px] mt-[100px]">
        <div className="w-[45%]">
          <h1 className="text-[45px] font-bold">
            Онлайн-калькулятор стоимости доставки товара
          </h1>
          <p className="text-[17px] font-bold mt-[15px] text-[grey]">
            Задайте необходимые параметры посылки, и калькулятор рассчитает
            приблизительную стоимость доставки вашей посылки из Англии.
          </p>
        </div>

        <div className="w-[40%]">
          <form className="flex flex-col gap-4 w-full">
            <label className="flex flex-col">
              <span className="mb-[5px]">Страна:</span>
              <select className="mt-1 p-2 border border-gray-300 rounded">
                <option value="Russia">Россия</option>
                <option value="Other">Другая страна</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span className="mb-[5px]">Город:</span>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-[5px]">Вес посылки:</span>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-[5px]">Дополнительные услуги:</span>
              <select className="mt-1 p-2 border border-gray-300 rounded">
                <option value="">Выберите услуги</option>
                <option value="Service1">Услуга 1</option>
                <option value="Service2">Услуга 2</option>
              </select>
            </label>
            <button className="mt-4 p-2 bg-green-500 text-white rounded">
              Рассчитать
            </button>
          </form>
        </div>
      </div>

      <div className="w-[85%] m-auto mt-[150px]">
        <h1 className="text-2xl font-bold mb-[20px]">Варианты доставки:</h1>
        {options.map((el) => (
          <div
            key={el.id}
            className="flex items-center justify-between bg-white p-4 mb-[25px] rounded shadow"
          >
            <div className="flex items-center">
              <div className="text-4xl mr-4">{el.icon}</div>
              <div>
                <h2 className="font-bold">{el.name}</h2>
                <p className="text-sm text-gray-500">Сроки: {el.duration}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm text-gray-500">
                Стоимость доставки: {el.cost}
              </p>
              <p className="font-bold">Итого: {el.total}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[85%] mx-auto p-6 rounded-lg  mt-[120px]">
        <h2 className="text-2xl font-bold mb-6">
          Покупки с операторами Okeypost.com
        </h2>

        <div className="flex justify-between items-start p-4 mb-4 bg-gray-100 rounded-lg border">
          <div className="max-w-lg">
            <h3 className="text-lg font-semibold mb-2">
              Быстрое оформление покупок в интернет-магазинах
            </h3>
            <p className="text-sm text-gray-700">
              Вы присылаете ссылки, а оформлением заказов занимаются операторы
              Почтой.ком. Они сделают покупки за вас, проконтролируют доставку
              на склад и сообщат, когда всё будет готово.
            </p>
          </div>
          <div className="text-right font-semibold text-gray-800">
            <p>5% от стоимости товаров</p>
            <p>минимум £7 для каждого магазина</p>
            <p>Но не менее £7 для каждого лота в eBay</p>
          </div>
        </div>

        <div className="flex justify-between items-start p-4 bg-gray-100 rounded-lg border">
          <div className="max-w-lg">
            <h3 className="text-lg font-semibold mb-2">
              Фото товара по услуге "Покупка с оператором"
            </h3>
            <p className="text-sm text-gray-700">
              Три фото выбранного вами товара, приобретенного по услуге "Полное
              сопровождение"
            </p>
          </div>
          <div className="text-right font-semibold text-gray-800">
            <p>£2</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full max-w-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg shadow-lg p-8 m-auto mt-[100px]">
        <div className="w-[30%] ml-[20px] mt-[20px]">
          <img
            src="../../../public/img/layout-img/Ресурс 1 6.png"
            alt=""
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Попробуйте заказывать с оператором прямо сейчас.
          </h2>
          <p className="text-lg mb-6 text-white">
            Пришлите ссылку на товар, его купят и доставят на наш склад в
            кратчайшие сроки.
          </p>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Введите ссылку на товар"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300">
              Отправить
            </button>
          </div>
          <p className="text-xs text-gray-200 mt-2">
            Нажимая на кнопку вы подтверждаете согласие с правилами
            предоставления услуги и политикой конфиденциальности
          </p>
        </div>
      </div>

      <div className="w-[85%] m-auto mt-[150px]">
        <h2 className="text-2xl font-bold mb-6">Дополнительная упаковка</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div>
              <h3 className="text-lg font-semibold">Многослойная пленка</h3>
              <p className="text-sm text-gray-500">
                Дополнительная защита покупок
              </p>
            </div>
            <div className="text-right font-bold text-gray-800">£3.99</div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div>
              <h3 className="text-lg font-semibold">Упаковка в пакет</h3>
              <p className="text-sm text-gray-500">Надежно защищает от влаги</p>
            </div>
            <div className="text-right font-bold text-gray-800">£1.99</div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div>
              <h3 className="text-lg font-semibold">
                Упаковка в коробку с двойными стенками
              </h3>
              <p className="text-sm text-gray-500">Надежно защищает от влаги</p>
            </div>
            <div className="text-right font-bold text-gray-800">£4.99</div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div>
              <h3 className="text-lg font-semibold">Наклейка “Хрупкий груз”</h3>
              <p className="text-sm text-gray-500">
                Дополнительная защита покупок
              </p>
            </div>
            <div className="text-right font-bold text-gray-800">£0.25</div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div>
              <h3 className="text-lg font-semibold">
                Наклейка “Обращаться с осторожностью”
              </h3>
              <p className="text-sm text-gray-500">
                Дополнительная защита покупок
              </p>
            </div>
            <div className="text-right font-bold text-gray-800">£0.25</div>
          </div>
        </div>
      </div>

      <div className="w-[95%] h-[170px] bg-[url('../../../public/img/layout-img/backround.png')] m-auto rounded-3xl mt-[100px] py-[50px] px-[60px] flex items-center justify-between mb-[100px]">
        <p className="text-[#FFFFFF] text-[35px] font-mono font-[600] w-[70%]">
          Услуги доставки из Великобритании
        </p>

        <div className="flex items-center">
          <img src="../../../public/img/layout-img/Вайбер.png" alt="" />
          <img
            className="ml-[10px] mr-[10px]"
            src="../../../public/img/layout-img/Ватсап.png"
            alt=""
          />
          <img src="../../../public/img/layout-img/Чат.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Abu;
