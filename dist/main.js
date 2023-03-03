(()=>{"use strict";const e=function(){let e=0;return{createTodoItem:function(t,o,n){return{id:e++,title:t,description:o,dueDate:n}}}}();function t(e){let t=[];return{getTodo:function(){return t},getName:function(){return e},addListItem:function(e){t.push(e)},removeListItem:function(e){t=t.filter((t=>t.id!==e))},sortList:function(){t.sort(((e,t)=>{let o=new Date(e.dueDate),n=new Date(t.dueDate);return[o,n]=[o.getTime(),n.getTime()],o<n?-1:o>n?1:0}))}}}const o=function(){const e={};let t=null;return{getSelectedProject:function(){return t},selectProject:function(o){t=e[o.getName()]},addProject:function(t){e[t.getName()]=t},deleteProject:function(t){delete e[t.getName()]},getProjectList:function(){return e}}}(),n=function(){document.querySelector(".add-task-btn").addEventListener("click",(()=>{!function(){const t=document.createElement("form"),n=function(){document.querySelector(".content").removeChild(t)};t.classList.add("form--add-task"),t.innerHTML='<label class="form--add-task__label" for="title">Title</label>\n      <input class="form--add-task__input" id="title" type="text" name="Task Title" placeholder="What to do?" required>\n      <label class="form--add-task__label" for="desciption">Description (optional)</label>\n      <textarea class="form--add-task__input" id="description" type="text" name="Task Description" placeholder="e.g. Coordinate with teammates via Zoom"></textarea>\n      <label class="form--add-task__label" for="dueDate">Due Date</label>\n      <input class="form--add-task__input" id="dueDate" type="date" name="Task Due Date" required>\n      <div class="form--add-task__buttons">\n        <button class="buttons__add type="submit">Add</button><button class="buttons__cancel" type="button">Cancel</button>\n      </div>',document.querySelector(".add-task-btn").before(t),document.querySelector(".buttons__cancel").addEventListener("click",(()=>{n()})),document.querySelector(".buttons__add").addEventListener("click",(t=>{t.preventDefault();const c=document.querySelector("#title").value,r=document.querySelector("#description").value,a=document.querySelector("#dueDate").value;if(c&&a){const t=e.createTodoItem(c,r,a);o.getSelectedProject().addListItem(t),o.getSelectedProject().sortList(),console.log("APPENDED LIST",o.getSelectedProject().getTodo()),n()}}))}()}))},c=t("Home");o.addProject(c),o.selectProject(c),console.log("Selected Project:",o.getSelectedProject());const r=t("Work");o.addProject(r),o.selectProject(r),console.log("Project List",o.getProjectList()),o.deleteProject(c),console.log("Project List",o.getProjectList()),n()})();