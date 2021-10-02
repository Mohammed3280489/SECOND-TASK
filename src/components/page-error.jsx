import React from 'react';
import 'antd/dist/antd.css';
import { Result } from 'antd';
const Error = (props) => {
   
    return <>
         <Result
    status="500"
    title="500"
    subTitle={props.message}
 
   />
     </>
}

export default Error;