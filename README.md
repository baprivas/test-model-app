
## Instrucciones 

1. Crear Formulario que permita registrar y modificar Paises
    - Los paises deben guardarse en localStorage en un key "countries" y deben 
    tener los siguientes datos: 
        - name: Debe ser agregado por el usuario desde un formulario. 
        - id: definido internamente, no visible en el formulario y unico.

2. Crear Formulario que permita registrar Usuarios
    - Los usuarios deben guardarse en localStorage en un key "users" y deben tener los siguientes datos:
        - id (agregado por el usuario) como una cedula,
        - name: Agregado por el usuario, nombres del usuario.
        - age: edad del usuario, numerica.
        - mail.
        - country: Debe ser un campo de seleccion cargado con los paises registrados 
        y su valor debe ser el correspondiente al id del pais.


4. El objeto User y Objeto Country:
        - Deben recibir el id como parametros al ser instanciados, validar que exista el registro en localStorage
        y cargar el objeto si existe.
        - Deben tener definidas como propiedades todos los datos pertenecientes al objeto.
        - Deben tener declarado un metodo "getters" que devuelva un objeto plano con todos los datos del objeto instanciado.

5. El componente list debe mostrar un listado de los usuarios y dar opcion a modificar y 
     eliminar.
         - El listado debe ser cargado por medio del objeto collection. El objeto collection
         debera ser cargado a partir de un arreglo guardado en localStorage que solo tenga los ids de los usuarios.
         - El objeto collection debera al obtener los datos, instanciar el objeto User pasandole el id.
         - El objeto user debera hacer la carga del mismo a partir del registro en localStorage y 
         disponibilizar la informacion para que pueda listarse.
         - El item de localStorage para el listado debe llamarse "users.list" 
         
6. La prueba debe ser subida como un fork o repositorio personal en github.

## Evaluaciones
1. No pueden existir dos paises iguales
2. No pueden existir dos usuarios con el mismo id.
3. Validar tipos de dato.
4. Implementacion de los modelos
5. Implementacion del objeto collection
6. Manejo de localStorage regisrando todas las keys especificadas en el proyecto y su uso
7. Poder modificar registros.
8. Poder elimianar registros.

## Puntos de interes

1. No se evaluara el patrón de diseño implementado para el manejo de interfaces.

      
        
       
     
