import * as Yup from "yup";
export const authorSchema = Yup.object({
  full_name: Yup.string().required().min(2).max(20),

  email: Yup.string().required().email(),

  slug: Yup.string()
    .required("Slug is required")
    .min(2)
    .max(30)
    .matches(
      /^[\p{L}0-9_]+$/u,
      "No spaces allowed, only letters, numbers, and (_)",
    ),

  bio: Yup.string().notRequired(),

  profile_image: Yup.object().nullable(),
});
