import Menu from "./menu/index"
import React from "react"
import { UserIsAuth } from "./auth"
import ContentArea from './ContentArea/index'

function IsAuth() {
    
    return (
        <div style={{
            display: "flex",
            gap: "50px"
        }}>
            <div>
            <UserIsAuth/>
            <Menu />
            </div>
            <ContentArea />
        </div>
    )
}

export default IsAuth