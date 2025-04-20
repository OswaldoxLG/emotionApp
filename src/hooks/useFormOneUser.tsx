import { useReducer } from "react";
import { useOneUser } from "./useOneUser";

interface OneUser {
  id_user: number | string;
}

export interface FormUserData {
  id_user: number | string;
  username: string;
  name: string;
  lastname: string;
  sex: string;
  email: string;
  password: string;
  phone: string;
  image: string;
}

export const InitialStateUserForm: FormUserData = {
  id_user: "",
  username: "",
  name: "",
  lastname: "",
  sex: "",
  email: "",
  password: "",
  phone: "",
  image: "",
};

type Action = {
  type: "handleInputChange";
  payload: { fieldName: keyof FormUserData; value: string | number };
};

const formReducer = (state: FormUserData, action: Action) => {
  switch (action.type) {
    case "handleInputChange":
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    default:
      return {
        ...state,
      };
  }
};

export const useFormOneUser = ({ id_user }: OneUser) => {
  const [state, dispatch] = useReducer(formReducer, InitialStateUserForm);

  const { updateUser, deleteUser } = useOneUser({ id_user });

  const handleInputChange = (
    fieldName: keyof FormUserData,
    value: string | number
  ) => {
    dispatch({ type: "handleInputChange", payload: { fieldName, value } });
  };

  const handleSubmit = () => {
    state.id_user !== "" && updateUser(state);
  };
  
  return {
    state,
    handleInputChange,
    handleSubmit,
  };
};
