import { useCallback } from 'react';
import { useReactFlow } from 'reactflow';

/**
 * Smart zoom hook that adjusts viewport based on number of expanded children
 */
export function useSmartZoom() {
    const { fitView } = useReactFlow();

    const zoomToNodes = useCallback((nodeIds, childCount) => {
        let padding, minZoom, maxZoom;

        if (childCount <= 3) {
            // Zoom in tightly
            padding = 0.25;
            minZoom = 0.6;
            maxZoom = 1.5;
        } else if (childCount <= 6) {
            // Normal zoom
            padding = 0.2;
            minZoom = 0.4;
            maxZoom = 1.2;
        } else {
            // Zoom out to fit all
            padding = 0.15;
            minZoom = 0.3;
            maxZoom = 1.0;
        }

        setTimeout(() => {
            fitView({
                nodes: nodeIds ? nodeIds.map(id => ({ id })) : undefined,
                padding,
                duration: 750,
                minZoom,
                maxZoom,
            });
        }, 50);
    }, [fitView]);

    return { zoomToNodes };
}
