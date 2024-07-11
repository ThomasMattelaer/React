import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept.jsx"; 

export default function CoreConcepts() {
    return(
        <section id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title}{...item}/>)}
            </ul>
        </section>
    )
}