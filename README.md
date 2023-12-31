# test-git

## git log

ver el historial de los commits y su numero de serie para poder interactuar con ellos.

```
git log
```

## git commit --force

cuando se realiza un cambio y se quiere forcar a el repostorio en la nube a que se actulizae con los cambias hay que hacer --force, los comandos a continuacion lo necesitan para actualizar el repostorio en github o gitlab

```
git push origin "nombre de la rama" --force
```

## git commit --amend

El comando git commit --amend se utiliza para realizar cambios adicionales o corregir el commit más reciente en Git. Puedes utilizarlo para agregar archivos nuevos, modificar los archivos existentes o editar el mensaje del commit.

```
$ git add archivo_nuevo.txt        # Agrega el archivo que olvidaste
$ git commit --amend               # Modifica el commit anterior
```

Si deseas cambiar el contenido del código en el commit anterior, puedes seguir los siguientes pasos:

Realiza los cambios en tus archivos locales para reflejar el nuevo contenido que deseas en el commit.

Agrega los cambios al área de preparación utilizando el comando git add seguido de los archivos que deseas incluir. Por ejemplo, si deseas incluir todos los archivos modificados, puedes usar git add . para agregarlos todos.

Luego, ejecuta el comando git commit --amend. Se abrirá un editor de texto que te permitirá modificar el mensaje del commit. Si solo deseas cambiar el contenido del código y no el mensaje del commit, puedes cerrar el editor sin realizar cambios.

Git actualizará el commit más reciente con los cambios que agregaste al área de preparación.


Si aún no has enviado el commit original al repositorio remoto y deseas reemplazarlo completamente con el commit modificado, puedes hacerlo utilizando el comando `git push --force`. Sin embargo, ten en cuenta que esto reescribirá la historia del repositorio remoto y podrías perder cualquier trabajo que otras personas hayan enviado después del commit original.

el comando `git push --force origin nombre-de-tu-rama` (reemplaza "nombre-de-tu-rama" con el nombre real de tu rama). Esto enviará la versión modificada del commit al repositorio remoto y reemplazará el commit original.


## git reset 

si NO hemos subido el commit a nuestro repositorio remoto (no hemos realizado push):

```
git reset --hard HEAD~1
```

--head: Con esta opción estamos indicando que retrocedemos a el comit HEAD~1 y perdemos todas las confirmaciones posteriores. HEAD~1 es un atajo para apuntar al commit anterior al que nos encontramos. CUIDADO, con la opcion –head, ya que como he dicho se borran todos los commits posteriores al commit al que indicamos.

```
git reset --soft HEAD~1 
```
--soft: con esta opción estamos indicando que retrocedemos a el commit HEAD~1 y no perdemos los cambios de los commits posteriores. Todos los cambios aparecerán como pendientes para realizar un commit.

## git restore

Para descartar los cambios y volver a la versión anterior de esos archivos, cuando se realiza un `git merge` puedes utilizar el comando git restore --staged <nombre-del-archivo> seguido del comando git restore <nombre-del-archivo>.

Para descartar los cambios y volver a la versión anterior de esos archivos, puedes utilizar el comando `git restore --staged <nombre-del-archivo>`seguido del `comando git restore <nombre-del-archivo>`.

A continuación un ejemplo con los archivos: locales.json routes.js ForeignCurrency.js KycTaskSteps.js, puedes ejecutar los siguientes comandos para descartar los cambios y volver a la versión anterior de los archivos con conflictos:

``` 
git restore --staged src/locales.json
git restore --staged src/routes.js
git restore --staged src/tasks/KycTask/ForeignCurrency.js
git restore --staged src/tasks/KycTask/KycTaskSteps.js

git restore src/locales.json
git restore src/routes.js
git restore src/tasks/KycTask/ForeignCurrency.js
git restore src/tasks/KycTask/KycTaskSteps.js
```

Estos comandos revertirán los archivos a la versión anterior antes de los conflictos. Luego podrás revisar y modificar los archivos según sea necesario.

Recuerda que una vez que hayas realizado estos cambios, deberás ejecutar los comandos **`git add <nombre-del-archivo>`** y **`git commit`** para agregar los archivos modificados y crear un nuevo commit que refleje los cambios.

## git rebase -i
Ahora, veamos los diferentes comandos que se pueden utilizar en el editor de texto durante el rebase interactivo:

`pick`: Se utiliza para mantener el commit tal como está.

`drop`: Se utiliza para eliminar el commit del historial. Si deseas eliminar un commit específico, simplemente cambia la palabra clave pick por drop en la línea correspondiente a ese commit.

`reword`: Se utiliza para cambiar el mensaje del commit. Si deseas modificar el mensaje de un commit, cambia la palabra clave pick por reword en la línea correspondiente a ese commit.

`fixup`: Se utiliza para fusionar el commit con el commit anterior sin mantener el mensaje del commit que se fusiona. Si deseas fusionar un commit con el commit anterior, puedes cambiar la palabra clave pick por fixup en la línea correspondiente a ese commit.

`squash`: Se utiliza para fusionar el commit con el commit anterior y combinar sus mensajes en un solo mensaje. Si deseas fusionar un commit con el commit anterior y combinar sus mensajes, cambia la palabra clave pick por squash en la línea correspondiente a ese commit.

`edit`: Se utiliza para hacer cambios en el commit. Si deseas realizar cambios en un commit, puedes cambiar la palabra clave pick por edit en la línea correspondiente a ese commit.
Supongamos que tienes el siguiente historial de commits:


Si realizas un `drop` en el penúltimo commit durante un rebase interactivo, eliminarás ese commit y el commit más reciente (último) también se eliminará automáticamente como parte del proceso de rebase.

Cuando realizas un drop en un commit durante un rebase interactivo, estás indicando a Git que elimine ese commit del historial. Sin embargo, debido a la naturaleza lineal del historial de commits en Git, si eliminas un commit, los commits posteriores a ese commit también se ven afectados y se eliminan en el proceso de rebase.

```
commit abcdef1 - Mensaje del commit A
commit 1234567 - Mensaje del commit B
commit xyz7890 - Mensaje del commit C
```

### reword

La opción reword se utiliza para cambiar el mensaje de un commit.

Ejemplo:
Si quieres cambiar el mensaje del commit B, la lista de commits se vería así:

```
pick abcdef1 - Mensaje del commit A
reword 1234567 - Nuevo mensaje del commit B
pick xyz7890 - Mensaje del commit C
```
### reword

La opción reword se utiliza para cambiar el mensaje de un commit.

Ejemplo:
Si quieres cambiar el mensaje del commit B, la lista de commits se vería así:

```
pick abcdef1 - Mensaje del commit A
pick 1234567 - Mensaje del commit B
pick xyz7890 - Mensaje del commit C
```
### reword

La opción reword se utiliza para cambiar el mensaje de un commit.

Ejemplo:
Si quieres cambiar el mensaje del commit B, la lista de commits se vería así:

```
pick abcdef1 - Mensaje del commit A
reword 1234567 - Nuevo mensaje del commit B
pick xyz7890 - Mensaje del commit C
```