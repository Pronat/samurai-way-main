import React from 'react';
import {unFollowAC, UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/kot.jpg'


export type UsersPropsType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response)=>{
                    props.setUsers(response.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(el => <div key={el.id}>
                   <span>
                       <div>
                           <img src={el.photos.small != null
                               ? el.photos.small:userPhoto}
                                className={s.userPhoto}/>
                       </div>
                       <div>
                           {el.followed ? <button onClick={() => {
                               props.unFollow(el.id)
                           }}>Unfollow</button> : <button onClick={() => {
                               props.follow(el.id)
                           }}>Follow</button>}

                       </div>
                   </span>
                    <span>
                        <span>
                           <div>
                                {el.name}
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