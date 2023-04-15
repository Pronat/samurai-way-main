import React from 'react';
import {setCurrentPageAC, unFollowAC, UserType} from "../../redux/usersReducer";

import axios from "axios";
import userPhoto from '../../assets/images/kot.jpg'
import Users from "./Users";


export type UsersAPIComponentPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number)=>void
    setTotalUsersCount: (totalCount: number)=>void
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.setUsers(response.data.items)
            })
    }

    render () {

        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        // let pages = []
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }

        return (
            <Users />
        // <div>
        //     <div>
        //         {
        //             pages.map(el=>{
        //                 return(
        //                     <span className={this.props.currentPage === el ? s.selectedPage : ''}
        //                           onClick={(e)=>{this.onPageChanged(el)}}>{el}</span>
        //                     )
        //             })
        //         }
        //
        //     </div>
        //     {
        //         this.props.users.map(el => < div key={el.id}>
        //            <span>
        //                <div>
        //                    <img src={el.photos.small != null
        //                        ? el.photos.small:userPhoto}
        //                         className={s.userPhoto}/>
        //                </div>
        //                <div>
        //                    {el.followed ? <button onClick={() => {
        //                        this.props.unFollow(el.id)
        //                    }}>Unfollow</button> : <button onClick={() => {
        //                        this.props.follow(el.id)
        //                    }}>Follow</button>}
        //
        //                </div>
        //            </span>
        //             <span>
        //                 <span>
        //                    <div>
        //                         {el.name}
        //                     </div>
        //                    <div>
        //                         {el.status}
        //                     </div>
        //
        //                </span>
        //            </span>
        //         </div>)
        //     }
        // </div>
    );
    }
}
export default UsersAPIComponent