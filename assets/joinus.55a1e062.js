import{i as e,m as l,r as a,o as t,c as o,a as d,w as p,F as s,b as n}from"./vendor.bab452f5.js";const i=e({setup:()=>({name:l(""),major:l(""),graduate:l(""),mail:l(""),phone:l(""),text:l("")}),data:()=>({radio:"1"})}),u=d("div",{style:{"font-size":"40px"},id:"zhaoshengxingxi"},"招生信息",-1),m=d("hr",null,null,-1),r={style:{"text-align":"left"}},x=d("p",{style:{width:"100%",margin:"15px 5px 0px 0px"}}," 如果有意向加入本研究组，请留下您的信息",-1),f={style:{width:"100%",margin:"15px 5px 0px 0px"}},y={style:{float:"left"}},V=n(" 姓名："),h=d("span",{style:{width:"150px",float:"left"}}," ",-1),w=n("所学专业："),c={style:{width:"100%",margin:"15px 5px 0px 0px"}},g={style:{float:"left"}},b=n(" 邮箱："),z=d("span",{style:{width:"150px",float:"left"}}," ",-1),U=n("毕业院校："),_={style:{width:"100%",margin:"15px 5px 0px 0px"}},j={style:{float:"left"}},v=n(" 电话："),R=d("span",{style:{width:"150px",float:"left"}}," ",-1),k=n("报考类型："),F=d("span",{style:{"font-size":"20px"}},"硕士",-1),q=d("span",{style:{"font-size":"20px"}},"博士",-1),A={style:{width:"100%",margin:"15px 5px 0px 0px"}},B=d("span",{style:{float:"left","font-size":"20px"}}," 个人简历：",-1),C={href:"mailto:wtt97@mail.ustc.edu.cn",target:"_blank",class:"url"},D=n("点此上传"),E=d("i",{class:"el-icon-upload el-icon--right"},null,-1),G=d("div",{style:{float:"left"}},[d("span",{style:{float:"left","font-size":"20px"}}," 备注：")],-1),H=n("保存并留言");i.render=function(e,l,n,i,I,J){const K=a("el-input"),L=a("el-radio"),M=a("el-button");return t(),o(s,null,[u,m,d("div",r,[x,d("p",f,[d("span",y,[V,d(K,{size:"medium",style:{width:"150px"},modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.name=l),clearable:""},null,8,["modelValue"])]),h,w,d("span",null,[d(K,{size:"medium",style:{width:"150px"},modelValue:e.major,"onUpdate:modelValue":l[2]||(l[2]=l=>e.major=l),clearable:""},null,8,["modelValue"])])]),d("p",c,[d("span",g,[b,d(K,{size:"medium",style:{width:"150px"},modelValue:e.mail,"onUpdate:modelValue":l[3]||(l[3]=l=>e.mail=l),clearable:""},null,8,["modelValue"])]),z,U,d("span",null,[d(K,{size:"medium",style:{width:"150px"},modelValue:e.graduate,"onUpdate:modelValue":l[4]||(l[4]=l=>e.graduate=l),clearable:""},null,8,["modelValue"])])]),d("p",_,[d("span",j,[v,d(K,{size:"medium",style:{width:"150px"},modelValue:e.phone,"onUpdate:modelValue":l[5]||(l[5]=l=>e.phone=l),clearable:""},null,8,["modelValue"])]),R,k,d("span",null,[d(L,{modelValue:e.radio,"onUpdate:modelValue":l[6]||(l[6]=l=>e.radio=l),label:"1",style:{}},{default:p((()=>[F])),_:1},8,["modelValue"]),d(L,{modelValue:e.radio,"onUpdate:modelValue":l[7]||(l[7]=l=>e.radio=l),label:"2"},{default:p((()=>[q])),_:1},8,["modelValue"])])]),d("p",A,[B,d("a",C,[d(M,{type:"primary"},{default:p((()=>[D,E])),_:1})])]),G,d(K,{style:{float:"left"},type:"textarea",autosize:{minRows:10,maxRows:40},placeholder:"",modelValue:e.text,"onUpdate:modelValue":l[8]||(l[8]=l=>e.text=l)},null,8,["modelValue"]),d(M,{type:"primary",plain:""},{default:p((()=>[H])),_:1})])],64)};export default i;
