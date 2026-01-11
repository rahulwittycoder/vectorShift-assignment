// frontend/src/nodes/ColorPickerNode.js
import React, { useState } from 'react';
import { BaseNode } from './basenodes';

export const ColorPickerNode = ({ id, data }) => {
  const [color, setColor] = useState('#ff0072');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Color Picker"
      inputs={[]}
      outputs={[{ id: 'color-value' }]}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
        />
        <span style={{ fontSize: '12px' }}>{color}</span>
      </div>
    </BaseNode>
  );
};