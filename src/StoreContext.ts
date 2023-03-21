import React from 'react';
import {store, StoreRootStateType} from "./redux/store";
import App from "./App";

export const StoreContext = React.createContext({} as StoreRootStateType )
// export const Provider = (props: any) => {
//     return (
//         <StoreContext.Provider value={store}>
//             {props.children}
//             </StoreContext.Provider>
//         )
// }

export default StoreContext