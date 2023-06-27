# test-git

sdmwsdkfololwfkosd

## git commit --amend

El comando git commit --amend se utiliza para realizar cambios adicionales o corregir el commit más reciente en Git. Puedes utilizarlo para agregar archivos nuevos, modificar los archivos existentes o editar el mensaje del commit.
```
$ git add archivo_nuevo.txt        # Agrega el archivo que olvidaste
$ git commit --amend               # Modifica el commit anterior
```

## git reset --soft:
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