import { useEffect } from "react/cjs/react.development"
import categories from "../../components/categories"
const Issue = ({issue})=> {

    useEffect(()=>{console.log(issue)},[])
    return (
        <div className="issue">
            <h2>issue id: {issue["ticket_id"]}</h2>
            <h2>category: {issue["issue_Description"]}</h2>
            <h2>adress: {issue["street_address"]}</h2>
            <h2>zipcode: {issue["zip_code"]}</h2>
            <h2>issue created at: {Date(issue["ticket_created_date_time"])}</h2>
        </div>
    )
}

export const getServerSideProps = async(context)=> {
    const res = await fetch("https://services1.arcgis.com/CvuPhqcTQpZPT9qY/arcgis/rest/services/City_of_Miami_311_Service_Requests_Since_2015/FeatureServer/0/query?where=ticket_status%20%3D%20%27OPEN%27&outFields=ticket_created_date_time,ticket_id,zip_code,street_address,city,issue_Description&outSR=4326&orderByFields=ticket_created_date_time%20DESC&f=json")
    const data = await res.json()
    const issues= data["features"].map(a=>a["attributes"]).filter(a=>categories.includes(a["issue_Description"]))

    return {
        props : {
            issue: issues.filter(a=>a["ticket_id"]==context.params.id)[0]
        }
    }
}

export default Issue