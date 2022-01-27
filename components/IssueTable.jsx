import { useEffect, useState } from "react"
import categories from "./categories"
import IssueRow from "./IssueRow"

const IssueTable = ({issues})=> {

    const [activeIssues, setActiveIssues] = useState(issues)
    const [categoryFilter, setCategoryFilter] = useState("Category")
    const [zipcodeFilter, setZipcodeFilter] = useState("")
    const [descOrder, setDescOrder] = useState(true)

    /* Pagination */
    const [activePage, setActivePage] = useState(0)
    const perPage = 10
    const [pagesArr, setPagesArr] = useState([])
    

    useEffect(()=>{
        setActiveIssues(issues.filter(a=>categoryFilter=="Category"||categoryFilter==""||a["issue_Description"]==categoryFilter).filter(a=>a["zip_code"].includes(zipcodeFilter)).sort((a,b)=>descOrder?b["ticket_created_date_time"]-a["ticket_created_date_time"]:a["ticket_created_date_time"]-b["ticket_created_date_time"]))
       

    },[categoryFilter, zipcodeFilter, descOrder])
    
    useEffect(()=>{
        const newArr = []
        for (let i=0; i<activeIssues.length;i+=perPage)
        {
            
            newArr.push({"index":i/perPage, "isActive":i/perPage===activePage})
        }
        setPagesArr(newArr)
        setActivePage(0)

    }, [activeIssues])

return (
     <div id="IssueTable">
         <div className="table-header">
            <select value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value)} className="filterer">
                
                <option value="Category" hidden={true}
                disabled={true}>Category</option>
                <option value="">All</option>
                {categories.map(issue=>{return <option key={issue} value={issue}>{issue}</option>})}
            </select>
            <input onChange={e=>setZipcodeFilter(e.target.value)} value={zipcodeFilter} placeholder="Zipcode" className="filterer"></input>
            </div>

    <table>
     
       <thead>
        <tr>
            <th>Category</th>
            <th onClick={()=>{setDescOrder(!descOrder)}}>Date ^</th>
            <th>Zipcode</th>
        </tr>
        </thead>
        <tbody>
            {activeIssues.slice(activePage*perPage,activePage*perPage+perPage).map(issue=><IssueRow issue={issue} key={issue["ticket_id"]}/>)}
        </tbody>
       
    </table>
    
           <div className="table-footer">
               <p onClick={()=>{activePage>0?setActivePage(activePage-1):setActivePage(activeIssues.length/10-1)}}>&lt;</p>
            {pagesArr.slice(0,3).map(item=><p onClick={()=>{setActivePage(item.index)}}  key={item.index}>{item.index+1}</p>)}
            <p onClick={()=>{activePage<activeIssues.length/10-1?setActivePage(activePage+1):setActivePage(0)}}>&gt;</p>
            </div>
        
     </div>
    
)
}

export default IssueTable