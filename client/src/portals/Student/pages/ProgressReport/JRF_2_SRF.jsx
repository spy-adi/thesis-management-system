import React from 'react';
import 'antd/dist/antd.css';
import { Button, Divider } from "antd";

function JRF_2_SRF(props) {

  return (
    <div>
    <h5 style={{textAlign:'center', color:'#750a0a'}}>The Student has been Converted from JRF to SRF with following details</h5>
    <Divider dashed='true' style={{borderColor: 'rgba(0,0,0,.3)'}}/>
    <div className='row'>
                {/* Left side elements of table */}
                    <div className='col-lg-6'>
                <table className="table">
                    <tbody>
                    <tr style={{ borderColor:'rgba(0,0,0,0)'}}>
                    <th style={{width:'33%'}}>Date of Conversion</th>
                    <td> : </td>
                    <td>{props.j2s.date}</td>
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
                    <td>{props.j2s.upon}</td>
                </tr>
                <tr style={{ borderColor:'rgba(0,0,0,0)'}}>
                    <th>Updated By</th>
                    <td> : </td>
                    <td>{props.j2s.upby}</td>
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

export default JRF_2_SRF;