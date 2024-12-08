import React, { useState } from 'react';
import './Table.css';

const TableHeader = ({ columns, onSort, sortConfig }) => {
    const handleSort = (column) => {
        const isAsc = sortConfig.key === column && sortConfig.direction === 'asc';
        onSort({ key: column, direction: isAsc ? 'desc' : 'asc' });
    };

    return (
        <thead>
        <tr>
            {columns.map((column) => (
                <th key={column} onClick={() => handleSort(column)}>
                    {column} {sortConfig.key === column ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                </th>
            ))}
        </tr>
        </thead>
    );
};

const TableBody = ({ data, columns }) => (
    <tbody>
    {data.map((row, index) => (
        <tr key={index}>
            {columns.map((column) => (
                <td key={column}>{row[column]}</td>
            ))}
        </tr>
    ))}
    </tbody>
);

const Table = ({ data, columns }) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const sortedData = React.useMemo(() => {
        if (!sortConfig.key) return data;

        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);

    return (
        <table>
            <TableHeader columns={columns} onSort={setSortConfig} sortConfig={sortConfig} />
            <TableBody data={sortedData} columns={columns} />
        </table>
    );
};

export default Table;
