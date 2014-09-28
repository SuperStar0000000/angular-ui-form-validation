!function(a){a.JSOL||(a.JSOL={});var b=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;"function"!=typeof a.JSOL.parse&&(a.JSOL.parse=function(a){if("string"!=typeof a||!a)return null;if(a=a.replace(b,""),a=a.replace(/'/g,'"'),/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,":").replace(/\w*\s*\:/g,":")))return new Function("return "+a)();throw"Invalid JSOL: "+a})}(window),angular.module("services.templateRetriever",[]).factory("templateRetriever",["$http","$q",function(a,b){return{getTemplate:function(c,d){var e=b.defer();return a({url:c,method:"GET",headers:{"Content-Type":"text/html"},tracker:d||"promiseTracker"}).success(function(a){e.resolve(a)}).error(function(a,b,c,d){e.reject({data:a,status:b,headers:c,config:d})}),e.promise}}}]),angular.module("directives.invalidinputformatter.invalidInputFormatter",[]).directive("input",function(){return{require:"?ngModel",restrict:"E",link:function(a,b,c,d){var e=angular.lowercase(c.type);d&&"radio"!==e&&"checkbox"!==e&&d.$formatters.unshift(function(a){return d.$invalid&&angular.isUndefined(a)&&"string"==typeof d.$modelValue?d.$modelValue:a})}}}),angular_ui_form_validations=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n;return h=[],a=[],k={customValidationAttribute:"validationDynamicallyDefined",errorCount:0,latestElement:null,_errorMessage:"Field is invalid",_success:function(){},success:function(){return k._success&&k._success.apply(this,arguments)},errorMessage:function(){return k._errorMessage},validator:function(a,b,c,d,e,f,g){var h,i,j,l,m,n;return n=arguments,j=g[c],i=function(a){return k._errorMessage=a.errorMessage,k._success=a.success,a},l=function(a,b){var c,d;return c="validationdynamicallydefined",c+=a.identifier&&""!==a.identifier&&null!==a.identifier?a.identifier.charAt(0).toUpperCase()+a.identifier.slice(1).toLowerCase():b,d=angular.copy(a),d.identifier=c,d},m=function(a){return h=a.validator.apply(g,n),f.$setValidity(a.identifier,h),h===!0},Lazy(j).map(i).map(l).map(m).each(function(a){return a===!1?(k.errorCount++,k.latestElement=d,!1):!0}),h}},onValidationComplete=function(a,b,c,d,e,f,g,h){a?(d.addClass("ValidationLiveSuccess"),h.call(this,b,c,d,e,f,g)):d.removeClass("ValidationLiveSuccess")},i=function(a){var b=!1;return Lazy(h).each(function(c){return c.attr("templateUid")===a.attr("templateUid")?(b=!0,j=c,!1):!0}),b},e=function(a){var b,c;c=c||"value",b=a;try{b=JSOL.parse(a)[c]}catch(d){}return b||a},getValidationAttributeByPropertyName=function(a,b){var c;try{c=JSOL.parse(a)[b]}catch(d){c=null}return c},g=function(a,b){var c,d,e;c=l.defer(),e=c.promise;try{d=JSOL.parse(a).template,void 0===d||null===d||""===d?c.reject("No template url specified."):e=b.getTemplate(d)}catch(f){c.reject("Error retrieving custom error template: "+f)}return e},f=function(b){var c;return Lazy(a).each(function(a){return a.customValidationAttribute===b?(c=a.validator,!1):!0}),c},d=function(b){var c;return Lazy(a).each(function(a,d){return a.customValidationAttribute===b?(c=d,!1):!0}),c},b=function(a,b,c,o,p){return l=c,m=o,n=p,function(c,l,n,o){var p,q,r,s,t,u,v,w,x;m(function(){var m,y,z,A,B,C,D;w=e(n[a.customValidationAttribute]),A=w&&"undefined"!==w&&"false"!==w,m=function(){var b="";return/checkbox|radio/.test(l[0].type)&&(b="checkboxradioerror "),angular.element("<span data-custom-validation-priorityIndex="+d(a.customValidationAttribute)+" data-custom-validation-attribute="+a.customValidationAttribute+" data-custom-field-name="+l.attr("name")+' class="CustomValidationError '+b+a.customValidationAttribute+" "+u+'property">'+q+"</span>")},y=function(){c.$watch(function(){return k.errorCount},function(){if(0!==k.errorCount){var a=r.attr("data-custom-field-name"),b=k.latestElement.attr("name");b===a&&r.html(k.errorMessage())}})},z=function(a){var b;x=angular.element(a),x.html(""),b=function(){var a=Math.random();"inline"===r.css("display")||"block"===r.css("display")?(l.attr("templateUid",a),x.attr("templateUid",a),r.wrap(x),h.push(angular.element(r.parents()[0]))):(l.removeAttr("templateUid"),r.parent().is("."+x.attr("class"))&&r.unwrap(x))},c.$watch(function(){return r.css("display")},b),c.$on("errorMessageToggled",b)},B=function(){var b;return b="function"==typeof a.errorMessage?a.errorMessage(w):a.errorMessage},C=function(){q=B(),r=m(),l.after(r),r.hide(),"validationDynamicallyDefined"===a.customValidationAttribute&&y(),g(n[a.customValidationAttribute],b).then(function(a){z(a)}),p=getValidationAttributeByPropertyName(n[a.customValidationAttribute],"message"),null!==p&&r.html(p)},D=function(){return"validationNoSpace"===a.customValidationAttribute&&l.keyup(function(a){8===a.keyCode&&(t[u]=l.val().trimRight())}),"validationConfirmPassword"===a.customValidationAttribute?void l.add("[name=password]").on("keyup blur",function(){var a,b,c,d,e;b="confirmPassword"===this.name?angular.element(this):angular.element(this).siblings("[name=confirmPassword]"),c=b.siblings("[name=password]"),d=/dirty/.test(b.attr("class")),e=/invalid/.test(c.attr("class"))===!1,a=$("[name=password]").val()===l.val(),o.$setValidity("validationconfirmpassword",a),b.siblings(".CustomValidationError.validationConfirmPassword:first").toggle(!a)}):void("validationFieldRequired"===a.customValidationAttribute&&l.parents("form").find("label[for="+l.attr("id")+"]").addClass("requiredFieldLabel"))},v=function(b){function g(){var a,b;return a='[data-custom-field-name="'+l.attr("name")+'"]',b='.CustomValidationError[style="display: inline;"]'+a+', .CustomValidationError[style="display: block;"]'+a,i(l)?j.children(b):l.siblings(b)}function h(){var a=l.val().trimRight();return/select/.test(l[0].type)&&(a=l[0].options[l[0].selectedIndex].innerHTML),/checkbox|radio/.test(l[0].type)&&(a=l[0].checked===!0?"true":""),a}function k(){""===x?l.parents("form").find("label[for="+l.attr("id")+"]").addClass("requiredFieldLabel"):l.parents("form").find("label[for="+l.attr("id")+"]").removeClass("requiredFieldLabel")}function m(){return a.validator(b,x,w,l,t,o,c)}function p(a){return a.replace(".","\\.")}function q(){var b=".CustomValidationError."+a.customValidationAttribute+"."+p(u)+"property:first";l.siblings(b).toggle(!v)}function r(){C=f(A.attr("data-custom-validation-attribute")),B=C(b.clone(),x,n[A.attr("data-custom-validation-attribute")],l,t,o,c),D=parseInt(A.attr("data-custom-validation-priorityIndex"),10),E=D>=d(a.customValidationAttribute),(B||!B&&E&&!v)&&(A.hide(),l.siblings(".CustomValidationError."+a.customValidationAttribute+"."+p(u)+"property:first").toggle(!v))}function s(){C=f(A.attr("data-custom-validation-attribute")),B=C(b,x,e(n[A.attr("data-custom-validation-attribute")]),l,t,o),D=parseInt(A.attr("data-custom-validation-priorityIndex"),10),E=D>=d(a.customValidationAttribute),(B||!B&&E&&!v&&-1===j.children().attr("class").indexOf(a.customValidationAttribute))&&(A.hide(),l.siblings(".CustomValidationError."+a.customValidationAttribute+"."+p(u)+"property:first").toggle(!v),c.$broadcast("errorMessageToggled"))}var v,x,y,z,A,B,C,D,E,F;F=a.success||function(){},A=g(),z=A.length>0,x=h(),"validationFieldRequired"===a.customValidationAttribute&&k(),v=m(),o.$setValidity(a.customValidationAttribute.toLowerCase(),v);var G=v===!0?" passed":" failed";return y={isValid:v,validation:l.attr("id")+" "+a.customValidationAttribute+G,model:t,controller:o,element:l},z?i(l)||r():q(),i(l)&&s(),c.$broadcast("customValidationComplete",y),onValidationComplete(!(z||i(l)||!v),x,w,l,t,o,c,F),x},A===!0&&(s=n.ngModel.substring(0,n.ngModel.indexOf(".")),u=n.ngModel.substring(n.ngModel.indexOf(".")+1),t=c[s],C(),D(),o.$parsers.push(function(){return v(r)}),c.$on("runCustomValidations",function(){v(r)}))})}},c=angular.module("directives.customvalidation.customValidations",["directives.invalidinputformatter.invalidInputFormatter","services.templateRetriever"]).factory("customValidationUtil",["templateRetriever","$q","$timeout","$log",function(c,d,e,f){return{createValidationLink:function(g){return a.push(g),b(g,c,d,e,f)}}}]).directive("input",["customValidationUtil",function(a){return{require:"?ngModel",restrict:"E",link:a.createValidationLink(k)}}]).directive("select",["customValidationUtil",function(a){return{require:"?ngModel",restrict:"E",link:a.createValidationLink(k)}}]).directive("select",["customValidationUtil",function(a){return{require:"?ngModel",restrict:"E",link:a.createValidationLink({customValidationAttribute:"validationFieldRequired",errorMessage:"This is a required field",validator:function(a,b){return/\S/.test(b)}})}}]),{getValidationAttributeValue:e}}(),function(){var a=angular.module("directives.customvalidation.customValidationTypes",["directives.customvalidation.customValidations"]);getValidationAttributeValue=angular_ui_form_validations.getValidationAttributeValue,angular.forEach([{customValidationAttribute:"validationFieldRequired",errorMessage:"This is a required field",validator:function(a,b){return/\S/.test(b)}},{customValidationAttribute:"validationConfirmPassword",errorMessage:"Passwords do not match.",validator:function(a,b,c,d,e){var f=e.password||"";return f.trimRight()===d.val().trimRight()}},{customValidationAttribute:"validationEmail",errorMessage:"Please enter a valid email",validator:function(a,b){return/^.*@.*\..*[a-z]$/i.test(b)}},{customValidationAttribute:"validationNoSpace",errorMessage:"Cannot contain any spaces",validator:function(a,b){return""!==b&&/^[^\s]+$/.test(b)}},{customValidationAttribute:"validationMinLength",errorMessage:function(a){return"Minimum of "+getValidationAttributeValue(a)+" characters"},validator:function(a,b,c){return b.length>=parseInt(getValidationAttributeValue(c),10)}},{customValidationAttribute:"validationMaxLength",errorMessage:"",validator:function(a,b,c){return b.length<=parseInt(getValidationAttributeValue(c),10)?!0:(a.html("Maximum of "+getValidationAttributeValue(c)+" characters"),!1)}},{customValidationAttribute:"validationOnlyAlphabets",errorMessage:"Valid characters are: A-Z, a-z",validator:function(a,b){return/^[a-z]*$/i.test(b)}},{customValidationAttribute:"validationOneUpperCaseLetter",errorMessage:"Must contain at least one uppercase letter",validator:function(a,b){return/^(?=.*[A-Z]).+$/.test(b)}},{customValidationAttribute:"validationOneLowerCaseLetter",errorMessage:"Must contain at least one lowercase letter",validator:function(a,b){return/^(?=.*[a-z]).+$/.test(b)}},{customValidationAttribute:"validationOneNumber",errorMessage:"Must contain at least one number",validator:function(a,b){return/^(?=.*[0-9]).+$/.test(b)}},{customValidationAttribute:"validationOneAlphabet",errorMessage:"Must contain at least one alphabet",validator:function(a,b){return/^(?=.*[a-z]).+$/i.test(b)}},{customValidationAttribute:"validationNoSpecialChars",errorMessage:"Valid characters are: A-Z, a-z, 0-9",validator:function(a,b){return/^[a-z0-9_\-\s]*$/i.test(b)}},{customValidationAttribute:"validationDateBeforeToday",errorMessage:"Must be prior to today",validator:function(a,b){var c,d;return c=new Date,d=new Date(b),d.setDate(d.getDate()+1),c>d}},{customValidationAttribute:"validationDateBefore",errorMessage:function(a){return"Must be before "+getValidationAttributeValue(a)},validator:function(a,b,c){var d=new Date(b);return d.setDate(d.getDate()+1),d<new Date(c)}},{customValidationAttribute:"validationDateAfter",errorMessage:function(a){return"Must be after "+getValidationAttributeValue(a)},validator:function(a,b,c){var d=new Date(b);return d.setDate(d.getDate()+1),d.setHours(0),d>new Date(c)}}],function(b){a.directive("input",["customValidationUtil",function(a){return{require:"?ngModel",restrict:"E",link:a.createValidationLink(b)}}])})}(),angular.module("angularUiFormValidationApp",["ngCookies","ngResource","ngSanitize","ngRoute","directives.customvalidation.customValidationTypes"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("angularUiFormValidationApp").service("emailAddressAvailable",["$timeout","$q",function(a,b){return{run:function(c,d){var e=b.defer();return a(function(){"unavailableemailaddress@gmail.com"===d?e.reject():e.resolve()},1e3),e.promise}}}]).controller("MainCtrl",["$scope","emailAddressAvailable","$http",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],angular.extend(a,{user:{username:null,password:null,confirmPassword:null,email:null,firstName:null,lastName:null,state:"",isAdmin:null,birthdate:new Date,hasKids:null,save:function(){a.$broadcast("runCustomValidations"),a.$on("customValidationComplete",function(){}),a.demoForm.$valid&&alert("Congratulations, the form is valid and ready to be submitted for further processing!")}},states:["","validState","invalidState1","invalidState2"],cities:["","validCity","invalidCity1","invalidCity2"],locallyDefinedValidations:[{identifier:"noOnes",errorMessage:"Cannot contain the number one",validator:function(a,b){return/1/.test(b)!==!0}},{errorMessage:"Cannot contain the number two",validator:function(a,b){return/2/.test(b)!==!0}}]})}]);