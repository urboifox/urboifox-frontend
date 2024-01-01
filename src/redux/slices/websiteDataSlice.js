import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  projects: [],
  skills: [],
  info: [],
};

const websiteDataSlice = createSlice({
  name: "website_data",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      );
    },
    updateProject: (state, action) => {
      state.projects = state.projects.map((project) => {
        if (project._id === action.payload._id) {
          project = action.payload;
        }
        return project;
      });
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    deleteSkill: (state, action) => {
      state.skills = state.skills.filter(
        (skill) => skill._id !== action.payload
      );
    },
    updateSkill: (state, action) => {
      state.skills = state.skills.map((skill) => {
        if (skill._id === action.payload._id) {
          skill = action.payload;
        }
        return skill;
      });
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    deleteInfo: (state, action) => {
      state.info = state.info.filter((info) => info._id !== action.payload);
    },
  },
});

export const fetchData = () => async (dispatch) => {
  try {
    const projectsResponse = await axios.get("/projects");
    const skillsResponse = await axios.get(`/skills`);
    const infoResponse = await axios.get(`/info`);

    dispatch(setProjects(projectsResponse.data.data));
    dispatch(setSkills(skillsResponse.data.data));
    dispatch(setInfo(infoResponse.data.data));
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const {
  setProjects,
  setSkills,
  deleteInfo,
  deleteSkill,
  setInfo,
  deleteProject,
  updateProject,
  updateSkill,
} = websiteDataSlice.actions;
export default websiteDataSlice;
