// frontend/src/nodes/MathNode.js
import React from 'react';
import { BaseNode } from './basenodes';

export const MathNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Math Operation"
      // Define two inputs with specific vertical positioning
      inputs={[
        { id: 'num-a', style: { top: '30%' } },
        { id: 'num-b', style: { top: '70%' } }
      ]}
      outputs={[{ id: 'result' }]}
    >
      <select style={{ width: '100%' }}>
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
        <option value="div">Divide</option>
      </select>
    </BaseNode>
  );
};