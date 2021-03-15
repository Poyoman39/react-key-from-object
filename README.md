
# react-key-from-object

Generate react keys from objects / functions ... anything

## Goal

When using lists in React you need to [use keys](https://reactjs.org/docs/lists-and-keys.html) on items to let react know which array item is associated with wich visual.

To do that you have to specify a **unique string** as a *key* prop.

Let's consider you have this array: 

    const dogs = [
      { name: "Perle", age: 2 },
      { name: "Tenor", age: 10 },
      { name: "Perle", age: 12 },
    ];

So we would have a react list looking like this

    <ul>
      {dogs.map((dog) => (
        <li key={dog.name}>
          {dog.name}
          -
          {dog.age}
        </li>
      ))
    </ul>

The problem here is our dog "names" are not unique ... So we would need to generate a unique ID to every dogs.

In some situations this is fastidious ... that's the here ***react-key-from-object*** comes !

    import { useKeyGen } from 'react-key-from-object'
    
    const DogList = () => {
      const keyGen = useKeyGen();

      return (
        <ul>
          {dogs.map((dog) => (
            <li key={keyGen.getKey(dog)}>
              {dog.name}
              -
              {dog.age}
            </li>
          ))
        </ul>
      );
    }

This will associate an unique key to your object (without mutating it).

Want to know how it works ? Have a look to the source code, it's really tiny !

## When not to use it

You **MUST NOT** use this library if you need to rely on [react reconciliation](https://reactjs.org/docs/reconciliation.html)
*(So if you are using server side rendering for instance)*

## How to use

### The hook way (recommended)

    import { useKeyGen } from 'react-key-from-object'
    
    const DogList = () => {
      const keyGen = useKeyGen();

      return (
        <ul>
          {dogs.map((dog) => (
            <li key={keyGen.getKey(dog)}>
              {dog.name}
              -
              {dog.age}
            </li>
          ))
        </ul>
      );
    }

### The "classic" way

    import ReactKeyGen from 'react-key-from-object'
    
    const keyGen = new ReactKeyGen()
    
    const t = {};
    const u = {};
    
    keyGen.getKey(t); // keyGen_0
    keyGen.getKey(u); // keyGen_1
    keyGen.getKey(t); // keyGen_0
    keyGen.getKey({}); // keyGen_2