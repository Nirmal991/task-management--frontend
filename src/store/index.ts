import api from "../api/api";


export const loginRequest = (username: string, password: string) => {
  return api.post("/auth/login", {
    username: username, 
    password: password,
  });
};

export const SignUpRequest = (username: string, email: string, password: string) => {
    return api.post('/auth/signup', {
        username: username,
        email: email,
        password: password,
    });
}

export const CreateOrg = (name: string, domain: string) => { 
  return api.post("/org", {
    name: name,
    domain: domain
  });
};











// export const loginRequest = (username: string, password: string) => {
//   return api("/auth/login", {
//     method: "POST",
//     body: JSON.stringify({ username, password}),
//   });
// };

// export const SignUpRequest = (username: string, email: string, password: string) => {
//   return api("/auth/signup", {
//     method: "POST",
//     body: JSON.stringify({ username, email, password}),
//   });
// };

