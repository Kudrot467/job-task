import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTasks = () => {
    const axiosSecure=useAxiosSecure();
    const {data:tasks=[]}=useQuery({
        queryKey:['tasks'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/tasks')
            return res.data;
        }
    })
    return [tasks];
};

export default useTasks;