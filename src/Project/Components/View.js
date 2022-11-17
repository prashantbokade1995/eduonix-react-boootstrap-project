import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({inputData,deletedata}) => {
    
    return inputData.map(Storedata=>(
        
        <tr key={Storedata.phone}>
            <td>{Storedata.phone}</td>
            <td>{Storedata.firstName}</td>
            <td>{Storedata.lastaName}</td>
            <td className='delete-btn' onClick={()=>deletedata(Storedata.phone)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
