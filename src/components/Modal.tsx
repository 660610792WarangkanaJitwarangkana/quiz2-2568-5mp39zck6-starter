// import { useState } from "react";

// import {
//   Modal,
//   TextInput,
//   NumberInput,
//   Select,
//   Button,
//   Stack,
// } from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  // const [name, setName] = useState<string>("");
  // const [nameError, setnameError] = useState(false);

  // const [amount, setAmount] = useState<string | number>(0);
  // const [amountError, setamountError] = useState(false);

  // const [category, setCategory] = useState<string | null>(null);
  // const [categoryError, setcategoryError] = useState(false);

  // const inputnameOnChange = ( event : React.ChangeEvent<HTMLInputElement> ) => {
  //   setnameError(false);
  //   setName( event.target.value );
  // };

  // const inputamountOnChange = ( event : React.ChangeEvent<HTMLInputElement> ) => {
  //   setamountError(false);
  //   setAmount( event.target.value );
  // };

  // const inputcategoryOnChange = ( event : React.ChangeEvent<HTMLInputElement> ) => {
  //   setcategoryError(false);
  //   setCategory( event.target.value );
  // };

  // const handleSubmit = () => {
  //   let nameOk = true;
  //   if (name === "") {
  //     nameOk = false;
  //     setnameError(true);  
  //   }

  //   let amountOk = true;
  //   if (amount === "0"){
  //     amountOk = false;
  //     setamountError(true);
  //   }

  //   let categoryOk = true;
  //   if(category === ""){
  //     categoryOk = false;
  //     setcategoryError(true);
  //   }
  // };


  return {
    // <TextInput/>
    // className={(nameError ? " is-invalid " : "")}
    // onChange={inputnameOnChange}
    // value={name}
    

  };
}
