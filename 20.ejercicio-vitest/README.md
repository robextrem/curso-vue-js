# Registro de Usuario - Guía de Pruebas con Vitest

Este proyecto tiene como objetivo la creación de un formulario de registro de usuario con los campos esenciales. El formulario se desarrollará en **un solo componente y NO requiere Vue Router ni Pinia**.

## Campos del Formulario

1. Nombre
2. Correo electrónico
3. Password
4. Confirmar Password
5. Boton de enviar

## Realizar pruebas con vitest:

`npm i vitest jsdom @vue/test-util`

1. Que el nombre no este vacio
2. Que el campo de correo electronico tenga formato de email correo@dominio.com
   - RegEx para validar email:  `/^[\w\.-]+@[\w\.-]+\.\w+$/`
3. Que el password sea de al menos 8 caracteres
4. Que el password coincida con el campo confirmar password
5. Que al dar click al boton enviar, me aparezca un mensaje de éxito