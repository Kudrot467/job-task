
import { useContext, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddTask = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedOption, setSelectedOption] = useState(null);
  const [currentDate] = useState(getDate());
  const [endDate, setEndDate] = useState(new Date());

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  console.log(currentDate);

  const tagOptions = [
    { value: "low", label: "Low" },
    { value: "moderate", label: "Moderate" },
    { value: "high", label: "High" },
  ];
  console.log(tagOptions)
  
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    const name = user?.displayName;
    const image_url = user?.photoURL;
    const email = user?.email;
    const taskTitle = data.taskTitle;
    const taskDescription = data.taskDescription;
    const priority = selectedOption.value;
    const taskDate = currentDate;
    const deadline=endDate;
    const task = {
      taskDate,
      name,
      image_url,
      email,
      taskTitle,
      taskDescription,
      priority,
      deadline
    
    };
      axiosSecure.post("/tasks", task).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire("Congrats!", "Your task created successfully !", "success");
        }
        reset();
      });
  };

  return (
    <div>
      <div className="py-20 text-center">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
                <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="flex flex-col gap-1">
                      <div className=" text-[#F8601F] font-medium text-lg text-center flex">
                        <h1 className=" text-[#F8601F] font-bold text-2xl rounded-xl w-full underline">
                          Create new Task
                        </h1>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-[#F8601F] font-medium text-lg">
                            Task tile
                          </span>
                        </label>
                        <input
                          type="text"
                          {...register("taskTitle", { required: true })}
                          placeholder="Enter task Title"
                          name="taskTitle"
                          className="input input-bordered border-[#F8601F]"
                        />
                        {errors.taskTitle && (
                          <span className="text-red-700">
                            *Write your title
                          </span>
                        )}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-[#F8601F] font-medium text-lg">
                            Task Description
                          </span>
                        </label>
                        <textarea
                          className="border-2 border-[#F8601F]"
                          name="postDescription"
                          {...register("taskDescription", { required: true })}
                          id="taskDescription"
                          placeholder="Write task Description"
                          cols="20"
                          rows="10"
                        ></textarea>
                        {errors.taskDescription && (
                          <span className="text-red-700">
                            *Write your task details
                          </span>
                        )}
                      </div>
                      <div >
                        <p className="text-lg text-red-700 ">Deadline</p>
                      <DatePicker className="border-2 border-[#F8601F]" selected={endDate} onChange={(date) => setEndDate(date)} />
                      </div>
                      <div className="border-2 border-[#F8601F]">
                       
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={tagOptions}
                        />
                        
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn text-white hover:bg-[#F8601F] bg-[#F8601F]">
                        Create Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default AddTask;
