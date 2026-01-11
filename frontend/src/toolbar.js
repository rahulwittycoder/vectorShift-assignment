// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    const nodes = [
        { type: 'customInput', label: 'Input' },
        { type: 'llm', label: 'LLM' },
        { type: 'customOutput', label: 'Output' },
        { type: 'text', label: 'Text' },
        { type: 'log', label: 'Log' },
        { type: 'colorPicker', label: 'Color Picker' },
        { type: 'date', label: 'Date Input' },
        { type: 'math', label: 'Math' },
        { type: 'switch', label: 'Switch' }
    ];

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {nodes.map(node => (
                    <DraggableNode key={node.type} type={node.type} label={node.label} />
                ))}
            </div>
        </div>
    );
};
