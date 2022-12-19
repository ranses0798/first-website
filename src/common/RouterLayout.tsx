import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveDrawer from "./ResponsiveDrawer";

export const RouterLayout: React.FC<{}> = () => {
    return(
        <>
        <ResponsiveDrawer />
        <Outlet />
        </>
    )
}