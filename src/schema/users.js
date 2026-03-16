import * as Yup from "yup";
import { roles } from "../constant/enums";
export const userSchema = Yup.object({
  username: Yup.string().required().min(2).max(20),

  full_name: Yup.string().required().min(2).max(20),

  email: Yup.string().required().email(),

  password: Yup.string().required().min(6).max(100),

  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null])
    .required(),

  role: Yup.string().oneOf(Object.values(roles)).required(),

  is_active: Yup.boolean().default(false),
});
