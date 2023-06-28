# test-git

dsfsfsdfsdfgdfg

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

 
El comando git reset --soft se utiliza para deshacer commits y mover la rama actual a un commit anterior, manteniendo los cambios realizados en los commits deshechos. Los cambios permanecerán en el área de preparación (staging area) para que puedas hacer nuevos commits con ellos.

```
git log                             # Ver los commits y encontrar el hash del commit al que deseas retroceder
git reset --soft <hash_commit>      # Retrocede al commit deseado, manteniendo los cambios en el área de preparación
```

## git rebase -i

Supongamos que tienes el siguiente historial de commits:

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