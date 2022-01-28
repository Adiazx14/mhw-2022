import Link from "next/link"

const IssueRow = ({issue})=> {
    const date = new Date(issue["ticket_created_date_time"])
    return (
        <Link passHref={true} href={`/Issues/${issue["ticket_id"]}`}> 
        <tr>
            <td>{issue["issue_Description"]}</td>
            <td>{date.toDateString()}</td>
            <td>{issue["zip_code"]}</td>
        </tr>
        </Link>
    )
}

export default IssueRow