import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Footer from "../components/foot/foot";

const Layout = () => {
  let { pathname } = useLocation();

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <header className="w-[100%] flex justify-around items-center pt-[20px]">
        <div>
          <img src="public/img/layout-img/_2243895274448.svg" alt="" />
        </div>

        <div className="w-[50%] flex justify-around ">
          <Link
            to={"/"}
            className={
              pathname == "/"
                ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Bilol
          </Link>
          <Link
            to={"/ismoil"}
            className={
              pathname == "/ismoil"
                ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Ismoil
          </Link>
          <Link
            to={"/abubakr"}
            className={
              pathname == "/abubakr"
                ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Abubakr
          </Link>
          <Link
            to={"/faruh"}
            className={
              pathname == "/faruh"
                ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Faruh
          </Link>
          <Link
            to={"/lutfullo"}
            className={
              pathname == "/lutfullo"
                ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Lutfullo
          </Link>
          <Link
            to={"/maryam"}
            className={
              pathname == "/maryam"
                ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Maryam
          </Link>
          <Link
            to={"/safialloh"}
            className={
              pathname == "/safialloh"
                ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Safialloh
          </Link>
          <Link
            to={"/umar"}
            className={
              pathname == "/umar"
                ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Umar
          </Link>
        </div>

        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Language
            </InputLabel>
            <Select
              onChange={(e) => TranslateClick(e.target.value)}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
            >
              <MenuItem value={"en"}>EN</MenuItem>
              <MenuItem value={"ru"}>RU</MenuItem>
              <MenuItem value={"tj"}>TJ</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex gap-[20px]">
          <Button>
            <Link
              to={"/login"}
              className={
                pathname == "/login"
                  ? "text-[#1F2428] underline hover:decoration-4 decoration-sky-500 text-[18px] font-medium"
                  : "text-[#606060] text-[18px] font-medium"
              }
            >
              <PersonIcon />
              {t("LayoutTranslate.Log")}
            </Link>
          </Button>
          <Button
            sx={{
              backgroundColor: "#00C97B",
              width: "170px",
              height: "50px",
              borderRadius: "20px",
              color: "white",
              fontWeight: "500",
            }}
          >
            <Link
              to={"/connect"}
              className={
                pathname == "/connect"
                  ? "text-[#ffffff] text-[14px] font-medium"
                  : "text-[#ffffff] text-[14px] font-medium"
              }
            >
              {t("LayoutTranslate.Connect")}
            </Link>
          </Button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
