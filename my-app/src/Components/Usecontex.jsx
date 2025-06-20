import React, { createContext, useState } from 'react'
export const con = createContext();


const Mycontex = ({ childern }) => {
    const [user, setUser] = useState({ name: 'john', age: '34' })
    return (
        <div>
            <con.provider value={[user, setUser]}>
                {childern}
            </con.provider>

        

        </div>
    )
}
export default Mycontex;
