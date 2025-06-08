import React from "react";
import { users } from "./UserData";
import UserSingle from "./UserSingle";
// import "./singleuer.css"
const Users=()=>{
    return(
        <div className="user-list">
            {users.users.map((u,index)=>{
                return(
                    <div key={index}>
                        <UserSingle singleU={u}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;


