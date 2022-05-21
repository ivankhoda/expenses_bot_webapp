import { Button, DatePicker, Input, Space } from "antd";
import React, { useState } from "react";
import { useToken } from "../App/useToken";
import "./NewTaskForm.style.scss";
export type Task = {
  task_name: string;
  task_category: string;
  task_ranges: Range[];
  task_status: string;
  task_id?: number;
};

async function createTask(
  taskInfo: {
    task_name: string;
    task_category: string;
    task_ranges: {};
    task_status: string;
  },
  token: string
) {
  return fetch("http://localhost:3000/task", {
    method: "POST",

    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },

    body: JSON.stringify(taskInfo),
  }).then((data) => data.json());
}

export const NewTaskForm = () => {
  const { getToken } = useToken();
  const token = getToken();
  const { RangePicker } = DatePicker;
  const [task_name, setTask_name] = useState("");
  const [task_category, setTask_category] = useState("");
  const [task_start, setTask_start] = useState("");
  const [task_end, setTask_end] = useState("");
  const [task_status, setTask_status] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const task = await createTask(
      {
        task_name,
        task_category,
        task_ranges: { from: task_start, to: task_end },
        task_status,
      },
      token
    );
  };
  const onChange = (range: any) => {
    const startDate = range[0]._d;
    const endDate = range[1]._d;
    setTask_start(startDate);
    setTask_end(endDate);
  };

  return (
    <div className="task_form">
      <Input placeholder="Enter task name" value={task_name} onChange={(e) => setTask_name(e.target.value)}></Input>
      <Input
        placeholder="Enter task category"
        value={task_category}
        onChange={(e) => setTask_category(e.target.value)}
      ></Input>

      <Space direction="vertical" size={12}>
        <RangePicker showTime onChange={(range) => onChange(range)} />
      </Space>
      <Input
        placeholder="Enter task status"
        value={task_status}
        onChange={(e) => setTask_status(e.target.value)}
      ></Input>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};
