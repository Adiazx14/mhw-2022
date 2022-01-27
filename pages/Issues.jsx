import { useEffect } from "react"
import IssueTable from "../components/IssueTable"
import categories from "../components/categories"
const Issues = ({issues})=> {

    useEffect(()=>{
        console.log(issues)
        /* issues.foreach(issue=>{console.log()}) */
    },[issues])
    return (

        <IssueTable issues={issues}/>
    )
}


export const getStaticProps = async()=>{
    const res = await fetch("https://services1.arcgis.com/CvuPhqcTQpZPT9qY/arcgis/rest/services/City_of_Miami_311_Service_Requests_Since_2015/FeatureServer/0/query?where=ticket_status%20%3D%20%27OPEN%27&outFields=ticket_created_date_time,ticket_id,zip_code,street_address,city,issue_Description&outSR=4326&orderByFields=ticket_created_date_time%20DESC&f=json")
    const data = await res.json()
   
    return {
        props : {
            issues: data["features"].map(a=>a["attributes"]).filter(a=>categories.includes(a["issue_Description"]))
        }
    }
}


export default Issues
