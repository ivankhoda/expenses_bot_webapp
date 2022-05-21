import "antd/dist/antd.css";
import React from "react";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";
import { TasksTable } from "../TasksTable/TasksTable";
import "./Dashboards.style.scss";
export type Range = {
  from: string;
  to: string;
};

export const Dashboard = () => {
  const getRanges = (arr: Range[]) => {
    return arr.map((range, i) => (
      <ul key={i}>
        <li>{range.from}</li>
        <li>{range.to}</li>
      </ul>
    ));
  };

  return (
    <>
      <TasksTable />

      <NewTaskForm />
    </>
  );
};
