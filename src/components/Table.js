import React from 'react';
import '../App.css';

function Table( {columns, data}) {
    return (
        <table class="style__table">
            <thead>
                <tr>
                {columns.map((column, index) => (<th key={index}>{column}</th>))}
                <th>Acciones</th> {/* Columna para las acciones */}
                </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (<td key={colIndex}>{row[column]}</td>))}

                    <td>
                            <a href="#"><span class="material-symbols-outlined view">visibility</span>
                            </a>
                            <a href="#"><span class="material-symbols-outlined edit">edit</span>
                            </a>
                            <a href="#"><span class="material-symbols-outlined delet">delete</span>
                            </a>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
