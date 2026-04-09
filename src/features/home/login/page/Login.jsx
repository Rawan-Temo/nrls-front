import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../../../components/inputs/Input";
import "../style/style.css";
import Button from "../../../../components/buttons/Button";
import axiosInstance from "../../../../utils/axios";
import endPoints from "./../../../../constant/endPoints";
import { useAuth } from "../../../../context/AuthContext";
import { useNavigate } from "react-router";
import { dashboardRouts } from "../../../../constant/pageRoutes";

const Login = () => {
  const { login } = useAuth();

  const nav = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: yup.object({
      username: yup.string().required(),
      password: yup.string().required(),
    }),
    onSubmit: async (v) => {
      const { data } = await axiosInstance.post(endPoints.login, v);
      login(data.data);
      nav(dashboardRouts.user.page);
    },
  });

  return (
    <section className="container main-section">
      <form onSubmit={formik.handleSubmit} className="login-form">
        <h1>login</h1>

        <Input
          name="username"
          label="username"
          placeholder="enter username"
          onChange={formik.handleChange}
          errorText={formik.errors.username}
          value={formik.values.username}
        />
        <Input
          name="password"
          label="password"
          placeholder="enter password"
          onChange={formik.handleChange}
          errorText={formik.errors.password}
          value={formik.values.password}
          type="password"
        />
        <Button type="submit">submit</Button>
      </form>
    </section>
  );
};

export default Login;
