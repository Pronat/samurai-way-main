import React from "react";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";
import userPhoto from '../../assets/images/kot.jpg'

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
               <div>
                   {
                        pages.map(el=>{
                            return(
                                <span className={props.currentPage === el ? s.selectedPage : ''}
                                      onClick={(e)=>{props.onPageChanged(el)}}>{el}</span>
                                )
                        })
                    }

                </div>
                {
                    props.users.map(el => < div key={el.id}>
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
    )
}

export  default Users

