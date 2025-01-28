import { annotate, annotationGroup } from "rough-notation";
import { RoughAnnotationType, RoughAnnotation } from "rough-notation/lib/model";
import { useGSAP } from "@gsap/react";

export default function Provider({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        const annotations = document.querySelectorAll(
            '[data-annotation="true"]',
        );
        // console.log(a);
        let annotationsArray: RoughAnnotation[] = [];
        Array.from(annotations).map((elem) => {
            const anim = annotate(elem as HTMLElement, {
                type: elem.getAttribute(
                    "data-annotation-type",
                ) as RoughAnnotationType,
                color: elem.getAttribute("data-annotation-color"),
            });
            annotationsArray.push(anim);
        });
        const ag = annotationGroup(annotationsArray);
        ag.show();
    });

    return children;
}
