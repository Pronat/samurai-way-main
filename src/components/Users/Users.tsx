import React from 'react';
import {unFollowAC, UserType} from "../../redux/usersReducer";
import s from './Users.module.css'

export type UsersType = {
    users: UserType[]
    setUsers: (users: UserType[])=>void
    follow: (userId: number)=>void
    unFollow: (userId: number)=>void
}
const Users = (props: UsersType) => {
    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
                   <span>
                       <div>
                           <img src={el.photoUrl} className={s.userPhoto}/>
                       </div>
                       <div>
                           {el.followed ? <button onClick={()=>{props.unFollow(el.id)}}>Unfollow</button> : <button onClick={ ()=>{props.follow(el.id)} }>Follow</button>}

                       </div>
                   </span>
                    <span>
                       <span>
                           <div>
                                {el.FullName}
                            </div>
                           <div>
                                {el.status}
                            </div>
                       </span>
                        <span>
                           <div>
                                {el.FullName}
                            </div>
                           <div>
                                {el.status}
                            </div>
                       </span>

                   </span>
                </div>)
            }
        </div>
    );
};

export default Users