(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a.n(o),i=(a(15),a(6)),s=a(1),u=a(2),l=a(4),d=a(3),m=a(5),p=(a(16),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"cart"},"Cart"," ",n.a.createElement("sup",null,n.a.createElement("strong",null,this.props.cart)))}}]),t}(r.Component)),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.onAddToCart,r=t.isAddedToCart;return n.a.createElement("td",{className:"tdProduct"},n.a.createElement("div",null,t.name),n.a.createElement("div",{className:"price"},n.a.createElement("strong",null,t.price)),n.a.createElement("input",{type:"button",className:"addBtn "+(r?"btnDisabled":"btnEnabled"),name:"add",disabled:!!r,value:r?"Added to Cart":"Add to Cart",onClick:function(){return a(t.id)}}))}}]),t}(r.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.onAddToCart,r=[],o=[],c=0,i=0;return t.forEach(function(e,s){o.push(n.a.createElement(f,{key:s,product:e,onAddToCart:a})),3!==++c&&s!==t.length-1||(r.push(n.a.createElement("tr",{key:i++},o)),o=[],c=0)}),n.a.createElement("div",{className:"productGrid"},n.a.createElement("table",{className:"productTbl"},n.a.createElement("tbody",null,r)))}}]),t}(r.PureComponent),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).buildFilterValues=function(e){return e.map(function(e,t){return n.a.createElement("option",{key:t,value:t},e)})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"filterGrid"},n.a.createElement("div",null,n.a.createElement("span",null,"Size by: "),n.a.createElement("select",{id:"size",defaultValue:"All",onChange:this.props.onSizeBy},this.buildFilterValues(this.props.sizeValues)),"\xa0\xa0",n.a.createElement("span",null,"Sort by: "),n.a.createElement("select",{id:"sortBy",defaultValue:"Featured",onChange:this.props.onSortBy},this.buildFilterValues(this.props.sortValues))))}}]),t}(r.PureComponent),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={maxVal:10,qtyArr:[]},a.buildQuantityValues=function(){for(var e=a.state,t=e.maxVal,r=e.qtyArr,o=1;o<=t;o++)r.push(n.a.createElement("option",{key:o,value:o},o));return r},a.calTotalPrice=function(e){if(e.length>0)return e.reduce(function(e,t){return e+parseFloat(t.subTotal.slice(1))},0)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.buildQuantityValues()}},{key:"render",value:function(){var e,t=this,a=this.props,r=a.cartProducts,o=a.onDelete,c=a.onQtyChange,i=this.calTotalPrice(r);return r.length,i>0?(e="$"+i.toFixed(2),e=n.a.createElement("div",{className:"totalPrice"},e)):e="",n.a.createElement("div",{className:"cartGrid "+(0==r.length?"borderNone":"border")},n.a.createElement("ol",null,r.map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("div",{className:"prodDetails"},n.a.createElement("span",{className:"prodName"},e.name),n.a.createElement("div",{className:"qtyDetails"},n.a.createElement("span",{className:"qty"},"Qty: "),n.a.createElement("select",{id:"qty",name:"quantity",onChange:function(t){return c(e.id,t)}},t.state.qtyArr))),n.a.createElement("div",{className:"prodPrice"},e.subTotal),n.a.createElement("button",{onClick:function(){return o(e.id)}},"x"))})),e)}}]),t}(r.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={products:E,category:"Women",sizeBy:"All",sizeValues:g,sortBy:0,sortValues:P,cart:0,cartProducts:[]},a.sizeFilteringProductsArr=function(e){var t=a.state.sortBy,r=[];r="All"===e?E:E.filter(function(t){return t.size===e}),a.sortProductsArr(t,r,e)},a.sizeByFilter=function(e){a.sizeFilteringProductsArr(a.state.sizeValues[e.target.value])},a.sortProductsArr=function(e,t,r){null==t&&(t=a.state.products);var n=[].concat(t).sort(function(t,a){switch(e){case 0:return a.featured-t.featured;case 1:return parseFloat(t.price.slice(1))-parseFloat(a.price.slice(1));case 2:return parseFloat(a.price.slice(1))-parseFloat(t.price.slice(1));case"default":return t.id-a.id}});a.setState({products:n,sortBy:e,sizeBy:r})},a.componentWillMount=function(){console.log("mounting.."),this.sortProductsArr(this.state.sortBy)},a.componentWillUpdate=function(){console.log("updating..")},a.componentDidUpdate=function(){console.log("did update")},a.sortByFilter=function(e){a.sortProductsArr(parseInt(e.target.value),a.state.products)},a.addProductToCart=function(e){var t=Object(i.a)(a.state.products),r=a.findProduct(t,e);r.qty=1,r.isAddedToCart=!0,a.setState({products:t}),a.setState(a.updatePrices(!1,r,a.state.cartProducts))},a.deleteProductFromCart=function(e){var t=Object(i.a)(a.state.products);a.findProduct(t,e).isAddedToCart=!1;var r=a.state.cartProducts.filter(function(t){return t.id!=e}),n=a.updateCartNumber(r);a.setState({products:t}),a.setState({cart:n,cartProducts:r})},a.findProduct=function(e,t){var a=e.findIndex(function(e){return e.id==t});return e[a]},a.updateCartDetails=function(e,t){var r=Object(i.a)(a.state.cartProducts),n=a.findProduct(r,e);n.qty=parseInt(t.target.value),a.setState(a.updatePrices(!0,n,r))},a.updatePrices=function(e,t,r){return t.subTotal=a.calSubTotalPrice(t.price,t.qty),e||r.push(t),{cart:a.updateCartNumber(r),cartProducts:r}},a.updateCartNumber=function(e){return e.reduce(function(e,t){return e+parseInt(t.qty)},0)},a.calSubTotalPrice=function(e,t){return"$"+(e=t*a.unformatPrice(e)).toFixed(2)},a.unformatPrice=function(e){return parseFloat(e.slice(1))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"page"},n.a.createElement("h2",{className:"pageHeader"},"Shopping Cart"),n.a.createElement("div",null,n.a.createElement(p,{cart:this.state.cart}),n.a.createElement(y,{onSizeBy:this.sizeByFilter,sizeValues:this.state.sizeValues,onSortBy:this.sortByFilter,sortValues:this.state.sortValues})),n.a.createElement("div",{className:"productAndCartGrid"},n.a.createElement(h,{products:this.state.products,onAddToCart:this.addProductToCart}),n.a.createElement(b,{cartProducts:this.state.cartProducts,onDelete:this.deleteProductFromCart,onQtyChange:this.updateCartDetails})))}}]),t}(r.Component),g=["All","Women","Juniors","Plus","Juniors Plus","Maternity"],P=["Featured","Price-low to high","Price-high to low"],E=[{id:1,name:"Women's Long Sleeve Cardigan",category:"Women",size:"Women",price:"$15.99",featured:48},{id:2,name:"Women's Short Sleeve (Juniors)",category:"Women",size:"Juniors",price:"$7.99",featured:4},{id:3,name:"Women's Plus Size Cardigan",category:"Women",size:"Plus",price:"$12.99",featured:8},{id:4,name:"Women's Crew Neck Sweater (Juniors Plus)",category:"Women",size:"Juniors Plus",price:"$9.49",featured:20},{id:5,name:"Women's Long Sleeve",category:"Women",size:"Women",price:"$8.99",featured:37},{id:6,name:"Maternity Cozy Wrap Cardigan",category:"Women",size:"Maternity",price:"$10.99",featured:2},{id:7,name:"Maternity Striped Pullover",category:"Women",size:"Maternity",price:"$11.99",featured:12},{id:8,name:"Women's Plus Size Pullover",category:"Women",size:"Plus",price:"$10.49",featured:39},{id:9,name:"Women's Long Sleeve Hoodie",category:"Women",size:"Women",price:"$14.99",featured:18}],C=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.a3c7c2ce.chunk.js.map