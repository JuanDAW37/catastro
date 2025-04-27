# **INFOCATASTRO 1.0**
<div id="catastro"></div>

# **Índice** 📑

1. [Descripción](#id1)
2. [Estado](#id2)
3. [Funcionalidades](#id3)
   * [Búsqueda de inmuebles](#id4)        
4. [Despliegue local](#id5)
5. [Acceso a la aplicación](#id6)      
6. [Tecnologías usadas](#id7)   
   * [Backend](#id8)<span id="v8"></span>
   * [Frontend](#id9)<span id="v9"></span>   
   * [IDE'S](#id10)
   * [Control de código](#id11)   
7. [Autoría](#id12)

---

## <div id="id1">1. Descripción&nbsp;👀</div>

Esta mini aplicación está construida para realizar consultas a la API de Goolzoom. Una vez seleccionada la provincia, municipio, calle y número, se recibe la información catastral del inmueble.

---

## <div id="id2">2. Estado&nbsp;🏁</div>

La aplicación está finalizada, a no ser por alguna implementación que se pueda incorporar a mayores.
Es un proyecto con licencia OpenSource.

---

## <div id="id3">3. Funcionalidades&nbsp;🛠</div>

### ***<div id="id4">Búsqueda de Inmuebles</div>***
Tenemos un primer select para la Provincia, escogida ésta, se nos presenta un segundo select para el municipio, cuando lo tengamos seleccionado, escogemos calle y por último el número del inmueble. Al acabar la selección, se nos muestra toda la información en la tabla de la derecha. En ella se visualiza la referencia catastral el piso y la puerta.
Al pulsar en **Nueva Consulta**, se borran los datos de la tabla y se reinician los selects.

---

## <div id="id5">4. Despliegue local&nbsp;🏠</div>

 - Se necesita tener instalado vite, node y npm, de forma global.
 - Clona este repositorio. 
 - Accede a la carpeta creada. - 
 - Ejecuta npm install.
 - Accede a la carpeta src/components/API
 - Crea un fichero **key.ts**, copia esto ````export const APIKEY:string = ```` y pégalo en él junto con tu *API KEY* de Goolzoom, debes estar registrado en Goolzoom y haber creado una *API KEY* para poder usar la *API*, si no lo estás, regístrate, crea una *API KEY* dentro de Credentials y úsala dentro de **key.ts**. Tu *API KEY* debe ir encerrada entre comillas dobles o simples.
 - Ejecuta npm run build.
 - La apolicación final la tenemos en la carpeta dev.
 - Copia la carpeta dev o todo su contenido a donde quieras.
   
---

## <div id="id6">5. Acceso a la aplicación&nbsp;🚀</div>

- Accede a la carpeta dev o a la carpeta que hayas creado con su contenido y lanza index.html
   
---

## <div id="id7">6. Tecnologías usadas&nbsp;💾</div>

La aplicación ha sido desarrollada usando las tecnologías y dependencias que se describen a continuación.

### <div id="id8">Backend</div>

![Goolzoom](https://img.shields.io/badge/Goolzoom-Goolzoom?style=plastic&labelColor=%2324366E&color=%2324366E&link=https%3A%2F%2Fwww.goolzoom.com%2Fapi%2Fdocumentation%2FGeneral.aspx) Goolzoom facilita el acceso a toda la información contenida en sus bases de datos mediante una API REST. Esta API contiene datos del Catastro de Hacienda, del Registro de la Propiedad así como datos estadísticos obtenidos de diversas fuentes.

### <div id="id9">Frontend</div>

![ENodeJs](https://img.shields.io/badge/NodeJs-NodeJs?style=plastic&logo=nodedotjs&logoColor=white&color=%235FA04E) Entorno de ejecución de JavaScript multiplataforma, de código abierto y gratuito que permite a los desarrolladores crear servidores, aplicaciones web, herramientas de línea de comando y scripts.

![React](https://img.shields.io/badge/ReactJs-ReactJs?style=plastic&logo=react&logoColor=%2361DAFB&labelColor=white&color=%2361DAFB) React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

![JavaScript](https://img.shields.io/badge/JavaScript-JavaScript?style=plastic&logo=javascript&logoColor=white&labelColor=%23F7DF1E&color=%23F7DF1E) Lenguaje de programación que se usa para crear páginas web interactivas y para programación del lado del Backend.

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) Lenguaje de marcado estándar para la estructura de la interfaz.

![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white) Hojas de estilo para el diseño y la presentación.

### <div id="id10">IDE</div>

![VS Code](https://img.shields.io/badge/VS%20Code-%23007ACC.svg?style=flat&logo=visualstudiocode&logoColor=white) [Visual Studio Code](https://code.visualstudio.com/): Editor de código fuente utilizado para el desarrollo frontend y backend.

### <div id="id11">Control de código</div>

![GitHub](https://img.shields.io/badge/GitHub-black?logo=github) [GitHub](https://github.com/): Plataforma online para almacenamiento y gestión de control de versiones utilizado para gestionar el código fuente del proyecto.

## <div id="id12">9. Autoría</div>

- Realizada por Juan Jesús Tenreiro Rodríguez - 2025.

[🔝](#catastro)
