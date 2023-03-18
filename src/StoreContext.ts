import React from 'react';
import {StoreRootStateType} from "./redux/store";

const StoreContext = React.createContext({} as StoreRootStateType )

export default StoreContext