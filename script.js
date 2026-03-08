const cases = {

case1:{
title:"HR Query Resolution",
problem:"Problem: HR tickets taking 24–36 hours to resolve.",
solution:"Solution: Introduced structured categorization and documentation.",
impact:"Impact: Reduced resolution time to 8–10 hours.",
workflow:["Employee Query","Ticket System","Categorization","HR Specialist","Resolution"]
},

case2:{
title:"Client Communication Workflow",
problem:"Problem: Clients facing update delays.",
solution:"Solution: Implemented structured update system.",
impact:"Impact: Reduced client follow-ups.",
workflow:["Client Request","Agent Intake","Internal Coordination","Status Update","Resolution"]
},

case3:{
title:"Support Performance Analytics",
problem:"Problem: No visibility into support metrics.",
solution:"Solution: Built dashboard tracking ticket trends.",
impact:"Impact: Better decision making.",
workflow:["Ticket Data","Dashboard","Analysis","Optimization"]
},

case4:{
title:"Remote Hiring Workflow",
problem:"Problem: Hiring process delays.",
solution:"Solution: Created structured recruitment pipeline.",
impact:"Impact: Faster hiring cycles.",
workflow:["Candidate Source","Screening","Interview","Evaluation","Offer"]
},

case5:{
title:"Remote Team Productivity",
problem:"Problem: Distributed team coordination issues.",
solution:"Solution: Introduced communication framework.",
impact:"Impact: Improved response times.",
workflow:["Task Assignment","Team Communication","Tracking","Resolution"]
},

case6:{
title:"Operations Workflow Optimization",
problem:"Problem: Operational delays due to unclear processes.",
solution:"Solution: Standardized workflow documentation.",
impact:"Impact: Improved operational efficiency.",
workflow:["Request Intake","Task Ownership","Execution","Tracking","Completion"]
}

}

function openCase(id){

const data = cases[id]

document.getElementById("case-title").innerText=data.title
document.getElementById("case-problem").innerText=data.problem
document.getElementById("case-solution").innerText=data.solution
document.getElementById("case-impact").innerText=data.impact

const workflowDiv=document.getElementById("workflow")
workflowDiv.innerHTML=""

data.workflow.forEach(step=>{
const box=document.createElement("div")
box.className="box"
box.innerText=step
workflowDiv.appendChild(box)
})

document.getElementById("case-detail").classList.remove("hidden")

}