import { CSSProperties } from 'react';

// Thanks Build UI Recipes!
export default function GradientBorderCard({ children, className = 'p-8' }) {
	return <div className={`w-full border ${className}`}>{children}</div>;
}
