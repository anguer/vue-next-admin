var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,a=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,r=(e,r)=>{for(var n in r||(r={}))t.call(r,n)&&a(e,n,r[n]);if(o)for(var n of o(r))l.call(r,n)&&a(e,n,r[n]);return e},n=(e,a)=>{var r={};for(var n in e)t.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))a.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};import{r as s,o as i,c as u,F as d,f as c,d as f,t as p,w as m,g as h,P as v,h as b,i as y,j as g,b as _,G as w,k as j,m as S,l as V,v as O,X as k,n as I,p as E,e as C,q as $,s as P,u as F,x as A,y as M,z as R,A as x,B as q,C as T,D as U,E as D,H as B,I as N,J as G}from"./index.28ff485b.js";import"./vendor.44e663b8.js";var z="object"==typeof global&&global&&global.Object===Object&&global,L="object"==typeof self&&self&&self.Object===Object&&self,J=(z||L||Function("return this")()).Symbol,K=Object.prototype,Y=K.hasOwnProperty,H=K.toString,X=J?J.toStringTag:void 0;var Q=Object.prototype.toString;var W=J?J.toStringTag:void 0;function Z(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?function(e){var t=Y.call(e,X),o=e[X];try{e[X]=void 0;var l=!0}catch(r){}var a=H.call(e);return l&&(t?e[X]=o:delete e[X]),a}(e):function(e){return Q.call(e)}(e)}var ee=Array.isArray,te=J?J.prototype:void 0,oe=te?te.toString:void 0;function le(e){if("string"==typeof e)return e;if(ee(e))return function(e,t){for(var o=-1,l=null==e?0:e.length,a=Array(l);++o<l;)a[o]=t(e[o],o,e);return a}(e,le)+"";if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==Z(e)}(e))return oe?oe.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function ae(e,t,o){var l=e.length;return o=void 0===o?l:o,!t&&o>=l?e:function(e,t,o){var l=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(o=o>a?a:o)<0&&(o+=a),a=t>o?0:o-t>>>0,t>>>=0;for(var r=Array(a);++l<a;)r[l]=e[l+t];return r}(e,t,o)}var re=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function ne(e){return re.test(e)}var se="[\\ud800-\\udfff]",ie="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",ue="\\ud83c[\\udffb-\\udfff]",de="[^\\ud800-\\udfff]",ce="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",pe="(?:"+ie+"|"+ue+")"+"?",me="[\\ufe0e\\ufe0f]?"+pe+("(?:\\u200d(?:"+[de,ce,fe].join("|")+")[\\ufe0e\\ufe0f]?"+pe+")*"),he="(?:"+[de+ie+"?",ie,ce,fe,se].join("|")+")",ve=RegExp(ue+"(?="+ue+")|"+he+me,"g");function be(e){return ne(e)?function(e){return e.match(ve)||[]}(e):function(e){return e.split("")}(e)}var ye,ge,_e=(ye="toUpperCase",function(e){var t,o=ne(e=null==(t=e)?"":le(t))?be(e):void 0,l=o?o[0]:e.charAt(0),a=o?ae(o,1).join(""):e.slice(1);return l[ye]()+a}),we=new Uint8Array(16);function je(){if(!ge&&!(ge="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ge(we)}var Se=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ve(e){return"string"==typeof e&&Se.test(e)}for(var Oe=[],ke=0;ke<256;++ke)Oe.push((ke+256).toString(16).substr(1));function Ie(e,t,o){var l=(e=e||{}).random||(e.rng||je)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t){o=o||0;for(var a=0;a<16;++a)t[o+a]=l[a];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(Oe[e[t+0]]+Oe[e[t+1]]+Oe[e[t+2]]+Oe[e[t+3]]+"-"+Oe[e[t+4]]+Oe[e[t+5]]+"-"+Oe[e[t+6]]+Oe[e[t+7]]+"-"+Oe[e[t+8]]+Oe[e[t+9]]+"-"+Oe[e[t+10]]+Oe[e[t+11]]+Oe[e[t+12]]+Oe[e[t+13]]+Oe[e[t+14]]+Oe[e[t+15]]).toLowerCase();if(!Ve(o))throw TypeError("Stringified UUID is invalid");return o}(l)}function Ee(e,t){const o={};return Object.keys(e).forEach((l=>{o[l]=t(e[l],l,e)})),o}function Ce(e,t){const o={};return Object.keys(e).forEach((l=>{const a=e[l];o[t(a,l,e)]=a})),o}class $e{static fromItem(e,t){if(!t)throw new Error("no args by create item");const o={};if(o.key=t.key||e,t instanceof $e)o.value=t,o.label=Symbol.for(e);else if(t instanceof Array){const[e,l]=t;o.value=e,o.label=l}else if(t instanceof Object){const{value:e,label:l}=t;o.value=e,o.label=l}return o}static isEnum(e){return e instanceof $e||(null==e?void 0:e.value)instanceof $e}constructor(...e){const t=e.length>1?[...e]:e[0];if("object"!=typeof t||!Object.keys(t).length)throw new Error("args must be an array or object");return Object.defineProperty(this,"__rawKeys__",{writable:!1,enumerable:!1,value:Object.freeze(Object.keys(Ce(t,((e,t)=>e.key||t))))}),Object.defineProperty(this,"__rawArgs__",{writable:!1,enumerable:!1,value:Object.freeze(Ee(t,((e,t)=>$e.fromItem(t,e))))}),Object.defineProperty(this,"__valueBy__",{writable:!1,enumerable:!1,value:Object.freeze(Ce(this.flatValues,(e=>e.value)))}),new Proxy(this,{get:(e,t)=>e.__rawKeys__.includes(t)?$e.isEnum(e.__rawArgs__[t])?e.__rawArgs__[t].value:e.__rawArgs__[t]:e[t]})}get values(){return Object.values(this.__rawArgs__)}get flatValues(){return this.values.map((function e(t){return $e.isEnum(t)?t.value.values.map(e):t})).flat()}label(e){var t;return null==(t=this.__valueBy__[e])?void 0:t.label}}const Pe=new $e({DIRECTORY:[1,"目录"],MENU:[2,"菜单"],BUTTON:[3,"按钮"]});const Fe={name:"RadioButtonGroup",props:{options:{type:Array,required:!0}}},Ae=m(),Me=Ae(((e,t,o,l,a,n)=>{const m=s("el-radio-button"),h=s("el-radio-group");return i(),u(h,r(r({},e.$attrs),e.$props),{default:Ae((()=>[(i(!0),u(d,null,c(o.options,((e,t)=>(i(),u(m,{key:`__radio_key_${t}`,label:e.value},{default:Ae((()=>[f(p(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},16)}));Fe.render=Me,Fe.__scopeId="data-v-4c7ebeb8";const Re={name:"CheckBoxGroup",props:{options:{type:Array,required:!0}}},xe=m(),qe=xe(((e,t,o,l,a,n)=>{const m=s("el-checkbox"),h=s("el-checkbox-group");return i(),u(h,r(r({},e.$attrs),e.$props),{default:xe((()=>[(i(!0),u(d,null,c(o.options,((e,t)=>(i(),u(m,{key:`__checkbox_key_${t}`,label:e.value},{default:xe((()=>[f(p(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},16)}));Re.render=qe,Re.__scopeId="data-v-81b074c4";const Te={name:"Select",props:{options:{type:Array,required:!0}}},Ue=m(),De=Ue(((e,t,o,l,a,n)=>{const f=s("el-option"),p=s("el-select");return i(),u(p,r(r({},e.$attrs),e.$props),{default:Ue((()=>[(i(!0),u(d,null,c(o.options,((e,t)=>(i(),u(f,{key:`__select_key_${t}`,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:1},16)}));Te.render=De,Te.__scopeId="data-v-8716f7ba";const Be=new Map;Be.set("Input",h),Be.set("InputNumber",v),Be.set("Cascader",b),Be.set("RadioButtonGroup",Fe),Be.set("CheckBoxGroup",Re),Be.set("Select",Te);var Ne=y({name:"VnFormItem",props:{schema:{type:Object,required:!0},formProps:{type:Object,required:!0},formModel:{type:Object,required:!0},setFormModel:{type:Function,required:!0},validateField:{type:Function,required:!0}},computed:{value(){const{formModel:e,schema:t}=this.$props;return e[t.field]},getValues(){const{formModel:e,schema:t,formProps:o}=this.$props,{asyncData:l}=o;return{field:t.field,model:e,values:r(r({},l),e),schema:t}},getCompProps(){var e;const{schema:t,tableAction:o,formModel:l,formActionType:a}=this.$props,{componentProps:r={}}=t;return"function"!=typeof r?r:null!=(e=r({schema:t,tableAction:o,formModel:l,formActionType:a}))?e:{}},getShow(){const{show:e,ifShow:t}=this.schema;let o=!0,l=!0;return"boolean"==typeof e&&(o=e),"boolean"==typeof t&&(l=t),"function"==typeof e&&(o=e(r({},this.getValues))),"function"==typeof t&&(l=t(r({},this.getValues))),{isShow:o,isIfShow:l}},getRules(){const{rules:e=[],asyncRules:t,required:o,field:l}=this.schema,{isShow:a}=this.getShow;return"function"==typeof t?t(r({},this.getValues)):(Array.isArray(e)||console.error(`#${l} rules is not an array`),!e.length&&o&&e.unshift({required:a,trigger:"change"}),e)}},watch:{value:{handler(e){this.validateField([this.schema.field])}},getShow:{handler({isShow:e,isIfShow:t}){e&&t||this.setFormModel(this.schema.field,this.schema.defaultValue)}}},render(e){const{schema:t,getCompProps:o,getShow:l,getRules:a,getValues:n,formModel:i,setFormModel:u}=e,c=()=>{const{component:e,componentSlot:l,placeholder:a,changeEvent:s="change",field:c}=t,f=r(r({placeholder:a},o),{field:c,formValues:n}),p=`on${_e(s)}`,m={[p]:e=>{o[p]&&o[p](e);const t=e?e.target:null,l=t?t.value:e;u(c,l)},onInput:e=>{const t=e?e.target:null,o=t?t.value:e;u(c,o)}},h={value:i[c],modelValue:i[c]},v=r(r(r({},f),m),h),b=Be.get(e);if(!b)return console.error("no match component."),_(d,null,null);if(!l)return _(b,v,null);const y="function"==typeof l?r({},l(r({},n))):{default:()=>l};return _(b,v,"function"==typeof(g=y)||"[object Object]"===Object.prototype.toString.call(g)&&!V(g)?y:{default:()=>[y]});var g},p=()=>{const{$slots:o}=e,{slot:l}=t;return l?function(e,t="default",o){return e&&e[t]?"function"!=typeof e[t]?(console.error(`${t} is not a function!`,e[t]),null):(0,e[t])(o):null}(o,l,r({},n)):c()},m=()=>{const{field:e}=t;return{prop:e,key:e,rules:a}},{isIfShow:h,isShow:v}=l;return h&&g(_(s("el-col"),(()=>{const{baseColProps:o={}}=e.formProps,{colProps:l={}}=t;return r(r({},o),l)})(),{default:()=>[_(w,m(),{default:()=>[_(d,null,[p()])],label:()=>(()=>{const{label:e,helpMessage:o,helpComponentProps:l,subLabel:a}=t,r=a?_("span",null,[e,f(" "),_("span",{class:"text-secondary"},[a])]):e;return!o||Array.isArray(o)&&0===o.length?r:_("span",null,[r,_(j,S({placement:"top",content:o},l),{default:()=>[_("i",{class:"el-icon-warning el-icon--right"},null)]})])})()})]}),[[O,v]])}});Ne.__scopeId="data-v-2691205a";const Ge={field:void 0,label:void 0,subLabel:void 0,changeEvent:void 0,defaultValue:void 0,placeholder:void 0,slot:void 0,colProps:void 0,component:void 0,componentProps:void 0,componentSlot:void 0,helpMessage:void 0,helpComponentProps:void 0,required:!1,ifShow:void 0,show:void 0,rules:void 0,asyncRules:void 0},ze=y({name:"VnForm",components:{ElForm:k,ElFormItem:w,ElDivider:I,VnFormItem:Ne},props:{schemas:{type:Array,default:()=>[]},baseColProps:{type:Object,default:()=>({lg:12,md:24})},asyncData:{type:Object,default:()=>{}}},emits:["submit"],data:()=>({formModel:{},defaultValues:{}}),computed:{getProps(){return r({},this.$props)},getSchemas(){return[...this.schemas.map((e=>Object.assign({},Ge,e)))]},fields(){return this.getSchemas.map((e=>e.field)).filter((e=>!!e))},values:{get(){return r({},this.formModel)}}},watch:{getSchemas:{handler(e){if(null==e?void 0:e.length){const t=function(e=[]){const t={};return e.forEach((({field:e,defaultValue:o})=>{t[e]=o})),t}(e);this.formModel=t,this.defaultValues=r({},t)}},immediate:!0}},methods:{setFormModel(e,t){this.formModel[e]=t},setFieldsValue(e){this.fields.forEach((t=>{this.setFormModel(t,e[t])}))},validateField(e=[]){var t;null==(t=this.$refs.rawFormEl)||t.validateField(e)},reset(){this.fields.forEach((e=>{this.setFormModel(e,this.defaultValues[e])})),this.$nextTick((()=>{var e;null==(e=this.$refs.rawFormEl)||e.clearValidate(this.fields)}))},submit(){var e;null==(e=this.$refs.rawFormEl)||e.validate((e=>{e?(this.$emit("submit",this.values),console.log("success")):console.log("failed")}))}}}),Le=m();E("data-v-55ba39a4");const Je=f("重置"),Ke=f("提交");C();const Ye=Le(((e,t,o,l,a,n)=>{const f=s("vn-form-item"),p=s("el-divider"),m=s("el-button"),h=s("el-form-item"),v=s("el-col"),b=s("el-row"),y=s("el-form");return i(),u(y,S(r(r({},e.$attrs),e.$props),{ref:"rawFormEl",class:"vna-form",model:e.formModel,"label-position":"top"}),{default:Le((()=>[_(b,{gutter:20},{default:Le((()=>[(i(!0),u(d,null,c(e.getSchemas,(t=>(i(),u(f,{key:t.field,schema:t,"form-props":e.getProps,"form-model":e.formModel,"set-form-model":e.setFormModel,"validate-field":e.validateField},$({_:2},[c(Object.keys(e.$slots),(t=>({name:t,fn:Le((o=>[P(e.$slots,t,o,void 0,!0)]))})))]),1032,["schema","form-props","form-model","set-form-model","validate-field"])))),128)),_(v,{span:24},{default:Le((()=>[_(p),_(h,null,{default:Le((()=>[e.$slots.footer?P(e.$slots,"footer",S({key:1},{submit:e.submit,reset:e.reset}),void 0,!0):(i(),u(d,{key:0},[_(m,{onClick:e.reset},{default:Le((()=>[Je])),_:1},8,["onClick"]),_(m,{type:"primary",onClick:e.submit},{default:Le((()=>[Ke])),_:1},8,["onClick"])],64))])),_:3})])),_:1})])),_:1})])),_:1},16,["model"])}));ze.render=Ye,ze.__scopeId="data-v-55ba39a4";const He={name:"VnDialog",props:{visible:{type:Boolean,default:!1},title:{type:String,default:"标题"},width:{type:String,default:"500px"}},emits:["update:visible","open","close"],computed:{isShow:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{handleOpen(){this.$emit("open")},handleClose(){this.$emit("close")}}},Xe=m();E("data-v-6b801890");const Qe={class:"title"};C();const We=Xe(((e,t,o,l,a,r)=>{const n=s("el-dialog");return i(),u(n,{modelValue:r.isShow,"onUpdate:modelValue":t[1]||(t[1]=e=>r.isShow=e),width:o.width,center:"","append-to-body":"","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":"",onOpen:r.handleOpen,onClose:r.handleClose},{title:Xe((()=>[_("div",Qe,p(o.title),1)])),footer:Xe((()=>[P(e.$slots,"footer",{},void 0,!0)])),default:Xe((()=>[P(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue","width","onOpen","onClose"])}));He.render=We,He.__scopeId="data-v-6b801890";const Ze=[{field:"id",ifShow:!1},{field:"type",label:"菜单类型",helpMessage:"这是一个文本提示",component:"RadioButtonGroup",defaultValue:Pe.DIRECTORY.value,componentProps:{options:Pe.flatValues},colProps:{lg:24,md:24}},{field:"parentId",label:"上级目录",placeholder:"上级目录",slot:"parentId",required:!0},{field:"title",label:"菜单名称",placeholder:"菜单名称",defaultValue:"",component:"Input",required:!0},{field:"icon",label:"图标",placeholder:"图标",defaultValue:"",component:"Input",componentProps:{prefixIcon:"el-icon-menu"},required:!0},{field:"url",label:"路由地址",component:"Input",ifShow:({values:e})=>Pe.BUTTON.value!==e.type,asyncRules:({values:e})=>[{validator(t,o,l){var a,r;return o?Array.isArray(null==(a=e.data)?void 0:a.value)&&(null==(r=e.data)?void 0:r.value.find((t=>t.id!==e.id&&t.url===o)))?l(new Error("内容重复")):l():l(new Error("必填项"))},trigger:"change"}]},{field:"path",label:"组件路径",slot:"path",required:!0,ifShow:({values:e})=>Pe.MENU.value===e.type},{field:"hidden",label:"是否隐藏",component:"RadioButtonGroup",defaultValue:!1,componentProps:{options:[{label:"否",value:!1},{label:"是",value:!0}]},ifShow:({values:e})=>Pe.BUTTON.value!==e.type},{field:"orderNo",label:"排序",component:"InputNumber",componentProps:{controlsPosition:"right"},defaultValue:0,rules:[{required:!0,message:"必填项",trigger:"change"}]}];const et={components:{VnForm:ze,VnDialog:He},setup(){const e=F(null),t=F(A(M(R),[])),o=x({get:()=>t.value,set(e){if("object"!=typeof e){const o=e,l=null==t?void 0:t.value.findIndex((e=>o===e.id));null==t||t.value.splice(l,1)}else{const o=e.id||Ie(),l=null==t?void 0:t.value.findIndex((e=>o===e.id)),a=e.parentId||0;-1!==l?null==t||t.value.splice(l,1,r(r({},e),{id:o,parentId:a})):null==t||t.value.push(r(r({},e),{id:o,parentId:a}))}U(R,JSON.stringify(null==t?void 0:t.value))}}),l=x((()=>[{title:"~Root",id:0},...D(null==o?void 0:o.value.filter((t=>{var o;return t.type!==Pe.BUTTON.value&&t.type<=(null==(o=e.value)?void 0:o.values.type)})))])),a=x((()=>D(null==o?void 0:o.value))),s=F(q(B)),i=x((()=>({data:o}))),u=T(Ze),d=F(!1);return{treeData:a,catalogs:l,files:s,PRIVILEGE:Pe,handleEdit:t=>{var o,{path:l}=t,a=n(t,["path"]);console.log("#handleEdit",a,l),null==(o=null==e?void 0:e.value)||o.setFieldsValue(r(r({},a),{path:l&&l.split("/")}))},handleRemove:e=>{o.value=null==e?void 0:e.id},form:e,schemas:u,handleSubmit:e=>{var{path:t=[]}=e,l=n(e,["path"]);console.log("#handleSubmit",t,l),o.value=r(r({},l),{path:t.join("/")})},visible:d,asyncData:i}}},tt=m();E("data-v-6527da1a");const ot=f("自定义重置"),lt=f("自定义提交"),at=f("Dialog"),rt=f(" 编辑 "),nt=f(" 删除 "),st=_("div",null,"This is aDialog",-1);C();const it=tt(((e,t,o,l,a,r)=>{const n=s("el-cascader"),c=s("el-button"),f=s("vn-form"),p=s("el-col"),m=s("el-table-column"),h=s("el-link"),v=s("el-table"),b=s("el-row"),y=s("vn-dialog");return i(),u(d,null,[_(b,{gutter:20},{default:tt((()=>[_(p,{span:6},{default:tt((()=>[_(f,{ref:"form",schemas:l.schemas,"async-data":l.asyncData,onSubmit:l.handleSubmit},{parentId:tt((({model:e,field:t})=>[_(n,{modelValue:e[t],"onUpdate:modelValue":o=>e[t]=o,options:l.catalogs,props:{emitPath:!1,label:"title",value:"id",checkStrictly:!0}},null,8,["modelValue","onUpdate:modelValue","options"])])),path:tt((({model:e,field:t})=>[_(n,{modelValue:e[t],"onUpdate:modelValue":o=>e[t]=o,options:l.files,props:{emitPath:!0,label:"label",value:"label"}},null,8,["modelValue","onUpdate:modelValue","options"])])),footer:tt((({submit:e,reset:o})=>[_(c,{onClick:o},{default:tt((()=>[ot])),_:2},1032,["onClick"]),_(c,{type:"primary",onClick:e},{default:tt((()=>[lt])),_:2},1032,["onClick"]),_(c,{type:"primary",onClick:t[1]||(t[1]=e=>l.visible=!0)},{default:tt((()=>[at])),_:1})])),_:1},8,["schemas","async-data","onSubmit"])])),_:1}),_(p,{span:18},{default:tt((()=>[_(v,{data:l.treeData,"row-key":"id"},{default:tt((()=>[_(m,{label:"标题",prop:"title"}),_(m,{label:"图标",prop:"icon"}),_(m,{label:"路由地址",prop:"url"}),_(m,{label:"组件路径",prop:"path"}),_(m,{label:"是否隐藏",prop:"hidden"}),_(m,{fixed:"right",label:"操作",width:"100"},{default:tt((({row:e})=>[N('            <el-button type="text" @click="handleEdit(row)">编辑</el-button>'),N('            <el-button type="text" @click="handleRemove(row)">删除</el-button>'),_(h,{type:"primary",underline:!1,onClick:G((t=>l.handleEdit(e)),["prevent"])},{default:tt((()=>[rt])),_:2},1032,["onClick"]),_(h,{type:"danger",underline:!1,onClick:G((t=>l.handleRemove(e)),["prevent"])},{default:tt((()=>[nt])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])),_:1})])),_:1}),_(y,{modelValue:l.visible,"onUpdate:modelValue":t[2]||(t[2]=e=>l.visible=e)},{default:tt((()=>[st])),_:1},8,["modelValue"])],64)}));et.render=it,et.__scopeId="data-v-6527da1a";export default et;
