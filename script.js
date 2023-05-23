const Proyectos =[{

  imagen: "/Imagenes/codeFlow.png",
  titulo: "CodeFlow System",
  descripcion :" Sistema de Ventas, Gestion de Clientes deudores, Usuarios del programa, Productos, Stock, Sist. de Logeo (Encriptacion MD5), Reportes, Impresion de Ticket, Secciones por roles, GUI Moderna y Responsiva, Backup, Personalizacion Colores del Programa, Aviso bajo Stock, Activador Serial key",
  descripResumen :"Sistema Desarollado para la gestion de Venta en Polirubros.",
  Tecnologias:["Imagenes/c-sharp.png","Imagenes/Microsoft_.NET_logo.svg.png","Imagenes/sql-server.png"]
},
{

  imagen: "/Imagenes/pizzeria.png",
  titulo: "Formaggio",
  descripcion :"Aplicación dirigida a Pizzeria Formaggio, cuenta con Sistema de ventas, Gestión de clientes, socios, usuarios y productos, sistema de Logeo,Envió de Email, Backup,Bitácora, Descuentos, Multi Idioma, Impresión de Ticket, Secciones por Roles, GUI Moderna, Encriptación de contraseñas MD5.",
  descripResumen :"Sistema Desarollado para la gestion de Venta en una Pizzeria.",
  Tecnologias:["Imagenes/c-sharp.png","Imagenes/Microsoft_.NET_logo.svg.png","Imagenes/sql-server.png"]
},
{

  imagen: "/Imagenes/Cine.png", 
  titulo:  "CineHoyts",
  descripcion : "Aplicación para Registro de ventas, Gestión de usuarios, Sistema de Logeo, Reportes, Informes generales",
  descripResumen :"Sistema Desarollado para la gestion ventas y Administracion de un cine.",
  Tecnologias:["Imagenes/c-sharp.png","Imagenes/Microsoft_.NET_logo.svg.png","Imagenes/sql-server.png"]
},
{

  imagen: "/Imagenes/merca.png", 
  titulo: "Mercado Libre",
  descripcion : "Simula mercado libre, se puede registrar productos nuevos y simular una compra en el respectivo carrito",
  descripResumen :"Proyecto para Programacion III, Se pueden añadir nuevos productos y añadir al carrito",
  Tecnologias:["/Imagenes/html.png","Imagenes/css-3.png","Imagenes/bootstrap.png","Imagenes/70142.png"]
}
  
  ]







function GetProyectos(){
  return  Proyectos;
}


function scrollToSection(text) {
    const section = document.getElementById(text);
    section.scrollIntoView({ behavior: 'smooth' });
  }






