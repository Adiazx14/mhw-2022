const IssueRow = ({issue})=> {
    const date = new Date(issue["ticket_created_date_time"])
    return (
        <tr>
            <td>{issue["issue_Description"]}</td>
            <td>{date.toDateString()}</td>
            <td>{issue["zip_code"]}</td>
        </tr>
    )
}

export default IssueRow