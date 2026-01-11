// frontend/src/nodes/SwitchNode.js
import React from 'react';
import { BaseNode } from './basenodes';

export const SwitchNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Switch"
      inputs={[{ id: 'input' }]}
      // Two outputs: one for True, one for False
      outputs={[
        { id: 'true-out', style: { top: '30%' } },
        { id: 'false-out', style: { top: '70%' } }
      ]}
    >
      <div style={{ textAlign: 'center', fontSize: '12px' }}>
        <span style={{ display: 'block', marginBottom: '10px' }}>True ➜</span>
        <span style={{ display: 'block' }}>False ➜</span>
      </div>
    </BaseNode>
  );
};