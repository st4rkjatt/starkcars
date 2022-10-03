
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../redux/action/action";
import {  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditR() {
  let { id } = useParams();

//   alert(id, "id");

  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contact.contacts);

  // console.log(contact, "this is contact")

  const [forms, setForms] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = forms;

  const onchange = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };
  console.log(forms, "this is forms");
  useEffect(() => {
    dispatch(getContact(id));
  }, []);


  const navigator=useNavigate()
  const onUpdateContact = (e) => {
    e.preventDefault();
    dispatch(updateContact(forms));
    alert("updated data");
    navigator(-1);
  };

  return (
    <>
      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="row py-5 " style={{ marginTop: "100px" }}>
          <div className="col-md-6 mx-auto text-center bg-light">
            <h1>Update data User</h1>
          </div>
        </div>

        <div className="row row_shadow" style={{ marginTop: "50px" }}>
          <div className="col-md-6 mx-auto">
            <form onSubmit={onUpdateContact}>
              {contact &&
                contact.map((item) => {
                  return <>
                  {
                    id==item.id?
                    <>
                <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="id"
                  value={id}
                  onChange={onchange}
                  placeholder={item.id}
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={name}
                  onChange={onchange}
                  placeholder={item.name}
                />
              </div>
              <div class="form-group">
                <br />
                <textarea
                  type="text"
                  class="form-control"
                  name="username"
                  value={username}
                  onChange={onchange}
                  placeholder={item.username}
                />
              </div>
              <br />{" "}
              <input
                type="text"
                class="form-control"
                name="email"
                value={email}
                onChange={onchange}
                placeholder={item.email}
              />
              <br />
              <button type="submit" class="btn btn-primary btn-lg">
                Submit
              </button>
              </>
                    :""
                  }
                  
          
                  </>;
                })}
                </form>
          </div>
        </div>
      </div>
    </>
  );
}
