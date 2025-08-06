import { useNavigate } from "react-router-dom";

function CourseCard({data}){
    const navigate = useNavigate();

    return(
        <div 
            onClick={()=>navigate("/course/description/", {state:{...data}})}
           className=" text-white w-[20rem] h-[400px] shadow-lg rounded cursor-pointer  group overflow-hidden">
            <div className=" overflow-hidden border rounded-xl p-2">
                <img
                    className="h-48 w-full  rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out duration-300"
                    src={data?.thumbnail?.secure_url}
                    alt="course thumbnail"
                />
                <div className=" p-5 space-y-1  text-white">
                    <h2  className=" text-xl font-bold text-cyan-600 line-clamp-2">
                        {data?.title}
                    </h2>
                    <p className=" line-clamp-2">
                        {data?.description}
                    </p>
                    <p className=" font-semibold">
                        <span className=" text-cyan-600  font-bold">Category :</span>
                        {data?.category}
                    </p>
                    {/* <p className=" font-semibold">
                        <span className=" text-cyan-600  font-bold">Total lectures :</span>
                        {data?.numberoflectures}
                    </p> */}
                    <p className=" font-semibold">
                        <span className=" text-cyan-600  font-bold">Instructor :</span>
                        {data?.createdBy}
                    </p>
                </div>
            </div>
        </div>
    );

}
export default CourseCard;