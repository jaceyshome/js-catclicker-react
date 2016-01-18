this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["cat-list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <li>"
    + this.escapeExpression(((helper = (helper = helpers.nickName || (depth0 != null ? depth0.nickName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"nickName","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"b-cat-list\">\n    <ul class=\"b-cat-list-container\">\n";
  stack1 = ((helper = (helper = helpers.cats || (depth0 != null ? depth0.cats : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"cats","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.cats) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </ul>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["cat-list-item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"b-cat-list-item\">\n    <img class=\"b-cat-list-item__image\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.cat : depth0)) != null ? stack1.avator : stack1), depth0))
    + "\" alt=\"\" />\n    <p class=\"b-cat-list__name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.cat : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["cat-panel"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"b-cat-panel\">\n    <div class=\"b-cat-panel__inner-container\">\n        <img class=\"b-cat-panel__image\"/>\n        <input type=\"text\" class=\"b-cat-panel__input\" />\n        <a class=\"b-cat-panel__button-submit\">Submit</a>\n    </div>\n</div>";
},"useData":true});