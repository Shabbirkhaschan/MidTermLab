import { useState } from "react";
import "./Middle.css";
function Middle(prop) {
  
   const array1=["Abrar Ahmed ,muhammad Ali get maiden call up for England tests:fawad:hassan,yasor dropped"];
   const array2=["Warner:'I'm not criminal. You should get right of appeal."];
   const array3=["Abrar Ahmed ,muhammad Ali get maiden call up for England tests:fawad:hassan,yasor dropped"];
   const array4=["Warner:'I'm not criminal. You should get right of appeal."];
   
   
   const[item, setitem]=useState(
[

{id:1,title: "Australia News", links:array1},
{id:2,title: "", links:array2},
{id:3,title: "Australia News", links:array3},
{id:4,title: "", links:array4},




]
);
 const Delete=(M)=>{

     setitem(
        item.filter((src1)=>(src1.id!==M))
     
    );
     
}

    return (
        <div >
                {
                    item.map((r)=>(

                            <div id="card" >
                                <h3 id="title">
                                    {
                                        r.title
                                    }
                                    </h3>
                                <img src="./Aus.jpg" id="mpic"/>
                                    
                                         <div>
                                        {
                                            r.links?.map((Q)=>(
                                              <h5>
                                                 {Q}    {prop.sc}
                                              </h5>


                                            ))
                                        }


             </div>
                 <button onClick={()=>{Delete(r.id)}}>  Delete </button>
                                </div>
                    )
                    )

                }

        </div>




      );
}

export default Middle;