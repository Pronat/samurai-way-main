import React from 'react';
import {unFollowAC, UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";

export type UsersType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
const Users = (props: UsersType) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response)=>{
                // props.setUsers([
                //     {
                //         id: 1,
                //         photoUrl: 'https://avatarko.ru/img/kartinka/5/kot_4700.jpg',
                //         followed: false,
                //         FullName: 'Alex',
                //         status: 'He is a director',
                //         location: {city: 'Minsk', country: 'Belarus'}
                //     },
                //     {
                //         id: 2,
                //         photoUrl: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png',
                //         followed: false,
                //         FullName: 'Svetlana',
                //         status: 'He is a worker',
                //         location: {city: 'Minsk', country: 'US'}
                //     },
                //     {
                //         id: 3,
                //         photoUrl: 'https://otkrit-ka.ru/uploads/posts/2023-01/otkrit-ka.ru_smeshnye-avatarki-1.jpg',
                //         followed: false,
                //         FullName: 'Nikita',
                //         status: 'He is a programmer',
                //         location: {city: 'Minsk', country: 'Germany'}
                //     },
                //     {
                //         id: 4,
                //         photoUrl: 'https://photowords.ru/pics_min/images_3315.png',
                //         followed: true,
                //         FullName: 'Brendon',
                //         status: 'He is a crafter',
                //         location: {city: 'Minsk', country: 'Poland'}
                //     },
                //     {
                //         id: 5,
                //         photoUrl: 'https://uprostim.com/wp-content/uploads/2021/03/image047-12_gif_thumbnail.jpeg',
                //         followed: false,
                //         FullName: 'Olga',
                //         status: 'She is a d designer',
                //         location: {city: 'Minsk', country: 'France'}
                //     },
                //     {
                //         id: 6,
                //         photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/05/skachat-besplatno-prikolnuyu-avatarku.jpg',
                //         followed: true,
                //         FullName: 'Olaf',
                //         status: 'He is an engineer',
                //         location: {city: 'Minsk', country: 'Kazakhstan'}
                //     },
                // ])
                debugger
                props.setUsers()
            })


    }
    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
                   <span>
                       <div>
                           <img src={el.photoUrl} className={s.userPhoto}/>
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