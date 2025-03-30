export interface UserResponse {
  id_user:        number | string;
  rol:            string;
  username:       string;
  name:           string;
  lastname:       string;
  sex:            string;
  email:          string;
  password:       string;
  phone:          string;
  activo?:        string;
  created_at?:    string;
  updated_at?:    string;
  image:          string;
}

export type LoginResponse = UserResponse | false;