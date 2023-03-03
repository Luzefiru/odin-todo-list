(()=>{"use strict";const t=function(){let t=0;return{createTodoItem:function(e,n,o){return{id:t++,title:e,description:n,dueDate:o}}}}(),e=function(){const t={};let e=null;return{getSelectedProject:function(){return e},selectProject:function(n){e=t[n.getName()]},addProject:function(e){t[e.getName()]=e},deleteProject:function(e){delete t[e.getName()]},getProjectList:function(){return t}}}(),n=function(){const n=function(){document.querySelector(".add-task-btn").addEventListener("click",(()=>{!function(){if(null!==document.querySelector("form"))return void console.log("ERROR: Add a Task Form already present!");const o=document.createElement("form"),d=function(){document.querySelector(".content").removeChild(o)};o.classList.add("form--add-task"),o.innerHTML='<label class="form--add-task__label" for="title">Title</label>\n      <input class="form--add-task__input" id="title" type="text" name="Task Title" placeholder="What to do?" required>\n      <label class="form--add-task__label" for="desciption">Description (optional)</label>\n      <textarea class="form--add-task__input" id="description" type="text" name="Task Description" placeholder="e.g. Coordinate with teammates via Zoom"></textarea>\n      <label class="form--add-task__label" for="dueDate">Due Date</label>\n      <input class="form--add-task__input" id="dueDate" type="date" name="Task Due Date" required>\n      <div class="form--add-task__buttons">\n        <button class="buttons__add type="submit">Add</button><button class="buttons__cancel" type="button">Cancel</button>\n      </div>',document.querySelector(".add-task-btn").before(o),document.querySelector(".buttons__cancel").addEventListener("click",(()=>{d()})),document.querySelector(".buttons__add").addEventListener("click",(o=>{o.preventDefault();const a=document.querySelector("#title").value,c=document.querySelector("#description").value;let l=new Date(document.querySelector("#dueDate").value);if(l=l.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"}),a&&"Invalid Date"!==l){const o=t.createTodoItem(a,c,l);e.getSelectedProject().addListItem(o),e.getSelectedProject().sortList(),console.log("APPENDED LIST",e.getSelectedProject().getTodo()),d(),function(){document.querySelector(".content").innerHTML='<button class="add-task-btn"><img src="../res/plus-circle-outline.svg"> Add a Task</button>',n();const t=e.getSelectedProject().getTodo();for(let e=0;e<t.length;e++){const{title:n,description:o,dueDate:d}=t[e],a=`<div class="task__title">${n}</div>\n        <button class="task__details-btn modal-open">DETAILS</button>\n        <div class="task__due-date">${d}</div>\n        <button class="task__delete-btn"></button>\n        <dialog class="task--modal hidden">\n          <button class="task--modal__exit-btn modal-close"></button>\n          <div class="task--modal__title">\n            ${n}\n          </div>\n          <div class="task--modal__description">\n           ${o}\n          </div>\n          <div class="task--modal__due-date">\n            ${d}\n          </div>\n        </dialog>`,c=document.createElement("div");c.classList.add("card--task"),c.setAttribute("index",e),c.innerHTML=a,document.querySelector(".add-task-btn").before(c),console.log(e,t[e],a);const l=document.querySelector(`[index="${e}"] .task--modal`),s=document.querySelector(`[index="${e}"] .modal-open`),i=document.querySelector(`[index="${e}"] .modal-close`);s.addEventListener("click",(()=>{l.showModal(),l.classList.toggle("hidden")})),i.addEventListener("click",(()=>{l.close(),l.classList.toggle("hidden")}))}}()}}))}()}))};return{initializeAddATaskButton:n}}(),o=function(t){let e=[];return{getTodo:function(){return e},getName:function(){return"Home"},addListItem:function(t){e.push(t)},removeListItem:function(t){e=e.filter((e=>e.id!==t))},sortList:function(){e.sort(((t,e)=>{let n=new Date(t.dueDate),o=new Date(e.dueDate);return[n,o]=[n.getTime(),o.getTime()],n<o?-1:n>o?1:0}))}}}();e.addProject(o),e.selectProject(o),n.initializeAddATaskButton()})();