import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionMap } from '../utils';

export default function Browse() {
    const { seasons } = useContent('seasons');
    const { matches } = useContent('matches');
    const slides = selectionMap({ seasons, matches });
    
    return <BrowseContainer slides={slides} />;
}
