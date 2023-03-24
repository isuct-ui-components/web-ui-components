declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.jpg' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.module.scss';
