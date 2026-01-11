// frontend/src/nodes/BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow'; // Assuming React Flow is used based on "Handles"

export const BaseNode = ({ id, data, title, inputs = [], outputs = [], children }) => {
  return (
    <div style={{ 
      padding: '10px', 
      border: '1px solid #777', 
      borderRadius: '5px', 
      background: '#fff',
      minWidth: '150px' 
    }}>
      {/* Title Area */}
      <div style={{ fontWeight: 'bold', marginBottom: '10px', borderBottom: '1px solid #eee' }}>
        {title}
      </div>

      {/* Render Input Handles (Targets) */}
      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={input.style || { top: input.top }}
        />
      ))}

      {/* Specific Node Content */}
      <div className="node-content">
        {children}
      </div>

      {/* Render Output Handles (Sources) */}
      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={output.style || { top: output.top }}
        />
      ))}
    </div>
  );
};