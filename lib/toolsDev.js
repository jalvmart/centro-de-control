import { toolsDev } from "../components/data/toolsDev.Data";

export function Tools() {
    return toolsDev.map((x, y) => <li key={y}>
        {<strong>{x.titleTool}</strong>}: {x.description}
    </li>
    );
}
