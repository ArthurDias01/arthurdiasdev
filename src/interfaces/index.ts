import {
  IEducationFields,
  IExperienceFields,
  IProjectFields,
} from "../@types/contentful";

export interface ICustomProject extends IProjectFields {
  id: string;
}

export interface ICustomEducationFields extends IEducationFields {
  id: string;
}

export interface ICustomExperienceFields extends IExperienceFields {
  id: string;
}
