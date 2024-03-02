import React from 'react';
import 'antd/dist/antd.css';
import { Button } from "antd";

function CED_RPS(props) {

  return (
    <div>
                <div className='row'>
                {/* Left side elements of table */}
                    <div className='col-lg-6'>
                <table className="table">
                    <tbody>
                    <tr style={{ borderColor:'rgba(0,0,0,0)'}}>
                    <th style={{width:'33%'}}>Date of Examination</th>
                    <td> : </td>
                    <td>{props.ced.date}</td>
                    </tr>
                    <tr style={{ borderColor:'rgba(0,0,0,0)'}}>
                    <th>Recommendation of DSC</th>
                    <td> : </td>
                    <td>{props.ced.rodsc}</td>
                    </tr>
                    </tbody>
                </table>
                    </div>
                    
                {/* right side elements of table */}
                    <div className='col-lg-6'>
                <table className="table">
                    <tbody>
                    <tr style={{ borderColor:'rgba(0,0,0,0)'}}>
                    <th style={{width:'33%'}}>Updated On</th>
                    <td> : </td>
                    <td>{props.ced.upon}</td>
                </tr>
                <tr style={{ borderColor:'rgba(0,0,0,0)'}}>
                    <th>Updated By</th>
                    <td> : </td>
                    <td>{props.ced.upby}</td>
                </tr>
                </tbody>
                </table>
                    </div>
                
                    <div className='row'>
                    <div className='col-lg-6'>
        <table className="table">
                
        <tbody>
                <tr style={{ borderColor:'rgba(0,0,0,0)'}}>
                    <th style={{width:'33%'}}>DSC Minutes</th>
                    <td>:</td>
                    <td><Button>Download</Button></td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
                </div>
    </div>
  );
}

export default CED_RPS;