import React from 'react';

export interface ClipboardListIconProps extends React.SVGProps<SVGSVGElement> {
    primaryColor?: string;
    secondaryColor?: string;
    size?: number | string;
}

export const ClipboardListIcon: React.FC<ClipboardListIconProps> = ({
    primaryColor = 'currentColor',
    secondaryColor = 'currentColor',
    size,
    width,
    height,
    ...rest
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        aria-hidden="true"
        focusable="false"
        width={size || width}
        height={size || height}
        {...rest}
    >
        <path
            className="fa-secondary"
            opacity=".4"
            fill={secondaryColor}
            d="M336 64h-80a64 64 0 0 1 64 64H64a64 64 0 0 1 64-64H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM96 424a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm0-96a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm0-96a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm224 176a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8zm0-96a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8zm0-96a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8z"
        />
        <path
            className="fa-primary"
            fill={primaryColor}
            d="M96 376a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zm0-96a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zm0-96a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zM256 64a64 64 0 0 0-128 0 64 64 0 0 0-64 64h256a64 64 0 0 0-64-64zm-64 24a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24z"
        />
    </svg>
);
