import { RoughAnnotationType } from "rough-notation/lib/model";
export default function Annotation({
    children,
    type,
    color,
}: {
    children: React.ReactNode;
    type: RoughAnnotationType;
    color?: string;
}) {
    return (
        <span
            data-annotation={true}
            data-annotation-type={type}
            data-annotation-color={color}
        >
            {children}
        </span>
    );
}
