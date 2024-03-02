import React from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn = () => {
  const data = [
    {
      department: 'AGL',
      value: 5
    },
    {
      department: 'AGP',
      value: 10,
    },
    {
      department: 'M&C',
      value: 8,
    },
    {
      department: 'EP',
      value: 15,
    },
    {
      department: 'CHE',
      value: 15,
    },
  ];
  const config = {
    data,
    xField: 'department',
    yField: 'value',
    yAxis: {
        title:{
            text:"No of Thesis Submitted"
        },
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };
  return <Column {...config} width={400} height={400}/>;
};
export default DemoColumn;