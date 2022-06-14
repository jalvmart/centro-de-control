import { courses } from "./courses.Data";

export const Courses = () =>
    courses.map((x, y) =>
        <li key={y}>
            {
                <a href={x.linkCourse} target="_blank">
                    {<strong>{x.titleCourse}</strong>}
                </a>
            }
            : {x.descCourse}</li>
    );
