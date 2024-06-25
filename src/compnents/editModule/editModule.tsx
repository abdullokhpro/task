import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./editModule.scss";

interface EditModuleProps {
  setShowEditModule: React.Dispatch<React.SetStateAction<boolean>>;
  product: {
    title: string;
    email: string;
    job: string;
    tel: string | number;
  } | null;
  onSave: (updatedProduct: {
    title: string;
    email: string;
    job: string;
    tel: string | number;
  }) => void;
}

const EditModule: React.FC<EditModuleProps> = ({
  setShowEditModule,
  product,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    job: "",
    tel: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        email: product.email,
        job: product.job,
        tel: product.tel.toString(),
      });
    }
  }, [product]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({ ...product!, ...formData });
  };

  return (
    <div className="edit__product__module">
      <h2>Edit product data</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          placeholder="Job"
          type="text"
          name="job"
          value={formData.job}
          onChange={handleChange}
        />
        <input
          placeholder="Tel"
          type="text"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
        />
        <button className="save" type="submit">
          Save
        </button>
      </form>
      <button
        className="edit__product__module__closer"
        onClick={() => setShowEditModule(false)}
      >
        X
      </button>
    </div>
  );
};

export default EditModule;
