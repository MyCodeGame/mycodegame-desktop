(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-224ee1b2"],{1336:function(e,t,n){},"29f1":function(e,t,n){"use strict";var i=n("1336"),a=n.n(i);a.a},cb8c:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("navbar"),n("div",{staticClass:"main-container"},[n("div",{staticClass:"dashboard-toolbar"},[n("h2",[e._v("我创建的题集")]),n("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){e.createVisible=!0}}},[e._v("新建 ")])],1),n("el-table",{attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"name",label:"题集名称"}}),n("el-table-column",{attrs:{label:"状态",prop:"onlineStatus"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.onlineStatus?n("el-tag",[e._v(" 未上线 ")]):n("el-tag",{attrs:{effect:"dark"}},[e._v("已上线 ")])]}}])}),n("el-table-column",{attrs:{label:"题集操作",prop:"action"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{on:{click:function(n){return e.$router.push("/editor/exerciseSets/"+t.row.id)}}},[e._v("前往出题")]),n("el-dropdown",{on:{command:e.command}},[n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"}},[e._v(" 更多菜单"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:{type:"updateInfo",payload:t.row}}},[e._v("修改信息 ")]),n("el-dropdown-item",{attrs:{command:{type:"publish",id:t.row.id}}},[e._v("发布")]),n("el-dropdown-item",{attrs:{command:{type:"delete",id:t.row.id}}},[e._v("删除")])],1)],1)]}}])})],1)],1),n("el-dialog",{attrs:{title:"新建题集",width:"500px",visible:e.createVisible},on:{"update:visible":function(t){e.createVisible=t}}},[n("el-form",[n("el-form-item",[n("el-input",{model:{value:e.newExerciseSetName,callback:function(t){e.newExerciseSetName=t},expression:"newExerciseSetName"}})],1),n("el-form-item",{staticStyle:{"text-align":"right"}},[n("el-button",{on:{click:e.handleCreate}},[e._v("创建")])],1)],1)],1),n("el-drawer",{attrs:{width:"500px",title:"修改信息",visible:e.updateInfoVisible},on:{"update:visible":function(t){e.updateInfoVisible=t}}},[n("el-form",{staticStyle:{padding:"20px"}},[n("el-form-item",[n("el-input",{model:{value:e.editingExerciseSetInfo.name,callback:function(t){e.$set(e.editingExerciseSetInfo,"name",t)},expression:"editingExerciseSetInfo.name"}})],1),n("el-form-item",[n("el-input",{attrs:{type:"textarea",rows:"4"},model:{value:e.editingExerciseSetInfo.description,callback:function(t){e.$set(e.editingExerciseSetInfo,"description",t)},expression:"editingExerciseSetInfo.description"}})],1),n("el-form-item",[n("el-button",{on:{handle:e.save}},[e._v(" 保存 ")])],1)],1)],1)],1)},a=[],o=n("d178"),s=n("2d56"),c={name:"ExerciseSets",components:{Navbar:o["a"]},data:function(){return{items:[],createVisible:!1,updateInfoVisible:!1,editingExerciseSetInfo:{},newExerciseSetName:""}},mounted:function(){this.fetchData()},methods:{command:function(e){switch(e.type){case"updateInfo":this.updateInfoVisible=!0,this.editingExerciseSetInfo=e.payload;case"publish":this.publish(e.id);case"delete":this.delete(e.id)}},fetchData:function(){var e=this;Object(s["e"])({all:!0}).then((function(t){e.items=t.data.results}))},save:function(){Object(s["l"])(this.$route.params.id,this.editingExerciseSetInfo).then((function(e){}))},handleCreate:function(){var e=this;Object(s["b"])({name:this.newExerciseSetName}).then((function(t){e.createVisible=!1,e.$message.success("创建成功"),e.fetchData()}))},publish:function(e){var t=this;this.$confirm("是否发布该题集,","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["h"])(e).then((function(e){t.$message({type:"success",message:"发布成功!"}),t.fetchData()}))}))},delete:function(e){var t=this;this.$confirm("是删除该题集,","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["c"])(e).then((function(e){t.$message.success("删除成功"),t.fetchData()}))}))}}},l=c,r=(n("29f1"),n("2877")),d=Object(r["a"])(l,i,a,!1,null,"4d2a4a2d",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-224ee1b2.b3190a2a.js.map