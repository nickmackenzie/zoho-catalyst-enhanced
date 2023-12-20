// types.ts
export type Table = {
  project_id?: ProjectID;
  table_name: string;
  modified_by: ModifiedBy;
  modified_time: string;
  table_id: string;
};

export type ModifiedBy = {
  zuid: string;
  is_confirmed: boolean;
  email_id: string;
  first_name: string;
  last_name: string;
  user_type: string;
  user_id: string;
};

export type ProjectID = {
  project_name: string;
  id: string;
};
