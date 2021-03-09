import { RouteComponentProps} from "react-router-dom";
import JobTable from './JobTable';
import JobFront from './JobFront';
export type TParams = { type: string };
export default function JobPage(props:TParams){
    return (<div><JobFront /><JobTable type={props.type} /></div>);
}