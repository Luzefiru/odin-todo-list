(()=>{"use strict";const e=function(){let e=0;return{createTodoItem:function(t,o,n){return{id:e++,title:t,description:o,dueDate:n}}}}(),t=function(){const e={};let t=null;return{getSelectedProject:function(){return t},selectProject:function(o){t=e[o.getName()]},addProject:function(t){e[t.getName()]=t},deleteProject:function(t){delete e[t.getName()]},getProjectList:function(){return e}}}();document.querySelector(".add-task-btn").addEventListener("click",(()=>{!function(){const o=document.createElement("form"),n=function(){document.querySelector(".content").removeChild(o)};o.classList.add("form--add-task"),o.innerHTML='<label class="form--add-task__label" for="title">Title</label>\n      <input class="form--add-task__input" id="title" type="text" name="Task Title" placeholder="What to do?" required>\n      <label class="form--add-task__label" for="desciption">Description (optional)</label>\n      <textarea class="form--add-task__input" id="description" type="text" name="Task Description" placeholder="e.g. Coordinate with teammates via Zoom"></textarea>\n      <label class="form--add-task__label" for="dueDate">Due Date</label>\n      <input class="form--add-task__input" id="dueDate" type="date" name="Task Due Date" required>\n      <div class="form--add-task__buttons">\n        <button class="buttons__add type="submit">Add</button><button class="buttons__cancel" type="button">Cancel</button>\n      </div>',document.querySelector(".add-task-btn").before(o),document.querySelector(".buttons__cancel").addEventListener("click",(()=>{n()})),document.querySelector(".buttons__add").addEventListener("click",(o=>{o.preventDefault();const a=document.querySelector("#title").value,c=document.querySelector("#description").value,d=document.querySelector("#dueDate").value;if(a&&d){const o=e.createTodoItem(a,c,d);t.getSelectedProject().addListItem(o),console.log("APPENDED LIST",t.getSelectedProject().getTodo()),n()}}))}()}));const o=e.createTodoItem("Eat Food","eat food in the diner",5,"please do it"),n=e.createTodoItem("Sleep","sleepy time",1,"weeee"),a=function(e){let t=[];return{getTodo:function(){return t},getName:function(){return"Home"},addListItem:function(e){t.push(e)},removeListItem:function(e){t=t.filter((t=>t.id!==e))},sortList:function(){t.sort(((e,t)=>e.dueDate.getTime()<t.dueDate.getTime()?-1:e.dueDate.getTime()>t.dueDate.getTime()?1:0))}}}();a.addListItem(o),a.addListItem(n),console.log(a.getTodo()),t.addProject(a),console.log("Project list:",t.getProjectList()),console.log("Project name",a.getName()),t.selectProject(a),console.log("Selected Project:",t.getSelectedProject())})();