import CoreConcept from "./CoreConcepts.jsx"
import { CORE_CONCEPTS } from "../data.js";


export default function SectionCoreCon() {
    return (<section id="core-concepts">
              <ul>
                {CORE_CONCEPTS.map((a) => (
                  <CoreConcept key={a.item} {...a} />
                ))}{" "}
              </ul>
            </section>
        );
}