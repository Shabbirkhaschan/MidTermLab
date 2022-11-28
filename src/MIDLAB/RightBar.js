import { useState } from "react";
import "./RightBar.css";
function RightBar(prop) {
  
   const arrayB=["England","England Lions", "Day 2 : Eng lions trail by 89 runs"];
   const arrayC=["India","New Zealand","New Zealand Chose the bat"];
   
   const[item, setitem]=useState(
[

{id:2,title: "INNINGS BREAK", links:arrayB},
{id:3,title: "STUMPS", links:arrayC},




]
);
{/* const Delete=(M)=>{

     setitem(
        item.filter((src1)=>(src1.id!==M))
     
    );
     
}*/}

    return (
        <div >
                {
                    item.map((r)=>(

                            <div id="card">
                                    <h4 id="title">
                                    {
                                        r.title
                                    }
                                    </h4>
                                         <div>
                                        {
                                            r.links?.map((Q)=>(
                                              <h5>
                                                 {Q}    {prop.sc}
                                              </h5>


                                            ))
                                        }


             </div>
                 {/*<button onClick={()=>{Delete(r.id)}}>  Delete </button>*/}
                                </div>
                    )
                    )

                }

        </div>




      );
}

export default RightBar;