const cases = {

case1:{
title:"HR Query Resolution Optimization",
problem:"Problem: HR tickets taking 24–36 hours to resolve.",
solution:"Solution: Implemented structured categorization and documentation.",
impact:"Impact: Reduced resolution time to ~8–10 hours.",
workflow:["Employee Query","Ticket System","Categorization","HR Specialist","Resolution"]
},

case2:{
title:"Client Communication Workflow",
problem:"Problem: Clients faced delays in status updates.",
solution:"Solution: Introduced structured update process.",
impact:"Impact: Reduced follow-ups and improved transparency.",
workflow:["Client Request","Agent Intake","Internal Coordination","Status Updates","Resolution"]
},

case3:{
title:"Support Performance Analytics",
problem:"Problem: Lack of visibility into performance metrics.",
solution:"Solution: Built dashboard tracking ticket volumes.",
impact:"Impact: Better operational decision making.",
workflow:["Ticket Data","Dashboard","Analysis","Optimization"]
},

case4:{
title:"Remote Hiring Workflow",
problem:"Problem: Recruitment delays in distributed teams.",
solution:"Solution: Created structured hiring pipeline.",
impact:"Impact: Faster hiring cycles.",
workflow:["Candidate Source","Screening","Interview","Evaluation","Offer"]
},

case5:{
title:"Remote Team Productivity",
problem:"Problem: Coordination challenges in remote teams.",
solution:"Solution: Introduced communication framework.",
impact:"Impact: Improved response times.",
workflow:["Task Assignment","Team Communication","Tracking","Resolution"]
},

case6:{
title:"Operations Workflow Optimization",
problem:"Problem: Internal process inefficiencies.",
solution:"Solution: Standardized operational workflows.",
impact:"Impact: Improved productivity.",
workflow:["Request Intake","Task Ownership","Execution","Tracking","Completion"]
}

}



function openCase(id){

const data=cases[id]

document.getElementById("case-title").innerText=data.title
document.getElementById("case-problem").innerText=data.problem
document.getElementById("case-solution").innerText=data.solution
document.getElementById("case-impact").innerText=data.impact

const workflow=document.getElementById("workflow")
workflow.innerHTML=""

data.workflow.forEach(step=>{

const box=document.createElement("div")
box.className="box"
box.innerText=step
workflow.appendChild(box)

})

document.getElementById("case-detail").classList.remove("hidden")

}