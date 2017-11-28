# Miam Menu Burger - Custom Your Burger Menu

## Ce qu'il faut avoir :
- une version de jquery
- gulp (pour utiliser les variables scss)

## Que faut-il faire?
- téléchargez le fichier .zip
- ajoutez la ficher *miam-menu-burger.min.css* à votre projet
```html
<link rel="stylesheet" href="miam-menu-burger.min.scss">
```
- ajouter le fichier *miam-menu-burger.min.js* après jquery à la fin de votre body
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="js/miam-menu-burger.min.js"></script>
```
- dans le fichier .html créer un burger menu de la façon suivante
```html
<div class="container-burger">
  <button class="burger-menu">
    <span class="barre barre__top"></span>
    <span class="barre barre__middle"></span>
    <span class="barre barre__bottom"></span>
  </button>
</div>
```

## Vous pouvez commencer la customisation de votre burger!!

### changer l'aspect de votre miam-menu-burger
Plusieurs aspects sont disponibles, il y a en a cinq au total.
Afin d'obtenir un style ou l'autre, ajoutez une classe de la façon suivante.
  - `<button class="burger-menu align-right">`
  - `<button class="burger-menu align-left">`
  - `<button class="burger-menu dotted-left">`
  - `<button class="burger-menu dotted-right">`

### changer les couleurs de votre miam-menu-burger
Il faudra naviguer dans le fichier `src/sass/helpers/_variables.scss`

| Variables | Dédinition |
| -------- | ---------- |
| $color-bg-button | couleur de fond du menu |
| $color-barre | couleur des barres du menu |
| $color-border-button | couleur de la bordure du menu |
| $height-barre | hauteur des barres du menu |
| $padding-barre | espace entre les barres su |
