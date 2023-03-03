(()=>{"use strict";const e=function(){let e=0;return{createTodoItem:function(t,n,o){return{id:e++,title:t,description:n,dueDate:o}}}}(),t=function(){const e={};let t=null;return{getSelectedProject:function(){return t},selectProject:function(n){t=e[n.getName()]},addProject:function(t){e[t.getName()]=t},deleteProject:function(t){delete e[t.getName()]},getProjectList:function(){return e}}}(),n=function(){document.querySelector(".add-task-btn").addEventListener("click",(()=>{!function(){const n=document.createElement("form"),o=function(){document.querySelector(".content").removeChild(n)};n.classList.add("form--add-task"),n.innerHTML='<label class="form--add-task__label" for="title">Title</label>\n      <input class="form--add-task__input" id="title" type="text" name="Task Title" placeholder="What to do?" required>\n      <label class="form--add-task__label" for="desciption">Description (optional)</label>\n      <textarea class="form--add-task__input" id="description" type="text" name="Task Description" placeholder="e.g. Coordinate with teammates via Zoom"></textarea>\n      <label class="form--add-task__label" for="dueDate">Due Date</label>\n      <input class="form--add-task__input" id="dueDate" type="date" name="Task Due Date" required>\n      <div class="form--add-task__buttons">\n        <button class="buttons__add type="submit">Add</button><button class="buttons__cancel" type="button">Cancel</button>\n      </div>',document.querySelector(".add-task-btn").before(n),document.querySelector(".buttons__cancel").addEventListener("click",(()=>{o()})),document.querySelector(".buttons__add").addEventListener("click",(n=>{n.preventDefault();const c=document.querySelector("#title").value,a=document.querySelector("#description").value,d=document.querySelector("#dueDate").value;if(c&&d){const n=e.createTodoItem(c,a,d);t.getSelectedProject().addListItem(n),t.getSelectedProject().sortList(),console.log("APPENDED LIST",t.getSelectedProject().getTodo()),o()}}))}()}))},o=function(e){let t=[];return{getTodo:function(){return t},getName:function(){return"Home"},addListItem:function(e){t.push(e)},removeListItem:function(e){t=t.filter((t=>t.id!==e))},sortList:function(){t.sort(((e,t)=>{let n=new Date(e.dueDate),o=new Date(t.dueDate);return[n,o]=[n.getTime(),o.getTime()],n<o?-1:n>o?1:0}))}}}();t.addProject(o),t.selectProject(o),console.log("Selected Project:",t.getSelectedProject()),n()})();