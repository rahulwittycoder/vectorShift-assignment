// frontend/src/nodes/DateNode.js
import React from 'react';
import { BaseNode } from './basenodes';

export const DateNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Current Date"
      inputs={[]} // No inputs
      outputs={[{ id: 'date-out' }]}
    >
      <div style={{ fontSize: '12px', color: '#555' }}>
        Output: {new Date().toLocaleDateString()}
      </div>
    </BaseNode>
  );
};