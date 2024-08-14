import React from 'react';
import Table from '../Table/Table';

export default {
  title: 'Storybook Demo/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Table to display data in rows and columns'
    }
  }
}
const columns = [
  { field: 'name', headerName: 'Name',  width: 210},
  { field: 'year', headerName: 'Year', width: 210 },
  { field: 'subGrade', headerName: 'Sub-grade', width: 210 },
  { field: 'jobTitle', headerName: 'Job Title', width: 210 },

];

const rows = [
  { id: 1, name: 'Andy Ang', year: '2023', subGrade: '11', jobTitle: 'Executive - Human Resource' },
  { id: 2, name: 'Shaohang', year: '2023', subGrade: '11', jobTitle: 'Executive - Human Resource' },
];

export const Standard = {
  args: {
    tableRows: rows,
    tableColumns: columns,
  }
}