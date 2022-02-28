import axios from "axios";

const URL = "http://localhost:8000";
export const CreatePost = async (post) => {
  try {
    return await axios.post(`${URL}/home/postz`, post);
  } catch (error) {
    console.log("error occured", error);
  }
};

export const getAllPost = async (param) => {
  try {
    let res = await axios.get(`${URL}/home/posts/${param}`);
    return res.data;
  } catch (error) {
    console.log("error occured getallpost", error);
  }
};

export const getPost = async (id) => {
  try {
    let res = await axios.get(`${URL}/home/post/${id}`);
    return res.data;
  } catch (error) {
    console.log("error occured getapost", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    await axios.post(`${URL}/home/update/${id}`, post);
  } catch (error) {
    console.log("error occured updatepost", error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/home/delete/${id}`);
  } catch (error) {
    console.log("error occured deletepost", error);
  }
};
