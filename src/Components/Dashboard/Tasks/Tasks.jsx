import useTasks from "../../../Hooks/useTasks";

const Tasks = () => {
  const [tasks] = useTasks();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div>
        <h1 className="text-3xl">To-do</h1>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {tasks.map((task) => (
              <div key={task._id}>
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{task.taskTitle}</h2>
                    <p>{task.taskDescription}</p>
                    <p className="text-red-700"><span className="text-green-600">Priority:</span>{task.priority}</p>
                    <p className="text-red-700"><span className="font-bold">Deadline:</span> {task.deadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl">On-going</h1>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body"></div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl">Completed</h1>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
