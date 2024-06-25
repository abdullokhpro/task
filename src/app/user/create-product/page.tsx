"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SideBar from "@/compnents/sidebar/SideBar";
import "./create-product.scss";
import { useCreateProductsMutation } from "@/store/productSlice/productApi";
import { toast } from "react-toastify";

interface FormValues {
  title: string;
  email: string;
  job: string;
  tel: number;
}

const CreateProduct: React.FC = () => {
  const [createProduct, { isLoading }] = useCreateProductsMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      email: "",
      job: "",
      tel: +998,
    } as FormValues,
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      job: Yup.string().required("Required"),
      tel: Yup.string().required("Required"),
    }),
    onSubmit: async (values: FormValues, { resetForm }) => {
      try {
        const result = await createProduct(values).unwrap();
        if (result) {
          resetForm();
          toast.success("Info added successfully");
        }
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <div className="create-product">
      <SideBar />
      <div className="create-product__right">
        <form className="create-product__form" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error-message">{formik.errors.title}</div>
          ) : null}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}

          <input
            type="text"
            placeholder="Job"
            name="job"
            value={formik.values.job}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.job && formik.errors.job ? (
            <div className="error-message">{formik.errors.job}</div>
          ) : null}

          <input
            type="number"
            placeholder="Tel"
            name="tel"
            value={formik.values.tel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.tel && formik.errors.tel ? (
            <div className="error-message">{formik.errors.tel}</div>
          ) : null}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
