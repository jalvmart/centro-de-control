import { toolsDev } from "./toolsDev.Data";

export const Tools = () =>
    toolsDev.map((x, y) =>
        <li key={y}>
            {<strong>{x.titleTool}</strong>}: {x.description}
        </li>
    );
