import { useQuery, gql } from '@apollo/client';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import type {TParams} from './JobPage';
import { makeStyles } from '@material-ui/core/styles';
interface JobInfo {
    Id: number,
    Date: string,
    Title: string,
    Company: string,
    Review: number,
    Experience: string,
    Citizen: boolean,
    Fulltime: string,
    City: string,
    State: string,
    Link: string,
    Type: string,
    ApplyLink: string,  
}
interface Jobs {
    Job:JobInfo[]
}

interface JobQueryInput {
    experience:string,
    job_type:string,
    date:number,
    location:string,             
}
const GET_JOB_INVENTORY = gql`
  query FindJob($experience: String!, $job_type: String!, $location:String!,$date:Int!) {
    Job(experience:$experience, job_type:$job_type, location:$location, date:$date) {
        Id
        Date
        Title
        Company
        Experience
        City
        State
        Link
        Type
        ApplyLink
    }
  }
`;

export default function JobTable(props:TParams){
    const { loading, data } = useQuery<Jobs, JobQueryInput>(
        GET_JOB_INVENTORY,
        { variables: { experience:"junior",
            job_type:props.type,
            date:30,
            location:"bayarea",  } }
      );
    return <div>
    <h3>Available Jobs</h3>
    {loading ? (
      <p>Loading ...</p>
    ) : (
        <TableContainer component={Paper}>
        <Table className="class" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Date </TableCell>
              <TableCell >Job Title</TableCell>
              <TableCell >Company</TableCell>
              <TableCell >Experience</TableCell>
              <TableCell >City</TableCell>
              <TableCell >State</TableCell>
              <TableCell >Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data?.Job??[]).map((item) => (
              <TableRow key={item.Id}>
                <TableCell component="th" scope="row">
                  {item.Date}
                </TableCell>
                <TableCell >{item.Title}</TableCell>
                <TableCell >{item.Company}</TableCell>
                <TableCell >{item.Experience}</TableCell>
                <TableCell >{item.City}</TableCell>
                <TableCell >{item.State}</TableCell>
                <TableCell >{item.ApplyLink!==""?(<a href={item.ApplyLink}>link</a>):(<a href={item.Link}>link</a>)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </div>;
}