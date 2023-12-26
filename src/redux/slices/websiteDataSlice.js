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
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    deleteSkill: (state, action) => {
      state.skills = state.skills.filter(
        (skill) => skill._id !== action.payload
      );
    },
    setInfo: (state, action) => {
      state.info = action.payload;
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

export const { setProjects, setSkills, deleteSkill, setInfo, deleteProject } =
  websiteDataSlice.actions;
export default websiteDataSlice;
