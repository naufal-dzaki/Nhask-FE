import React, { useState, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import BasicInput from "../Forms/Input/BasicInput";
import DatePickerComponent from "../Forms/Input/DatePickerComponent";
import LevelPriorityComponent from "../Forms/Input/LevelPriorityComponent";
import TextAreaComponent from "../Forms/Input/TextAreaComponent";
import dayjs from "dayjs";

const FormTask = ({
  isShowForm,
  setIsShowForm,
  data,
  formTitle,
  isUpdateForm,
}) => {
  const [title, setTitle] = useState(isUpdateForm ? data.title : "");
  const [deadLine, setDeadLine] = useState(
    isUpdateForm ? dayjs(data.deadline) : ""
  );
  const [levelPriority, setLevelPriority] = useState(
    isUpdateForm ? data.level : null
  );
  const [description, setDescription] = useState(
    isUpdateForm ? data.description : ""
  );

  const containerRef = useRef();

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!containerRef.current.contains(e.target)) {
  //       setIsShowForm(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  const handleClose = () => {
    if (isShowForm) setIsShowForm(false);
  };

  return (
    <div
      className={`${
        isShowForm ? `opacity-100 z-20 ease-in` : `hidden -z-20 ease-out`
      } transition duration-150 bg-nhask-black-1/5 backdrop-blur-[2px] w-full h-full fixed inset-0`}>
      <div
        className="fixed p-5 md:p-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-nhask-bg-primary rounded-2xl w-[80vw] max-w-[564px] shadow-md"
        ref={containerRef}>
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-medium md:text-2xl text-nhask-primary">
            {formTitle}
          </h1>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer text-nhask-text"
            onClick={handleClose}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-4 sm:mb-4">
          <div className="mb-4 sm:mb-0 sm:col-span-8">
            <BasicInput
              label={"Title"}
              value={title}
              setValue={setTitle}
              placeHolder={`Write your task's title`}
            />
          </div>
          <div className="mb-4 sm:mb-0 sm:col-span-4">
            <DatePickerComponent
              label={"Deadline"}
              value={deadLine}
              setValue={setDeadLine}
              containerRef={containerRef}
            />
          </div>
        </div>
        <div className="mb-4">
          <LevelPriorityComponent
            label={"Level Priority"}
            value={levelPriority}
            setValue={setLevelPriority}
          />
        </div>
        <div className="mb-4">
          <TextAreaComponent
            label={"Description"}
            value={description}
            setValue={setDescription}
            placeHolder={`Write your task's description`}
          />
        </div>
        <button className="px-3 py-2 mr-2 text-sm font-medium rounded-md text-nhask-text bg-nhask-primary drop-shadow-sm">
          Create Task
        </button>
      </div>
    </div>
  );
};

export default FormTask;
