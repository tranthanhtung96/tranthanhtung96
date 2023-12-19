import axios from "axios";

let token = "";

export const login = async () => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://realm.mongodb.com/api/client/v2.0/app/data-yfibc/auth/providers/api-key/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      key: "MONNa8N8VIOiplRdqV2pj02MzW2tmgUHlRY6Cvu5KvOg01uhurxcggPSkL1DNRZ4",
    },
  };
  const response = await axios.request(config);
  token = response.data["access_token"];
};

export const register = async (document) => {
  const config = {
    method: "post",
    url: "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yfibc/endpoint/data/v1/action/insertOne",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      dataSource: "Cluster0",
      database: "data",
      collection: "wedding",
      document: { ...document, createdAt: { $date: new Date() } },
    },
  };
  const response = await axios.request(config);
  return response.status === 201;
};
