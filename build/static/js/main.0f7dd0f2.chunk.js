(this["webpackJsonparir-frontend"]=this["webpackJsonparir-frontend"]||[]).push([[0],{29:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){"use strict";t.r(c);var o=t(1),a=t.n(o),r=t(22),n=t.n(r),s=(t(29),t(4)),i=(t(30),t(31),t(32),t(2)),d=t(0),u=function(e){var c=e.inisioSesion,t=e.setInicioSesion,o=Object(i.f)();return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{className:"header-titulo",children:"Tienda de Abarrotes"}),Object(d.jsxs)("div",{className:"header_contenedor-botones",children:[Object(d.jsx)("button",{onClick:function(){o.push("/")},className:"header_boton",children:"Facturaci\xf3n"}),Object(d.jsx)("button",{onClick:function(){o.push("/productos")},className:"header_boton",children:"Todos los Productos"}),Object(d.jsx)("button",{onClick:function(){c&&t(!1)},className:"header_boton",children:"Salir"})]})]})},l=t(24),j=t(11),b=t(10),p=t(5),m=t.n(p),O=t(9),h=(t(40),t(41),t(42),function(e){var c=e.nombreProducto,t=e.unidad,o=e.cantidad,a=e.precio;return Object(d.jsxs)("article",{className:"producto-facturado",children:[Object(d.jsx)("h3",{className:"producto-facturado__titulo",children:c}),Object(d.jsx)("p",{className:"producto-facturado__unidad",children:"".concat(o," ").concat(t)}),Object(d.jsx)("p",{className:"producto-facturado__precio",children:"$ ".concat(a.toFixed(3))})]})}),f=Object(o.createContext)(),x=function(e){var c=Object(o.useState)({}),t=Object(s.a)(c,2),a=t[0],r=t[1],n=Object(o.useState)(""),i=Object(s.a)(n,2),u=i[0],l=i[1],j=Object(o.useState)({usuario:"",contrasena:""}),b=Object(s.a)(j,2),p=b[0],h=b[1],x=Object(o.useState)({}),_=Object(s.a)(x,2),v=_[0],N=_[1],g=Object(o.useState)(1),P=Object(s.a)(g,2),C=P[0],S=P[1],k=Object(o.useState)({nombreProducto:"",cantidad:1,unidad:"",precio:0}),E=Object(s.a)(k,2),y=E[0],I=E[1];Object(o.useEffect)((function(){I({nombreProducto:v.nombre,cantidad:C,unidad:v.unidad,precio:v.precio*C})}),[C,v]);var M=Object(o.useState)([]),w=Object(s.a)(M,2),A=w[0],T=w[1],R=Object(o.useState)(0),U=Object(s.a)(R,2),F=U[0],$=U[1];Object(o.useEffect)((function(){for(var e=A.length,c=0;c<e&&e>0;c++){var t=F;$(t+=A[c].precio)}}),[A]);var D=Object(o.useState)(0),L=Object(s.a)(D,2),B=L[0],J=L[1],q=Object(o.useState)({codigo:"",nombre:"",unidad:"",precio:""}),z=Object(s.a)(q,2),G=z[0],H=z[1],K=Object(o.useState)([]),Q=Object(s.a)(K,2),V=Q[0],W=Q[1],X=Object(o.useState)(1),Y=Object(s.a)(X,2),Z=Y[0],ee=Y[1];return Object(o.useEffect)(Object(O.a)(m.a.mark((function e(){var c,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://18.189.2.215:5000","/api/producto/todos"));case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,W(t);case 7:case"end":return e.stop()}}),e)}))),[Z]),Object(d.jsx)(f.Provider,{value:{mensajeError:u,setTMensajeError:l,informacionUsuario:p,setInformacionUsuario:h,productoSeleccionado:v,setProductoSeleccionado:N,cantidad:C,setCantidad:S,productoParaAgregar:y,setProductoParaAgregar:I,pedido:A,setPedido:T,totalPedido:F,setTotalPedido:$,usuario:a,setUsuario:r,cambio:B,setCambio:J,productoParaCrear:G,setProductoPAraCrear:H,reiniciador:Z,setReiniciador:ee,todosLosProductos:V},children:e.children})},_=function(){var e=Object(o.useContext)(f),c=e.pedido,t=(e.setPedido,e.totalPedido);e.setTotalPedido;return Object(d.jsxs)("div",{className:"resumen-compra",children:[Object(d.jsx)("div",{className:"resumen-compra__contenedor-productos",children:c.map((function(e){return Object(d.jsx)(h,{nombreProducto:e.nombreProducto,unidad:e.unidad,cantidad:e.cantidad,precio:e.precio})}))}),Object(d.jsxs)("div",{className:"resumen-compra__total-pedido",children:[Object(d.jsx)("h3",{className:"resumen-compra__total-titulo",children:"Total Compra"}),Object(d.jsx)("h3",{className:"resumen-compra__total-total",children:"$ ".concat(0===t?t:t.toFixed(3))})]})]})},v=(t(43),function(e){var c=e.valor,t=e.valorParaMostrar,a=Object(o.useContext)(f),r=a.setCambio,n=a.totalPedido;return Object(d.jsx)("button",{onClick:function(){r(0===c?0:c-n)},className:"billete",children:c?"$ ".concat(t):"".concat(t)})}),N=function(){var e=Object(o.useContext)(f),c=e.productoSeleccionado,t=e.setProductoSeleccionado,a=e.cantidad,r=e.setCantidad,n=e.productoParaAgregar,i=e.setProductoParaAgregar,u=e.pedido,p=e.setPedido,h=e.usuario,x=e.cambio,N=e.setCambio,g=e.setTotalPedido,P=Object(o.useRef)(),C=Object(o.useState)({search:""}),S=Object(s.a)(C,2),k=S[0],E=S[1],y=function(){var e=Object(O.a)(m.a.mark((function e(c){var o,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch("".concat("http://18.189.2.215:5000","/api/producto/individual/").concat(k.search));case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,t(a),r(1),P.current.reset();case 10:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"facturacion",children:[Object(d.jsxs)("form",{onSubmit:y,ref:P,className:"facturaci\xf3n_form-buscar",children:[Object(d.jsx)("input",{onChange:function(e){E(Object(b.a)(Object(b.a)({},k),{},Object(j.a)({},e.target.name,e.target.value)))},className:"facturaci\xf3n_form-buscar-input",type:"text",name:"search",placeholder:"C\xf3digo de producto"}),Object(d.jsx)("button",{className:"facturaci\xf3n_form-buscar-button",children:"Buscar"})]}),0!==Object.values(c).length?Object(d.jsxs)("div",{className:"facturaci\xf3n_producto-seleccionado",children:[Object(d.jsx)("div",{className:"facturacion_producto-seleccionado-header",children:Object(d.jsx)("h3",{className:"facturacion_producto-seleccionado-header-titulo",children:"Producto Seleccionado"})}),Object(d.jsx)("h2",{className:"facturaci\xf3n_producto-seleccionado-titulo",children:c.nombre}),Object(d.jsx)("p",{className:"facturaci\xf3n_producto-seleccionado-cantidad",children:"".concat(a," ").concat(c.unidad)}),Object(d.jsx)("p",{className:"facturaci\xf3n_producto-seleccionado-precio",children:"$ ".concat(n.precio.toFixed(3))}),Object(d.jsxs)("div",{className:"facturaci\xf3n_producto-seleccionado-contenedor-botones-cantidad",children:[Object(d.jsx)("button",{onClick:function(){var e=a;a>=2&&r(e-=1)},className:"facturaci\xf3n_producto-seleccionado-botone-cantidad",children:"Menos"}),Object(d.jsx)("button",{onClick:function(){var e=a;r(e+=1)},className:"facturaci\xf3n_producto-seleccionado-botone-cantidad",children:"Mas"})]}),Object(d.jsxs)("div",{className:"facturaci\xf3n_producto-seleccionado-contenedor-botones-agregar",children:[Object(d.jsx)("button",{onClick:function(){t({}),r(1),N(0)},className:"facturaci\xf3n_producto-seleccionado-botone-agregar",children:"Limpiar"}),Object(d.jsx)("button",{onClick:function(){p([].concat(Object(l.a)(u),[n])),N(0)},className:"facturaci\xf3n_producto-seleccionado-botone-agregar",children:"Agregar a la compra"})]})]}):Object(d.jsx)("div",{className:"facturaci\xf3n_producto-no-seleccionado",children:Object(d.jsx)("h3",{className:"facturaci\xf3n_producto-no-seleccionado-titulo",children:"Por favor busque o seleccione un producto"})}),Object(d.jsxs)("div",{className:"facturaci\xf3n_contenedor-productos-mas-comprados",children:[Object(d.jsx)("div",{className:"facturacion_producto-seleccionado-header",children:Object(d.jsx)("h3",{className:"facturacion_producto-seleccionado-header-titulo",children:"Seleccione Billete Recibido"})}),Object(d.jsxs)("div",{className:"facturacion__contenedor-billetes",children:[Object(d.jsx)(v,{valor:1,valorParaMostrar:"1.000"}),Object(d.jsx)(v,{valor:2,valorParaMostrar:"2.000"}),Object(d.jsx)(v,{valor:50,valorParaMostrar:"5.000"}),Object(d.jsx)(v,{valor:10,valorParaMostrar:"10.000"}),Object(d.jsx)(v,{valor:20,valorParaMostrar:"20.000"}),Object(d.jsx)(v,{valor:50,valorParaMostrar:"50.000"}),Object(d.jsx)(v,{valor:100,valorParaMostrar:"100.000"}),Object(d.jsx)(v,{valor:0,valorParaMostrar:"Exacto"})]}),Object(d.jsx)("button",{onClick:function(){N(0),r(1),p([]),g(0),i({nombreProducto:"",cantidad:1,unidad:"",precio:0}),t({}),P.current.reset()},className:"facturacion__boton-completar-venta",children:"Cobrar Pedido"})]}),Object(d.jsx)("p",{className:"facturacion__cambio-title",children:"Cambio: $".concat(0===x?0:x.toFixed(3))}),Object(d.jsx)("h2",{className:"facturaci\xf3n_nombre-agente",children:h.nombreReal}),Object(d.jsx)(_,{})]})},g=(t(44),t(45),function(e){var c=e.codigo,t=e.nombre,a=e.unidad,r=e.precio,n=Object(o.useContext)(f),s=n.reiniciador,i=n.setReiniciador,u=function(){var e=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://18.189.2.215:5000","/api/producto/borrar/").concat(c),{method:"DELETE"});case 2:t=s,i(t+=1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("article",{className:"producto",children:[Object(d.jsxs)("div",{className:"producto_contenedor-codigo",children:[Object(d.jsx)("p",{className:"producto_codigo-titulo",children:"C\xf3digo:"}),Object(d.jsx)("h3",{className:"producto_codigo",children:c})]}),Object(d.jsx)("h3",{className:"producto_nombre",children:t}),Object(d.jsxs)("div",{className:"producto__otra-informacion-contenedor",children:[Object(d.jsx)("p",{className:"producto__otra-informacion",children:a}),Object(d.jsx)("p",{className:"producto__otra-informacion",children:"$ ".concat(r.toFixed(3))})]}),Object(d.jsx)("div",{className:"producto__contenedor-botones",children:Object(d.jsx)("button",{onClick:u,className:"producto__boton-eliminar",children:"Eliminar"})})]})}),P=function(){var e=Object(o.useContext)(f),c=e.productoParaCrear,t=e.setProductoPAraCrear,a=e.reiniciador,r=e.setReiniciador,n=e.todosLosProductos,s=Object(o.useRef)(),i=function(){var e=Object(O.a)(m.a.mark((function e(t){var o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat("http://18.189.2.215:5000","/api/producto/crear"),{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 3:s.current.reset(),o=a,r(o+=1);case 6:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),u=function(e){t(Object(b.a)(Object(b.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"gestion-productos",children:[Object(d.jsxs)("form",{ref:s,onSubmit:i,className:"gestion-productos__product-form",children:[Object(d.jsx)("div",{className:"gestion-productos__product-form-header",children:Object(d.jsx)("h2",{className:"gestion-productos__product-form-header-title",children:"Agregar Nuevo Producto"})}),Object(d.jsxs)("div",{className:"gestion-productos__product-form-input-container",children:[Object(d.jsx)("input",{onChange:u,className:"gestion-productos__product-form-input",type:"text",name:"codigo",placeholder:"Codigo. Ej: 12345678"}),Object(d.jsx)("input",{onChange:u,className:"gestion-productos__product-form-input",type:"text",name:"nombre",placeholder:"Nombre. Ej: Azucar"}),Object(d.jsx)("input",{onChange:u,className:"gestion-productos__product-form-input",type:"text",name:"unidad",placeholder:"Unidad. Ej: kilogramo"}),Object(d.jsx)("input",{onChange:u,className:"gestion-productos__product-form-input",type:"text",name:"precio",placeholder:"Precio. Ej: 10.400"}),Object(d.jsx)("button",{className:"gestion-productos__product-form-boton",children:"Guardar"})]})]}),Object(d.jsxs)("div",{className:"gestion-productos__all-products-container",children:[Object(d.jsx)("div",{className:"gestion-productos__product-form-header",children:Object(d.jsx)("h2",{className:"gestion-productos__product-form-header-title",children:"Productos disponibles"})}),n.map((function(e){return Object(d.jsx)(g,{codigo:e.codigo,nombre:e.nombre,unidad:e.unidad,precio:e.precio})}))]})]})},C=t(18),S=function(e){var c=e.inisioSesion,t=e.setInicioSesion;return Object(d.jsx)(C.a,{children:Object(d.jsxs)("div",{className:"contenedor-principal",children:[Object(d.jsx)(u,{inisioSesion:c,setInicioSesion:t}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/productos",component:P}),Object(d.jsx)(i.a,{exact:!0,path:"/",component:N})]})]})})},k=(t(46),function(e){var c=e.setInicioSesion,t=Object(o.useContext)(f),a=t.mensajeError,r=t.setTMensajeError,n=t.informacionUsuario,s=t.setInformacionUsuario,i=t.setUsuario,u=function(){var e=Object(O.a)(m.a.mark((function e(t){var o,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("".concat("http://18.189.2.215:5000","/api/usuario/").concat(n.usuario));case 4:return o=e.sent,e.next=7,o.json();case 7:(a=e.sent).contrasena===n.contrasena?(c(!0),r(""),i(a)):r("Informaci\xf3n incorrecta"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r("verifique la conexion con su base de datos");case 14:case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(c){return e.apply(this,arguments)}}(),l=function(e){s(Object(b.a)(Object(b.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"inicio-sesion",children:[Object(d.jsxs)("form",{onSubmit:u,className:"inicio-sesion__forma",children:[Object(d.jsx)("div",{className:"inicio-sesion__forma-header",children:Object(d.jsx)("h1",{className:"inicio-sesion__forma-header-titulo",children:"Inicio de Sesi\xf3n"})}),Object(d.jsx)("input",{onChange:l,className:"inisio-sesion__input",type:"text",name:"usuario",placeholder:"Ingrese su usuario"}),Object(d.jsx)("input",{onChange:l,className:"inisio-sesion__input",type:"password",name:"contrasena",placeholder:"Ingrese su contrase\xf1a"}),Object(d.jsx)("button",{className:"inisio-sesion__boton",children:"Iniciar Sesion"})]}),Object(d.jsx)("p",{className:"inisio-sesion__mensaje",children:a})]})});var E=function(){var e=Object(o.useState)(!1),c=Object(s.a)(e,2),t=c[0],a=c[1];return Object(d.jsx)(x,{children:Object(d.jsx)("div",{className:"App",children:t?Object(d.jsx)(S,{inisioSesion:t,setInicioSesion:a}):Object(d.jsx)(k,{setInicioSesion:a})})})};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0f7dd0f2.chunk.js.map