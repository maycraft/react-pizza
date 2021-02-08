import React from 'react';
import ContentLoader from "react-content-loader";

const LoaderItem = () => {
    return (
    <ContentLoader
        speed={2}
        width={260}
        height={430}
        viewBox="0 0 260 430"
        backgroundColor="#cdcbcb"
        foregroundColor="#d8d4d4"
    >
        <circle cx="118" cy="118" r="118" /> 
        <rect x="0" y="259" rx="3" ry="3" width="260" height="24" /> 
        <rect x="127" y="371" rx="25" ry="25" width="134" height="45" /> 
        <rect x="0" y="379" rx="3" ry="3" width="80" height="27" /> 
        <rect x="0" y="300" rx="3" ry="3" width="260" height="50" />
    </ContentLoader>
    )
}

export default LoaderItem;
