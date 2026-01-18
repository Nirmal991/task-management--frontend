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

export const getAllUsersRequest = () => {
  return api.get("/auth/users");
};

//OrganizationsAPI
export const CreateOrg = (name: string, domain: string) => { 
  return api.post("/org/createOrg", {
    name: name,
    domain: domain
  });
};

export const getOrg = (orgId: string) => {
  return api.get(`/org/${orgId}`)
}

export const getMembersOfOrg = (orgId: string) => {
  return api.get(`/org/${orgId}/members`)
}

export const getAllUserOrgs = (userId: string) => {
  return api.get(`/org/user/${userId}`)
}

//ProjectAPI

export const createProject = (orgId: string, name: string, description: string, userIds: string[] = []) => {
  return api.post(`/organizations/${orgId}/project`,{
    name,
    description,
    userIds
  })
}

export const getOrgProject = (orgId: string) => {
  return api.get(`/organizations/${orgId}/projects`)
}

export const getProjectById = (projectId: string) => {
  return api.get(`/projects/${projectId}`);
}

export const updateProject = (projectId: string, data: {
  name?: string,
  description?: string;
  addMembers?: string[];
  removeMembers?: string[]
}) => {
  return api.patch(`/projects/${projectId}`)
}

export const deleteProject = (projectId: string) => {
  return api.delete(`/projects/${projectId}`)
}















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

