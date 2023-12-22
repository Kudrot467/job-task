import { useState } from "react";
import useTasks from "../../../Hooks/useTasks";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [tasks] = useTasks();
  const [allTask, setAllTask] = useState(tasks);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");

          const remaining = allTask.filter((task) => task._id !== id);
          setAllTask(remaining);
        }
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="card bg-base-100 shadow-xl">
      <h1 className="text-3xl">To-do</h1>
        <div className="card-body">
          {allTask.map((task) => (
            <div key={task._id}>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{task.taskTitle}</h2>
                  <p>{task.taskDescription}</p>
                  <p className="text-red-700">
                    <span className="text-green-600">Priority:</span>
                    {task.priority}
                  </p>
                  <p className="text-red-700">
                    <span className="font-bold">Deadline:</span> {task.deadline}
                  </p>
                  <div className="card-actions justify-end">
                  <Link to={`/update/${task._id}`}>
                    <button className="btn text-[#52BA5D] mr-2 hover:bg-[#CB6CE6] hover:text-white">
                      Update
                    </button>
                  </Link>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="btn text-white bg-red-600 hover:bg-red-600 hover:text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   
        <div className="card bg-base-100 shadow-xl">
        <h1 className="text-3xl">Ongoing</h1>
          <div className="card-body"></div>
        </div>
       
        <div className="card bg-base-100 shadow-xl">
        <h1 className="text-3xl">Completed</h1>
          <div className="card-body"></div>
        </div>
     
      
    </div>
  );
};

export default Tasks;
