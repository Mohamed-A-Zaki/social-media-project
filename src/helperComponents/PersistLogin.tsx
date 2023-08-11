import { setToken, setUser } from "../store/authSlice";
import { useAppDispatch } from "../store/hooks";

type Props = {
  children: React.ReactNode;
};

const PersistLogin = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") as string);

  if (token) {
    dispatch(setToken(token));
    dispatch(setUser(user));
  }

  return children;
};

export default PersistLogin;
