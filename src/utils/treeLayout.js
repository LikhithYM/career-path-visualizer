// Horizontal Tree Layout Algorithm
// Grows left → right, children are vertically centered around parent

const HORIZONTAL_SPACING = 360;
const VERTICAL_SPACING = 130;
const MIN_VERTICAL_SPACING = 110;

/**
 * Calculate positions for a new set of child nodes
 * @param {Object} parentNode - The parent React Flow node {id, position}
 * @param {Array} children - Array of data nodes from academicData
 * @param {Array} existingNodes - All existing React Flow nodes (to detect collisions)
 * @returns {Array} Array of React Flow node objects with computed positions
 */
export function calculateChildPositions(parentNode, children, existingNodes = []) {
    const n = children.length;
    if (n === 0) return [];

    const spacing = Math.max(MIN_VERTICAL_SPACING, VERTICAL_SPACING);
    const totalHeight = (n - 1) * spacing;
    const startY = parentNode.position.y - totalHeight / 2;
    const childX = parentNode.position.x + HORIZONTAL_SPACING;

    return children.map((child, i) => ({
        id: child.id,
        type: 'careerNode',
        position: {
            x: childX,
            y: startY + i * spacing,
        },
        data: {
            ...child,
            depth: (parentNode.data?.depth || 0) + 1,
        },
    }));
}

/**
 * Calculate edges from parent to children
 */
export function calculateChildEdges(parentId, children) {
    return children.map(child => ({
        id: `edge-${parentId}-${child.id}`,
        source: parentId,
        target: child.id,
        type: 'smoothstep',
        animated: false,
        style: { stroke: 'rgba(99,102,241,0.6)', strokeWidth: 2 },
    }));
}

/**
 * Compute bounding box for a set of nodes
 * @returns {{ x, y, width, height }}
 */
export function getBoundingBox(nodes, nodeWidth = 220, nodeHeight = 80) {
    if (!nodes.length) return { x: 0, y: 0, width: 0, height: 0 };

    const xs = nodes.map(n => n.position.x);
    const ys = nodes.map(n => n.position.y);

    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs) + nodeWidth;
    const maxY = Math.max(...ys) + nodeHeight;

    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
    };
}
