export interface UsuarioResponse {
  id_usuario:     number;
  username:       string;
  nombre:         string;
  app:            string;
  apm:            string;
  email:          string;
  pass:           string;
  sexo:           string;
  fecha_nac:      Date;
  telefono:       string;
  rol:            string;
  imagenPerfil:   string;
}

export type LoginResponse = UsuarioResponse | false;