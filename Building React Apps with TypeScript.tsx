# Checkpoint : Conversion de code React JavaScript vers TypeScript

## Objectif

L'objectif de ce checkpoint est de convertir deux composants React écrits en JavaScript vers **TypeScript**, tout en ajoutant les types nécessaires aux propriétés (`props`) et à l'état (`state`) des composants.

Les fichiers contenant du JSX utilisent l'extension **`.tsx`**.

---

# Code 01 — Composant Greeting

### Code JavaScript original

```jsx
import React from 'react';

const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

### Conversion en TypeScript

```tsx
import React from 'react';

// Définition des propriétés du composant.
// La propriété "name" doit être une chaîne de caractères.
interface GreetingProps {
  name: string;
}

// Le composant reçoit les propriétés avec le type GreetingProps.
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

// Export du composant
export default Greeting;
```

### Explication des modifications

1. J'ai créé une interface `GreetingProps` pour définir les propriétés du composant.
2. La propriété `name` est définie comme étant de type `string`.
3. J'ai indiqué que les propriétés reçues par `Greeting` doivent respecter l'interface `GreetingProps`.
4. Le fichier doit être enregistré avec l'extension `.tsx` car il contient du JSX.

---

# Code 02 — Composant Counter

### Code JavaScript original

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
```

### Conversion en TypeScript

```tsx
import React, { Component } from 'react';

// Définition du type de l'état du composant.
// La valeur de "count" est un nombre.
interface CounterState {
  count: number;
}

// Le composant ne reçoit aucune propriété,
// donc les Props sont représentées par {}.
// CounterState définit la structure de l'état.
class Counter extends Component<{}, CounterState> {

  // Initialisation de l'état avec le type CounterState.
  state: CounterState = {
    count: 0
  };

  // Fonction permettant d'incrémenter le compteur.
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // Affichage du composant.
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>

        {/* Appel de increment lorsque le bouton est cliqué */}
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

// Export du composant
export default Counter;
```

### Explication des modifications

1. J'ai créé l'interface `CounterState` pour définir la structure de l'état.
2. La propriété `count` est définie avec le type `number`.
3. J'ai utilisé `Component<{}, CounterState>` pour indiquer que le composant ne reçoit aucune prop et qu'il utilise l'état `CounterState`.
4. J'ai ajouté `state: CounterState` afin que TypeScript connaisse le type de l'état.
5. La fonction `increment` conserve le même fonctionnement que dans la version JavaScript.
6. Le fichier doit être enregistré avec l'extension `.tsx`.

---

# Conclusion

La conversion de JavaScript vers TypeScript permet de rendre le code React plus sûr grâce au typage.

Dans ces deux composants, les principales modifications sont :

* Ajout d'une interface pour les `props`.
* Ajout d'une interface pour le `state`.
* Définition du type `string` pour `name`.
* Définition du type `number` pour `count`.
* Utilisation de l'extension `.tsx` pour les composants contenant du JSX.

Ainsi, TypeScript permet de détecter plus facilement les erreurs de type avant l'exécution de l'application.
