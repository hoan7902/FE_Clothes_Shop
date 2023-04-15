import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertColor,
  Box,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./styles.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser } from "@/pages/api";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNoti: React.Dispatch<React.SetStateAction<boolean>>;
  setStatusAlert: React.Dispatch<React.SetStateAction<AlertColor>>;
  setMessageAlert: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<Props> = ({
  setOpen,
  setOpenNoti,
  setStatusAlert,
  setMessageAlert,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibility, setIsVisibility] = useState(false);

  const handleChangeVisibility = () => {
    setIsVisibility(!isVisibility);
  };

  const handleLogin = async () => {
    const response = await loginUser(JSON.stringify({ email, password }));
    if (response) {
      setOpenNoti(true);
      setStatusAlert("success");
      setMessageAlert("Đăng nhập thành công");
      setOpen(false);
      localStorage.setItem("user", JSON.stringify(response));
    } else {
      setStatusAlert("error");
      setMessageAlert("Thiếu hoặc sai thông tin");
      setOpenNoti(true);
    }
  };

  return (
    <Stack className={styles.form}>
      <Stack alignItems="center">
        <Stack
          className={styles.wrapInput}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <input
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
            type="text"
          />
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <Stack
          className={styles.wrapInput}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <input
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            name="email"
            type={isVisibility ? "text" : "password"}
          />
          <Box onClick={handleChangeVisibility}>
            {isVisibility ? (
              <VisibilityOffIcon sx={{ marginTop: "30px" }} />
            ) : (
              <VisibilityIcon sx={{ marginTop: "30px" }} />
            )}
          </Box>
        </Stack>
        <Typography
          sx={{ "&:hover": { cursor: "pointer", opacity: "0.9" } }}
          color="#ad2526"
          p="20px 0"
        >
          Quên mật khẩu
        </Typography>
        <button onClick={handleLogin} className={styles.buttonLogin}>
          Đăng nhập
        </button>
      </Stack>
    </Stack>
  );
};

export default Login;
