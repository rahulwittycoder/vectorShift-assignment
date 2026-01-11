// frontend/src/nodes/LoggerNode.js
import React from 'react';
import { BaseNode } from './basenodes';

export const LoggerNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Console Logger"
      inputs={[{ id: 'log-in' }]}
      outputs={[]} // No outputs
    >
      <p style={{ margin: 0, fontSize: '11px' }}>
        Logs incoming data to the browser console.
      </p>
    </BaseNode>
  );
};