import React from 'react';
import {UserType} from "../../redux/usersReducer";

export type UsersType = {
    users: UserType[]
}
const Users = (props: UsersType) => {
    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
                   <span>
                       <div>
                           <img/>
                       </div>
                       <div>
                           <button>follow</button>
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